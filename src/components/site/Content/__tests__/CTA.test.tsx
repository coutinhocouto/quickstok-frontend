const React = require("react");
import { screen, render } from "@testing-library/react";
import CTA from "../CTA";

const buildComponent = () => {
  return render(<CTA link="https://google.com" text="Google" />);
};

describe("<CTA />", () => {
  it("should render", () => {
    buildComponent();

    expect(screen.getByTestId("site-cta")).toBeInTheDocument();
  });
});
