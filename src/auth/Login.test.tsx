const React = require("react");
import { screen, render } from "@testing-library/react";
import LoginAuth from "./Login";

const buildComponent = () => {
  return render(<LoginAuth />);
};

describe("<LoginAuth />", () => {
  it("should render", () => {
    buildComponent();

    expect(screen.getByTestId("site-auth")).toBeInTheDocument();
  });
});
