import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Welcome from "./Welcome";

afterEach(cleanup);

describe("Testing Welcome.js", () => {
  beforeEach(() => {
    render(<Welcome />);
  });

  it("should be able to show the title", () => {
    const title = screen.getByTestId("welcome-title");
    expect(title).toBeInTheDocument;
  });
  it("should be able to show the title", () => {
    const text = screen.getByTestId("welcome-text");
    expect(text).toBeInTheDocument;
  });
});
