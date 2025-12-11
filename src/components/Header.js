// src/components/Header.js

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import "./Header.css";

const Header = () => {
  const { t, i18n } = useTranslation("common");
  const location = useLocation();

  const currentLang = i18n.language || "en";

  const isHome = location.pathname.includes("/home");
  const isProducts = location.pathname.includes("/products");

  return (
    <header className="app-header">
      {/* Brand with logo and elegant font */}
      <div className="app-header-brand">
        {/* Leaf Logo SVG */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 5C15 5 10 8 8 15C6 22 8 28 12 32C14 34 16 35 18 35C16 30 15 25 16 20C17 15 19 10 20 5Z"
            fill="#6ee7b7"
          />
          <path
            d="M20 5C25 5 30 8 32 15C34 22 32 28 28 32C26 34 24 35 22 35C24 30 25 25 24 20C23 15 21 10 20 5Z"
            fill="#34d399"
          />
          <path
            d="M20 5V35"
            stroke="#10b981"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20 15C22 18 24 20 28 22"
            stroke="#10b981"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        <h1 className="app-header-title">
          {t("brandName", "Blissfull Beauty")}
        </h1>
      </div>

      <div className="button-group app-header-buttons">
        <nav
          aria-label={t("nav.label", "Main navigation")}
          className="app-header-nav"
        >
          <Link
            to={`/${currentLang}/home`}
            className={
              "app-header-link" + (isHome ? " app-header-link--active" : "")
            }
          >
            {t("nav.home", "Home")}
          </Link>

          <Link
            to={`/${currentLang}/products`}
            className={
              "app-header-link" +
              (isProducts ? " app-header-link--active" : "")
            }
          >
            {t("nav.products", "Products")}
          </Link>
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
