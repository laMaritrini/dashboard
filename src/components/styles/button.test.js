// import { render, screen } from "@testing-library/react";
// import { Router } from "react-router-dom";
// import { createMemoryHistory } from "history";
// import { NavLateral } from "./Nav-lateral.js";

// describe("button", () => {
//   test("has the color", () => {
//      const history = createMemoryHistory();
//     render(
//       <Router location={history.location} navigator={history}>
//         <NavLateral />
//       </Router>
//     );
//     const button = screen.getByText("Edit");
//     expect(button).toHaveStyle("color: #135846");
//   });
// });
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from "./style-buttons";
describe("Testing the color of the btn", () => {
  test("Black", () => {
    // Arrange
    const color = "#000000";
    const expectedStyle = "background: #000000";
    // Act
    render(<Button style={{ backgroundColor: color }}>Continue</Button>);
    // Assert
    expect(screen.getByText("Continue")).toHaveStyle(expectedStyle);
  });
});
