import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Texts from "./Texts";

describe("Testing Texts.js", () => {
  it("should be able to show the p element with the right text", () => {
    render(<Texts text="test" />);
    const text = screen.getByTestId("text-component");
    expect(text).toHaveTextContent("test");
  });
});
