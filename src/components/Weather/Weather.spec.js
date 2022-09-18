import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Weather from "./Weather";
import { configure } from "@testing-library/dom";
configure({ asyncUtilTimeout: 3000 });

describe("Testing Weather.js", () => {
  it("should be able to show the city and region", async () => {
    const { getByTestId } = render(<Weather />);
    await waitFor(() => expect(getByTestId("city-region")).toBeInTheDocument());
  });
  it("should be able to show the temperature", async () => {
    const { getByTestId } = render(<Weather />);
    await waitFor(() => expect(getByTestId("temperature")).toBeInTheDocument());
  });
  it("should be able to show the image of condition of the wheater", async () => {
    const { getByTestId } = render(<Weather />);
    await waitFor(() => expect(getByTestId("weather-img")).toBeInTheDocument());
  });
});
