const React = require("react");
import { screen, render } from "@testing-library/react";
import Footer from "./Footer";

const buildComponent = () => {
  return render(<Footer />);
};

describe("<Footer />", () => {
  it("should render", () => {
    buildComponent();

    expect(screen.getByTestId("site-footer")).toBeInTheDocument();
  });
});
