const React = require("react");
import { screen, render } from "@testing-library/react";
import Content from "../Content";

const buildComponent = () => {
  return render(<Content />);
};

describe("<Content />", () => {
  it("should render", () => {
    buildComponent();

    expect(screen.getByTestId("site-content")).toBeInTheDocument();
  });
});
