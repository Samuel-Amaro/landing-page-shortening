import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Button from "..";

describe("Componente Button", () => {
  it("renderiza componente Button corretamente sem erros", () => {
    render(<Button type="button" className="class-css-teste" title="Click Aqui Teste">Button Teste</Button>);
  });
});