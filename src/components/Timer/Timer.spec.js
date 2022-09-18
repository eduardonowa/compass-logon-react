import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Timer from "./Timer";

afterEach(cleanup)

describe("Testing Timer.js", () => {
  it("should be able to show the timer with the setted countdown", () => {
    render(<Timer timer="300" />);
    const timer = screen.getByTestId("timer-text");
    expect(timer).toHaveTextContent("300");
  });
  it("should be able to show the paragraph with text -> seconds ", () => {
    render(<Timer />);
    const timer = screen.getByTestId("seconds-text");
    expect(timer).toHaveTextContent("seconds");
  });
});
