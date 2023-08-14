const React = require("react");
import { screen, render } from "@testing-library/react";
import Header from "./Header";

const breadcrumb = [
  {
    text: "Seja bem vindo ao QuickStock",
  },
];

const buildComponent = () => {
  return render(<Header title="Teste" breadcrumb={breadcrumb} />);
};

describe("<Header />", () => {
  it("should render", () => {
    buildComponent();

    expect(screen.getByTestId("header-system")).toBeInTheDocument();
  });
});
