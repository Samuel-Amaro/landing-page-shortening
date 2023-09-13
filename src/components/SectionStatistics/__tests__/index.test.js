import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import SectionStatistics from "..";

const mockAllUrlsShorteneds = [
  ["https://shrtco.de/2wV9bP", "https://teste.com"],
  ["https://shrtco.de/g4djsu", "https://www.glassdoor.com.br/index.htm"],
  ["https://shrtco.de/etBCrB", "https://developer.mozilla.org/en-US"],
];

describe("componente SectionStatistics", () => {
  test("renderiza component SectionStatistics sem erros", () => {
    render(<SectionStatistics urlsShorteneds={mockAllUrlsShorteneds} />);
  });

  test("verifica se a quantidade de urls renderizadas e igual a quantidade de urls encurtadas", () => {
    render(<SectionStatistics urlsShorteneds={mockAllUrlsShorteneds} />);
    const itemsList = screen.getAllByTestId("item-list");
    expect(mockAllUrlsShorteneds.length).toBe(itemsList.length);
  });
});
