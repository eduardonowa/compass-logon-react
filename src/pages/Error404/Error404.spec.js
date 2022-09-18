import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Error404 from "./Error404";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

describe("Testing Error404.js", () => {
  beforeEach(() => {
    render(
      <Router>
        <Error404 />
      </Router>
    );
  });
  it("should be able to show the not found text with the right countdown", () => {
    const text = screen.getByTestId("notfound-text");
    expect(text).toHaveTextContent("Página não encontrada");
  });
  it("should be able to show the right img", () => {
    const img = document.querySelector("img");
    expect(img.src).toContain("error404");
  });
});
