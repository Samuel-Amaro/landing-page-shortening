import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "..";

test("renderiza App componente sem erros", () => {
  render(<App />);
});
