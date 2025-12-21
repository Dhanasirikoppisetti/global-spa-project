// src/components/SEOHead.js
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useParams, useLocation } from "react-router-dom";

const SEOHead = ({ title, description }) => {
  const { i18n } = useTranslation();
  const { locale } = useParams();
  const location = useLocation();

  const currentLocale = locale || i18n.language || "en";

  useEffect(() => {
    document.documentElement.lang = currentLocale;
    document.documentElement.dir = currentLocale === "ar" ? "rtl" : "ltr";
  }, [currentLocale]);

  // Base URL of your deployed app (GitHub Pages)
  const baseUrl = "https://dhanasirikoppisetti.github.io/global-spa-project";

  // Canonical URL for current page
  const canonicalUrl = `${baseUrl}${location.pathname}`;

  // Supported locales for hreflang tags
  const SUPPORTED_LOCALES = ["en", "es", "ar", "ja"];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* hreflang alternates */}
      {SUPPORTED_LOCALES.map((lng) => (
        <link
          key={lng}
          rel="alternate"
          hrefLang={lng}
          href={`${baseUrl}/${lng}${location.pathname.replace(/^\/[a-z]{2}/, "")}`}
        />
      ))}

      {/* x-default hreflang */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${baseUrl}/en${location.pathname.replace(/^\/[a-z]{2}/, "")}`}
      />
    </Helmet>
  );
};

export default SEOHead;
