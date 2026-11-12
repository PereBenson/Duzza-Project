import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "./Button";

describe("Button", () => {
  it("renders its label and uses a non-submitting type by default", () => {
    render(<Button>Request a Quote</Button>);

    const button = screen.getByRole("button", { name: "Request a Quote" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");
  });

  it("applies the selected variant and disabled state", () => {
    render(
      <Button variant="secondary" disabled>
        Disabled action
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Disabled action" });
    expect(button).toBeDisabled();
    expect(button.className).toContain("border-ink");
  });
});
