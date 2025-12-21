// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import common translations
import enCommon from "./locales/en/common.json";
import esCommon from "./locales/es/common.json";
import arCommon from "./locales/ar/common.json";
import jaCommon from "./locales/ja/common.json";

// Import product translations
import enProduct from "./locales/en/product.json";
import esProduct from "./locales/es/product.json";
import arProduct from "./locales/ar/product.json";
import jaProduct from "./locales/ja/product.json";

export const LANGUAGES = [
  { code: "en", locale: "en-US", dir: "ltr", name: "English (EN)" },
  { code: "es", locale: "es-ES", dir: "ltr", name: "Español (ES)" },
  { code: "ar", locale: "ar-SA", dir: "rtl", name: "العربية (AR)" },
  { code: "ja", locale: "ja-JP", dir: "ltr", name: "日本語 (JA)" }
];

export const getLangMeta = (code) =>
  LANGUAGES.find((l) => l.code === code) || LANGUAGES[0];

const resources = {
  en: {
    common: enCommon,
    product: enProduct
  },
  es: {
    common: esCommon,
    product: esProduct
  },
  ar: {
    common: arCommon,
    product: arProduct
  },
  ja: {
    common: jaCommon,
    product: jaProduct
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: LANGUAGES.map((l) => l.code),
    fallbackLng: "en",
    ns: ["common", "product"],
    defaultNS: "common",
    detection: {
      order: ["path", "localStorage", "navigator"],
      caches: ["localStorage"]
    },
    react: {
      useSuspense: false
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
