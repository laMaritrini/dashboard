import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import App from "./App";
import { createMemoryHistory } from "history";

test("renders learn react link", () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <App  /> 
    </Router>
  );
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
