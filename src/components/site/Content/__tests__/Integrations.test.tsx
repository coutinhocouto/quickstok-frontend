const React = require("react");
import { screen, render } from "@testing-library/react";
import Integrations from "../Integrations";

const buildComponent = () => {
  return render(<Integrations />);
};

describe("<Integrations />", () => {
  it("should render", () => {
    buildComponent();

    expect(screen.getByTestId("site-integrations")).toBeInTheDocument();
  });
});
