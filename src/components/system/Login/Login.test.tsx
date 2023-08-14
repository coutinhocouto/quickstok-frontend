const React = require("react");
import { screen, render } from "@testing-library/react";
import Login from "./Login";

const buildComponent = () => {
  return render(<Login />);
};

describe("<Login />", () => {
  it("should render", () => {
    buildComponent();

    expect(screen.getByTestId("login-system")).toBeInTheDocument();
  });
});
