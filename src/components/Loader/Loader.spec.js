import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Loader from "./Loader";

afterEach(cleanup);

describe("Testing Loader.js", () => {
  it("should have 4 cubes", () => {
    render(<Loader />);
    const cubes = document.getElementsByClassName("cube");
    expect(cubes).toHaveLength(4);
  });
});
