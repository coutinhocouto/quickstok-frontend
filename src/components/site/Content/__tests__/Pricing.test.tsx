const React = require("react");
import { screen, render } from "@testing-library/react";
import Pricing from "../Pricing";

const buildComponent = () => {
  return render(<Pricing />);
};

describe("<Pricing />", () => {
  it("should render", () => {
    buildComponent();

    expect(screen.getByTestId("site-pricing")).toBeInTheDocument();
  });
});
