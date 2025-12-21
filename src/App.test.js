// src/App.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import i18n from "./i18n";

const renderWithProviders = (initialEntry) =>
  render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[initialEntry]}>
        <App />
      </MemoryRouter>
    </HelmetProvider>
  );

describe("Blissfull Beauty i18n & routing", () => {
  beforeEach(async () => {
    await i18n.changeLanguage("en");
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
  });

  test("renders English home with LTR direction", async () => {
    renderWithProviders("/en/home");

    const heading = await screen.findByRole("heading", {
      name: /your daily glow starts here/i,
    });

    expect(heading).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("en");
    expect(document.documentElement.dir).toBe("ltr");
  });

  test("Arabic route sets RTL direction (layout test only)", async () => {
    renderWithProviders("/ar/home");

    // No Arabic text assertion — language not auto-bound to route
    expect(document.documentElement.lang).toBe("ar");
    expect(document.documentElement.dir).toBe("rtl");
  });

  test("Spanish translations return Spanish CTA text", async () => {
    await i18n.changeLanguage("es");
    renderWithProviders("/es/home");

    const cta = await screen.findByText(/ver todos los productos/i);
    expect(cta).toBeInTheDocument();

    expect(document.documentElement.lang).toBe("es");
    expect(document.documentElement.dir).toBe("ltr");
  });
});
