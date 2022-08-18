import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { NavLateral } from "./Nav-lateral.js";

describe("button", () => {
  test("has the color", () => {
     const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <NavLateral />
      </Router>
    );
    const button = screen.getByText("Edit");
    expect(button).toHaveStyle("color: #135846");
  });
});
