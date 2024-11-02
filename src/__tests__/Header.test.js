import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header"; // Adjust path if necessary

test("displays the text 'hello from the Header!'", () => {
  render(<Header />);
  expect(screen.queryByText("hello from the Header!")).toBeInTheDocument();
});

// src/components/Header.js
import React from "react";

function Header() {
  return <h1>hello from the Header!</h1>;
}

export default Header;
// src/__tests__/Header.test.js
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Header from "../components/Header"; // Ensure the path is correct

test("displays the text 'hello from the Header!'", () => {
  render(<Header />);
  expect(screen.queryByText("hello from the Header!")).toBeInTheDocument();
});




