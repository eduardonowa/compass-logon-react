import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import MainHome from "./MainHome";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);
describe("Testing MainHome.js", () => {
  beforeEach(() => {
    render(
      <Router>
        <MainHome />
      </Router>
    );
  });
  it("veryfing ball img src", () => {
    const displayedImg = document.getElementById("ball");
    expect(displayedImg.src).toContain("compass");
  });
  it("veryfing slash ball  img src", () => {
    const displayedImg = document.getElementById("slashed-ball");
    expect(displayedImg.src).toContain("ball-slash");
  });
  it("should be able to show title component in the right amount", () => {
    const titleComponent = screen.getAllByTestId("title-component");
    expect(titleComponent).toHaveLength(4);
  });
  it("should be able to show text component in the right amount", () => {
    const textComponent = screen.getAllByTestId("text-component");
    expect(textComponent).toHaveLength(4);
  });
});
