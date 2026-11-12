import { describe, expect, it } from "vitest";

import { site } from "./site";

describe("site divisions", () => {
  it("keeps active divisions linked to their own routes", () => {
    const active = site.divisions.filter((division) => division.status === "active");

    expect(active).toHaveLength(2);
    expect(active.every((division) => Boolean(division.href))).toBe(true);
    expect(active.map((division) => division.name)).toEqual([
      "Duzza Projects",
      "Duzza Branding",
    ]);
  });

  it("publishes fashion and food as coming-soon cards without routes", () => {
    const fashion = site.divisions.find((division) => division.name === "Fashion & Clothing");
    const food = site.divisions.find((division) => division.name === "Food & Hospitality");

    expect(fashion?.status).toBe("coming-soon");
    expect(fashion?.statusLabel).toBe("Coming soon");
    expect(fashion?.href).toBeUndefined();

    expect(food?.status).toBe("coming-soon");
    expect(food?.statusLabel).toBe("Coming soon");
    expect(food?.href).toBeUndefined();
  });
});
