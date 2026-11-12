import { createHash } from "node:crypto";

import { validateEnquiry, type EnquiryKind } from "./validate";

const MAX_BODY_BYTES = 24_000;
const RATE_LIMIT_MAX = 8;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const MIN_COMPLETION_MS = 1_200;

type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();

function previewResponse() {
  return Response.json(
    {
      ok: true,
      preview: true,
      message: "Prototype validation passed. No enquiry data was sent or stored.",
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}

function errorResponse(message: string, status: number, fieldErrors?: Record<string, string>) {
  return Response.json(
    {
      ok: false,
      message,
      ...(fieldErrors ? { fieldErrors } : {}),
    },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}

function getClientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const raw = forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "local";
  return createHash("sha256").update(raw).digest("hex").slice(0, 32);
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (bucket.count >= RATE_LIMIT_MAX) {
    return false;
  }

  bucket.count += 1;
  return true;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function handleEnquiry(request: Request, kind: EnquiryKind): Promise<Response> {
  if (request.headers.get("content-type")?.split(";")[0] !== "application/json") {
    return errorResponse("Send the enquiry as JSON.", 415);
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return errorResponse("The enquiry is too large.", 413);
  }

  if (!checkRateLimit(getClientKey(request))) {
    return errorResponse("Too many attempts. Wait a few minutes and try again.", 429);
  }

  let body: unknown;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return errorResponse("The enquiry is too large.", 413);
    }
    body = JSON.parse(raw);
  } catch {
    return errorResponse("The enquiry could not be read.", 400);
  }

  if (!isRecord(body)) {
    return errorResponse("The enquiry could not be read.", 400);
  }

  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return previewResponse();
  }

  const startedAt = Number(body.startedAt);
  if (Number.isFinite(startedAt) && Date.now() - startedAt < MIN_COMPLETION_MS) {
    return errorResponse("Please take a moment to complete the form.", 422);
  }

  const result = validateEnquiry(kind, body);
  if (!result.ok) {
    return errorResponse(result.message, 422, result.fieldErrors);
  }

  return previewResponse();
}
