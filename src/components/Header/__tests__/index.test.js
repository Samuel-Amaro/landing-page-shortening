import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "..";

describe("componente Header", () => {
  test("renderiza componente Header sem erros", () => {
    const setUrlsShorteneds = jest.mock();
    render(<Header setUrlsShorteneds={setUrlsShorteneds} />);
  });

  test("Expande/Recolhe menu com cliques", () => {
    const setUrlsShorteneds = jest.mock();
    render(<Header setUrlsShorteneds={setUrlsShorteneds} />);
    const btnMenu = screen.getByTitle("Expanded Menu");
    expect(btnMenu.getAttribute("aria-expanded")).toBe("false");
    fireEvent.pointerDown(btnMenu);
    expect(btnMenu.getAttribute("aria-expanded")).toBe("true");
    fireEvent.pointerDown(btnMenu);
    expect(btnMenu.getAttribute("aria-expanded")).toBe("false");
  });

  test("Expande/Recolhe menu ao pressionar key Enter", () => {
    const setUrlsShorteneds = jest.mock();
    render(<Header setUrlsShorteneds={setUrlsShorteneds} />);
    const btnMenu = screen.getByTitle("Expanded Menu");
    expect(btnMenu.getAttribute("aria-expanded")).toBe("false");
    fireEvent.keyDown(btnMenu, { key: "Enter", code: "Enter" });
    expect(btnMenu.getAttribute("aria-expanded")).toBe("true");
    fireEvent.keyDown(btnMenu, { key: "Enter", code: "Enter" });
    expect(btnMenu.getAttribute("aria-expanded")).toBe("false");
  });
});
