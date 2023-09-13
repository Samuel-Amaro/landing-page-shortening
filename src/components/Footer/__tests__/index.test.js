import "@testing-library/jest-dom";
import { render} from "@testing-library/react";
import Footer from "..";

test("renderiza componente Footer sem erros", () => {
  render(<Footer />);
});
