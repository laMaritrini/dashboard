
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
