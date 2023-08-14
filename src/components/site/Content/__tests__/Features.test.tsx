const React = require("react");
import { screen, render } from "@testing-library/react";
import Features from "../Features";

const buildComponent = () => {
  return render(<Features />);
};

describe("<Features />", () => {
  it("should render", () => {
    buildComponent();

    expect(screen.getByTestId("site-features")).toBeInTheDocument();
  });
});
