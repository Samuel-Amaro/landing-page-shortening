import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Form from "..";

describe("Componente Form", () => {
  it("renderiza componente Form sem erros", () => {
    const mockSetUrlsShorteneds = jest.fn();
    render(<Form setUrlsShorteneds={mockSetUrlsShorteneds} />);
  });

  it("inserindo texto no elmento input", () => {
    const mockSetUrlsShorteneds = jest.fn();
    render(<Form setUrlsShorteneds={mockSetUrlsShorteneds} />);
    expect(screen.getByPlaceholderText("Shorten a link here...").value).toBe("");
    fireEvent.change(screen.getByPlaceholderText("Shorten a link here..."), { target: { value: "https://testeurl.com" } });
    expect(screen.getByPlaceholderText("Shorten a link here...").value).toBe("https://testeurl.com");
  });

  it("exibe aviso quando o formulário é enviado com input text vazio", () => {
    const mockSetUrlsShorteneds = jest.fn();
    render(<Form setUrlsShorteneds={mockSetUrlsShorteneds} />);
    const buttonElement = screen.getByText("Shorten It!")
    fireEvent.click(buttonElement);
    const warning = screen.getByText("Please add a link");
    expect(warning).toBeInTheDocument();
  });

  it("submentendo form com um valid url para o input", () => {
    const setUrlsShorteneds = jest.fn();
    render(<Form setUrlsShorteneds={setUrlsShorteneds} />);
    const buttonElement = screen.getByText("Shorten It!")
    const input = screen.getByPlaceholderText("Shorten a link here...");
    fireEvent.change(input, { target: { value: "https://testeurl.com" } });
    fireEvent.click(buttonElement);
    const warning = screen.queryByText("Please add a link");
    expect(warning).toBeNull();
  });

  it("submentendo form com um invalid url para o input", () => {
    const setUrlsShorteneds = jest.fn();
    render(<Form setUrlsShorteneds={setUrlsShorteneds} />);
    const buttonElement = screen.getByText("Shorten It!")
    const input = screen.getByPlaceholderText("Shorten a link here...");
    fireEvent.change(input, { target: { value: "invalidurl" } });
    fireEvent.click(buttonElement);
    const warning = screen.getByText("Please add a link");
    expect(warning).toBeInTheDocument();
  });
});