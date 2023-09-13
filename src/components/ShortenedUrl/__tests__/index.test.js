import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShortenedUrl from "..";

describe("componente ShortenedUrl", () => {
  test("renderiza componente ShortenedUrl sem erros", () => {
    render(
      <ShortenedUrl
        oldUrl={"https://teste.com"}
        urlShortened={"https://shrtco.de/2wV9bP"}
      />
    );
  });

  test("testando copy url com clique", async () => {
    const user = userEvent.setup();
    render(
      <ShortenedUrl
        oldUrl={"https://teste.com"}
        urlShortened={"https://shrtco.de/2wV9bP"}
      />
    );
    expect(screen.getByText("Copy")).toBeInTheDocument();
    await user.click(screen.getByText("Copy"));
    expect(screen.getByText("Copied!")).toBeInTheDocument();
  });

  test("testando copy url ao pressionar key enter", async () => {
    const user = userEvent.setup();
    render(
      <ShortenedUrl
        oldUrl={"https://teste.com"}
        urlShortened={"https://shrtco.de/2wV9bP"}
      />
    );
    expect(screen.getByText("Copy")).toBeInTheDocument();
    //await user.keyboard("Enter");
    fireEvent.keyDown(screen.getByText("Copy"), { code: "Enter" });
    expect(screen.getByText("Copied!")).toBeInTheDocument();
  });
});
