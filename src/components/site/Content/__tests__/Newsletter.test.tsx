const React = require("react");
import { screen, render } from "@testing-library/react";
import Newsletter from "../Newsletter";

const buildComponent = () => {
  return render(<Newsletter />);
};

describe("<Newsletter />", () => {
  it("should render", () => {
    buildComponent();

    expect(screen.getByTestId("site-newsletter")).toBeInTheDocument();
  });
});
