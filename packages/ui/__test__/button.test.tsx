/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { Button } from "../src/button";

test("renders button with correct text", () => {
  render(<Button />);
  const buttonElement = screen.getByText("Hello World");
  expect(buttonElement).toBeInTheDocument();
});
