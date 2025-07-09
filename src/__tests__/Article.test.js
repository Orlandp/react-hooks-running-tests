// src/components/Article.js
import React from "react";

function Article() {
  return <div>please pass this test</div>;
}

export default Article;

// src/__tests__/Article.test.js
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Article from "../components/Article"; // Ensure the path is correct

test("displays the text 'please pass this test'", () => {
  render(<Article />);
  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});

