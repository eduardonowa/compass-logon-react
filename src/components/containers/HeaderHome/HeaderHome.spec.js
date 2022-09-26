import { waitFor, render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import HeaderHome from "./HeaderHome";
import { BrowserRouter as Router } from "react-router-dom";
import { configure } from "@testing-library/dom";
configure({ asyncUtilTimeout: 3000 });
afterEach(cleanup);

describe("Testing HeaderHome.js", () => {
  it("should be able to show the logo", () => {
    render(
      <Router>
        <HeaderHome />
      </Router>
    );
    const headerLogo = screen.getByTestId("header-logo");
    expect(headerLogo).toBeInTheDocument();
  });
  it("veryfing img src", () => {
    render(
      <Router>
        <HeaderHome />
      </Router>
    );
    const displayedImg = document.querySelector("img");
    expect(displayedImg.src).toContain("logo-black");
  });

  it("should be able to show the weather component", async () => {
    const { getByTestId } = render(<HeaderHome />);
    await waitFor(() =>
      expect(getByTestId("weather-component")).toBeInTheDocument()
    );
  });
  it("should be able to show the clock and date", async () => {
    const { getByTestId } = render(<HeaderHome />);
    await waitFor(() => expect(getByTestId("clock-date")).toBeInTheDocument());
  });
});
