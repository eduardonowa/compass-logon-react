import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Error401 from "./Error401";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

describe("Testing Error401.js", () => {
  beforeEach(() => {
    render(
      <Router>
        <Error401 />
      </Router>
    );
  });

  it("should be able to show the redirect text with the right countdown", () => {
    const text = screen.getByTestId("redirect-text");
    expect(text).toHaveTextContent("6");
  });
  it("should be able to show the right img", () => {
    const img = document.querySelector("img");
    expect(img.src).toContain("Error401");
  });
});
