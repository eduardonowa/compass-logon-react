import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Titles from "./Titles";

describe("Testing Titles.js", () => {
  it("should be able to show the  element with the right text", () => {
    render(<Titles text="test" />);
    const text = screen.getByTestId("title-component");
    expect(text).toHaveTextContent("test");
  });
});
