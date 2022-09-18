import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Login from "./Login";
import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent } from "@storybook/testing-library";

afterEach(cleanup);

describe("Testing Login.js", () => {
  beforeEach(() => {
    render(
      <Router>
        <Login />
      </Router>
    );
  });
  it("should be able to show the img with the right src", () => {
    const leftLogo = screen.getByTestId("left-logo");
    expect(leftLogo.src).toContain("logo");
  });
  it("should be able to show the welcome component", () => {
    const welcome = screen.getByTestId("welcome-component");
    expect(welcome).toBeInTheDocument();
  });
  it("should be able to show the input component", () => {
    const input = screen.getByTestId("input-component");
    expect(input).toBeInTheDocument();
  });
  it("should be able to show the password input element", () => {
    const input = screen.getByTestId("password-input");
    expect(input).toBeInTheDocument();
  });
  it("should be able to change the type of input to show password on icon click", () => {
    const input = screen.getByTestId("password-input");
    const icon = screen.getByTestId("icon-password");
    fireEvent.click(icon);
    expect(input.type).toBe("text");
  });
  it("should be able to show the error text", () => {
    const errorText = screen.getByTestId("error-text");
    expect(errorText).toHaveTextContent(
      "Ops, usuário ou senha inválidos. Tente novamente!"
    );
  });
  it("should be able to show the button component", () => {
    const button = screen.getByTestId("button-component");
    expect(button).toBeInTheDocument();
  });
  it("should be able to show the img with the right src", () => {
    const leftLogo = screen.getByTestId("right-logo");
    expect(leftLogo.src).toContain("logo");
  });
});
