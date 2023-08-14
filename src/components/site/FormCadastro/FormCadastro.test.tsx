const React = require("react");
import { screen, render } from "@testing-library/react";
import FormCadastro from "./FormCadastro";

const buildComponent = () => {
  return render(<FormCadastro />);
};

describe("<FormCadastro />", () => {
  it("should render", () => {
    buildComponent();

    expect(screen.getByTestId("site-cadastro")).toBeInTheDocument();
  });
});
