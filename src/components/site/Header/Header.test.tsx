const React = require("react");
import { screen, render } from "@testing-library/react";
import Header from "./Header";

const buildComponent = () => {
  return render(<Header />);
};

describe("<Header />", () => {
  it("should render", () => {
    buildComponent();

    expect(screen.getByTestId("site-header")).toBeInTheDocument();
  });
});
