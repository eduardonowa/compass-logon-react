import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import HeaderHome from "./HeaderHome";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

describe("Testing HeaderHome.js", () => {
  beforeEach(() => {
    render(
      <Router>
        <HeaderHome />
      </Router>
    );
  });
  it("should be able to show the logo", () => {
    const headerLogo = screen.getByTestId("header-logo");
    expect(headerLogo).toBeInTheDocument();
  });
  it("veryfing img src", () => {
    const displayedImg = document.querySelector("img");
    expect(displayedImg.src).toContain("logo-black");
  });
  //   it("should be able to show the clock component", () => {
  //     render(
  //       <Router>
  //         <HeaderHome />
  //       </Router>
  //     );
  //     const clock = screen.getByTestId("clock-component");
  //     expect(clock).toBeInTheDocument();
  //   });
  //   it("should be able to show the weather component", () => {
  //     render(
  //       <Router>
  //         <HeaderHome />
  //       </Router>
  //     );
  //     const weather = screen.getByTestId("weather-component");
  //     expect(weather).toBeInTheDocument();
  //   });
});
