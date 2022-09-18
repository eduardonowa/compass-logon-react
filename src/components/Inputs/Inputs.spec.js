import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Inputs from "./Inputs";

afterEach(cleanup);

describe("Testing Input.js", () => {
  it("should be able to show input element", () => {
    render(<Inputs />);
    const input = screen.getByTestId("input");
    expect(input).toBeInTheDocument();
  });
  it("should be able to have the indicate type and placeholder", () => {
    render(<Inputs placeholder="test" type="text" />);
    const input = screen.getByTestId("input");
    expect(input.type).toBe("text");
    expect(input.placeholder).toBe("test");
  });
});
