import { handleEnquiry } from "@/lib/enquiries/handler";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function POST(request: Request) {
  return handleEnquiry(request, "branding");
}
