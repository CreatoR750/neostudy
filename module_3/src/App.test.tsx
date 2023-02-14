import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "./App";

test("full app", async () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByText(/neobank/i)).toBeInTheDocument();
    expect(screen.getByText(/info@neoflex.ru/i)).toBeInTheDocument();
});

test("landing on a bad page", () => {
    const badRoute = "/some/bad/route";
    render(
        <MemoryRouter initialEntries={[badRoute]}>
            <App />
        </MemoryRouter>
    );
    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
});

test("navigating", () => {
  const goodRoute = "/";
  render(
      <MemoryRouter initialEntries={[goodRoute]}>
          <App />
      </MemoryRouter>
  );
  expect(screen.getByText(/Choose the hero/i)).toBeInTheDocument();
});
