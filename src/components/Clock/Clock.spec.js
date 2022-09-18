import { render, screen, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Clock from "./Clock";
import { configure } from "@testing-library/dom";
configure({ asyncUtilTimeout: 3000 });

afterEach(cleanup);

describe("Testing Clock.js", () => {
  beforeEach(() => {});
  it("should be able to show the clock and date", async () => {
    const { getByTestId } = render(<Clock />);
    await waitFor(() => expect(getByTestId("clock-date")).toBeInTheDocument());
  });
});
