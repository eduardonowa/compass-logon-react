import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import FooterHome from "./FooterHome";
import { BrowserRouter as Router } from "react-router-dom";


afterEach(cleanup);

describe("Testing FooterHome.js", () => {
  beforeEach(() => {
    render(
      <Router>
        <FooterHome />
      </Router>
    );
  });
  it("should be able to show the info-text", () => {
    const infoText = screen.getByTestId("info-text");
    expect(infoText).toBeInTheDocument();
  });
  it("should be able to show the refresh-text", () => {
    const refreshText = screen.getByTestId("refresh-text");
    expect(refreshText).toBeInTheDocument();
  });
  it("should be able to show the timer component", () => {
    const timer = screen.getByTestId("timer-component");
    expect(timer).toBeInTheDocument();
  });
  it("initial value of timer should be 600", () => {
    const timer = screen.getByTestId("timer-component");
    expect(timer).toHaveTextContent("600");
  });
  it("should be able to show the keep nav button", () => {
    const keepNav = screen.getByTestId("keep-nav-button");
    expect(keepNav).toBeInTheDocument();
  });
  it("should be able to show the logout button", () => {
    const logout = screen.getByTestId("logout-button");
    expect(logout).toBeInTheDocument();
  });
});
