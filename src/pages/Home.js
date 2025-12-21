// src/pages/Home.js
import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { useLocaleInfo } from "../hooks/useLocaleInfo";
import {
  formatLocalizedDate,
  formatRelativeTime,
} from "../services/localeFormatter";

const sampleProductImage =
  "https://i.pinimg.com/1200x/7c/7f/c5/7c7fc5bc7f619200e227ea375b87cc59.jpg";

function HeroTextSection({ t, lang, locale, dir }) {
  const today = new Date();
  const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000);

  return (
    <div className={`hero-text hero-text-${dir}`}>
      <span className="pill-badge">{t("welcome_header")}</span>

      <h1 className="hero-title">{t("home_header_skincare")}</h1>

      <p className="hero-description">
        <Trans i18nKey="home_intro_text">
          Discover our collection of <strong>natural, cruelty-free</strong>{" "}
          skincare products designed for every skin type.
        </Trans>
      </p>

      <div className="localization-card">
        <p className="localization-row">
          📅 {t("last_updated", "Last Updated")}:{" "}
          <strong>{formatLocalizedDate(today, locale)}</strong>
        </p>
        <p className="localization-row localization-row-secondary">
          🕐 {t("localization_header", "Localized Data")}:{" "}
          <strong>{formatRelativeTime(twoHoursAgo, locale)}</strong>
        </p>
      </div>

      <Link to={`/${lang}/products`} className="primary-cta">
        {t("button_view_all_products")}
      </Link>
    </div>
  );
}

function HeroImageSection({ t, dir }) {
  return (
    <div
      aria-hidden="true"
      className={`hero-image-card hero-image-card-${dir}`}
    >
      <div className="hero-card">
        <div className="hero-card-header">
          <p className="hero-card-brand">Blissfull Beauty</p>
          <p className="hero-card-title">{t("home_header_skincare")}</p>
        </div>

        <div className="hero-card-image-wrapper">
          <img
            src={sampleProductImage}
            alt=""
            className="hero-card-image"
          />
        </div>

        <p className="hero-card-footer">{t("welcome_message")}</p>
      </div>
    </div>
  );
}

const Home = () => {
  const { t } = useTranslation("common");
  const { lang, locale, dir } = useLocaleInfo();

  return (
    <div className="home-root">
      <div className={`hero-layout hero-layout-${dir}`}>
        <HeroTextSection t={t} lang={lang} locale={locale} dir={dir} />
        <HeroImageSection t={t} dir={dir} />
      </div>
    </div>
  );
};

export default Home;
