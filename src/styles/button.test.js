/* eslint-disable no-useless-concat */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CheckStatusRoom } from "./style-buttons";
describe("Testing the color of the btn", () => {
  test("red", () => {
 
    const color = "red";
    const expectedStyle = " background-color:" + "red";

    render(<CheckStatusRoom status={color}>Booked</CheckStatusRoom>);

    expect(screen.getByText("Booked")).toHaveStyle(expectedStyle);
  });
});
