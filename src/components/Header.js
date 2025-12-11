// src/components/Header.js

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t, i18n } = useTranslation("common");
  const location = useLocation();

  const currentLang = i18n.language || "en";

  const isHome = location.pathname.includes("/home");
  const isProducts = location.pathname.includes("/products");

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBlock: "20px",
        paddingInline: "40px",
        backgroundColor: "#065f46",
        boxShadow: "0 4px 12px rgba(6, 95, 70, 0.3)"
      }}
    >
      {/* Brand with logo and elegant font */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
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

        <h1
          style={{
            margin: 0,
            fontSize: "2.2rem",
            background: "linear-gradient(135deg, #6ee7b7 0%, #d1fae5 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: 600,
            fontFamily: "'Pacifico', 'Brush Script MT', cursive",
            letterSpacing: "0.02em"
          }}
        >
          {t("brandName", "Blissfull Beauty")}
        </h1>
      </div>

      <div
        className="button-group"
        style={{ display: "flex", alignItems: "center", gap: "32px" }}
      >
        <nav
          aria-label={t("nav.label", "Main navigation")}
          style={{ display: "flex", gap: "8px" }}
        >
          <Link
            to={`/${currentLang}/home`}
            style={{
              textDecoration: "none",
              color: "#ffffff",
              fontWeight: isHome ? 600 : 500,
              fontSize: "1.05rem",
              paddingBlock: "8px",
              paddingInline: "16px",
              borderRadius: "8px",
              backgroundColor: isHome ? "rgba(255,255,255,0.2)" : "transparent",
              transition: "all 0.2s ease"
            }}
          >
            {t("nav.home", "Home")}
          </Link>

          <Link
            to={`/${currentLang}/products`}
            style={{
              textDecoration: "none",
              color: "#ffffff",
              fontWeight: isProducts ? 600 : 500,
              fontSize: "1.05rem",
              paddingBlock: "8px",
              paddingInline: "16px",
              borderRadius: "8px",
              backgroundColor: isProducts
                ? "rgba(255,255,255,0.2)"
                : "transparent",
              transition: "all 0.2s ease"
            }}
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
