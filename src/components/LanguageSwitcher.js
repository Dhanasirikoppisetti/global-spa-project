// src/components/LanguageSwitcher.js

import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { LANGUAGES, getLangMeta } from "../i18n";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { langCode } = useParams();

  const currentLang = langCode || i18n.language || "en";

  const handleLanguageChange = (event) => {
    const newLang = event.target.value;

    i18n.changeLanguage(newLang);

    const meta = getLangMeta(newLang);
    document.documentElement.lang = meta.code;
    document.documentElement.dir = meta.dir;
    localStorage.setItem("lang", meta.code);

    const segments = location.pathname.split("/");
    if (segments[1]) {
      segments[1] = newLang;
    } else {
      segments.splice(1, 0, newLang);
    }
    const newPath = segments.join("/");
    navigate(newPath, { replace: true });
  };

  return (
    <select
      onChange={handleLanguageChange}
      value={currentLang}
      aria-label="Language Selector"
      style={{
        paddingBlock: "10px",
        paddingInline: "16px",
        border: "2px solid rgba(255,255,255,0.3)",
        borderRadius: "10px",
        backgroundColor: "rgba(255,255,255,0.15)",
        color: "#ffffff",
        fontSize: "0.95rem",
        fontWeight: 600,
        cursor: "pointer",
        outline: "none",
        transition: "all 0.2s ease"
      }}
    >
      {LANGUAGES.map((lng) => (
        <option 
          key={lng.code} 
          value={lng.code}
          style={{
            backgroundColor: "#065f46",
            color: "#ffffff"
          }}
        >
          {lng.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
