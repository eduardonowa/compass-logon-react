import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Home from "./Home";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

describe("Testing Home.js", () => {
  beforeEach(() => {
    render(
      <Router>
        <Home />
      </Router>
    );
  });

  it("should be able to show the HeaderHome component", () => {
    const headerHome = screen.getByTestId("headerHome-component");
    expect(headerHome).toBeInTheDocument();
  });
  it("should be able to show the MainHome component", () => {
    const mainHome = screen.getByTestId("mainHome-component");
    expect(mainHome).toBeInTheDocument();
  });
  it("should be able to show the FooterHome component", () => {
    const footerHome = screen.getByTestId("footerHome-component");
    expect(footerHome).toBeInTheDocument();
  });
});
