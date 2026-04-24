import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it("renders the deal momentum playbook page", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { level: 1, name: /^contact$/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /guardrails/i })
    ).toBeInTheDocument();
    expect(
      screen.getAllByText(/deal momentum/i).length
    ).toBeGreaterThan(0);
  });
});
