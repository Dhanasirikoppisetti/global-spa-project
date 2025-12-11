// src/i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// All supported languages (including your custom LongWiz)
export const LANGUAGES = [
  { code: "en", locale: "en-US", dir: "ltr", name: "English (EN)" },
  { code: "es", locale: "es-ES", dir: "ltr", name: "Español (ES)" },
  { code: "ar", locale: "ar-SA", dir: "rtl", name: "العربية (AR)" },
  { code: "ja", locale: "ja-JP", dir: "ltr", name: "日本語 (JA)" },
  { code: "longwiz", locale: "lw-LW", dir: "rtl", name: "LongWiz" }
];

export const getLangMeta = (code) =>
  LANGUAGES.find((l) => l.code === code) || LANGUAGES[0];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: LANGUAGES.map((l) => l.code),
    fallbackLng: "en",
    defaultNS: "common",
    ns: ["common", "product", "validation"],
    detection: {
      order: ["path", "localStorage", "navigator"],
      caches: ["localStorage"]
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json"
    },
    react: {
      useSuspense: true
    },
    interpolation: {
      escapeValue: false
    }
  });

i18n.on("languageChanged", (lng) => {
  const meta = getLangMeta(lng);
  document.documentElement.lang = meta.code;
  document.documentElement.dir = meta.dir;
  localStorage.setItem("lang", meta.code);
});

export default i18n;
