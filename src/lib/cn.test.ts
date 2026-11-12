import { describe, expect, it } from "vitest";

import { cn } from "./cn";

describe("cn", () => {
  it("joins truthy class names", () => {
    expect(cn("a", false, undefined, "b", null)).toBe("a b");
  });

  it("returns an empty string when no class names are supplied", () => {
    expect(cn()).toBe("");
  });
});
