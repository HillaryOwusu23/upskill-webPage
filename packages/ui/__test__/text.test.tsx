/* eslint-disable no-undef */
// eslint-disable-next-line no-redeclare
import { render, screen } from "@testing-library/react";
import { TextComponent } from "../src/Text";

test("renders same text passed into content prop", () => {
  render(<TextComponent content="Hello World" />);
  const headingElement = screen.getByText("Hello World");
  expect(headingElement).toBeInTheDocument();
});
