import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Button from "./Button";

describe("Testing Button.js", () => {
  it("should be able to show the button element", () => {
    render(<Button />);
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });
});
