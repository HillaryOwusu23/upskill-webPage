/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TextComponent } from "../src/Text";


describe("Page", () => {
  it("renders a heading", () => {
    render(<TextComponent content={"Hello"} />);

    const heading = screen.getByText(/Hello/i);

    expect(heading).toBeInTheDocument();
  })});