// src/hooks/useLocaleInfo.js

import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../i18n";

/**
 * Returns the active language code, locale (for Intl),
 * and direction (for RTL/LTR layout).
 */
export const useLocaleInfo = (langCode) => {
  const { i18n } = useTranslation();
  const currentLangCode = langCode || i18n.language || "en";

  const localeInfo =
    LANGUAGES.find((l) => currentLangCode.startsWith(l.code)) || LANGUAGES[0];

  return {
    lang: localeInfo.code,
    locale: localeInfo.locale,
    dir: localeInfo.dir
  };
};
