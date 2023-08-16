import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Results from ".";

it("it displays the footer section", async () => {
  render(<Results />);
  const resultsElement = screen.getByTestId("resultTest");
  expect(resultsElement.textContent).toBe("loading....");
});
