// src/components/LanguageSwitcher.js
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { LANGUAGES } from "../i18n";

const LanguageSwitcher = ({ id }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { lang: routeLang } = useParams();

  const currentLang = routeLang || i18n.language || "en";

  const handleLanguageChange = (event) => {
    const newLang = event.target.value;

    if (newLang === currentLang) return;

    // Let i18n handle persistence + dir/lang updates
    i18n.changeLanguage(newLang);

    // Replace language segment in URL
    const segments = location.pathname.split("/");
    segments[1] = newLang;

    navigate(segments.join("/"), { replace: true });
  };

  return (
    <select
      id={id}
      className="app-header-language-select"
      value={currentLang}
      onChange={handleLanguageChange}
    >
      {LANGUAGES.map((lng) => (
        <option key={lng.code} value={lng.code}>
          {lng.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
