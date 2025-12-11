import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useParams, useLocation } from 'react-router-dom';

const SEOHead = ({ title, description }) => {
  const { i18n } = useTranslation();
  const { locale } = useParams();
  const location = useLocation();
  const currentLocale = locale || i18n.language || 'en';
  
  // Get base URL (use your actual domain after deployment)
  const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';
  
  // Get current path without locale
  const pathWithoutLocale = location.pathname.replace(`/${currentLocale}`, '');
  
  // Available languages
  const languages = ['en', 'es', 'ar', 'ja'];
  
  // Language names for og:locale
  const localeNames = {
    en: 'en_US',
    es: 'es_ES',
    ar: 'ar_SA',
    ja: 'ja_JP'
  };
  
  // Page titles by locale
  const pageTitles = {
    en: title || 'Blissful Beauty - Natural Skincare Products',
    es: title || 'Blissful Beauty - Productos Naturales para el Cuidado de la Piel',
    ar: title || 'Blissful Beauty - منتجات العناية بالبشرة الطبيعية',
    ja: title || 'Blissful Beauty - 自然なスキンケア製品'
  };
  
  // Page descriptions by locale
  const pageDescriptions = {
    en: description || 'Discover our collection of natural, cruelty-free skincare products designed for every skin type.',
    es: description || 'Descubre nuestra colección de productos de cuidado de la piel naturales y libres de crueldad.',
    ar: description || 'اكتشف مجموعتنا من منتجات العناية بالبشرة الطبيعية والخالية من القسوة.',
    ja: description || 'すべての肌タイプのために設計された、自然でクルエルティフリーなスキンケア製品のコレクションをご覧ください。'
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={currentLocale} dir={currentLocale === 'ar' ? 'rtl' : 'ltr'} />
      <title>{pageTitles[currentLocale]}</title>
      <meta name="description" content={pageDescriptions[currentLocale]} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      
      {/* Hreflang Tags for SEO */}
      {languages.map(lang => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={`${baseUrl}/${lang}${pathWithoutLocale}`}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${baseUrl}/en${pathWithoutLocale}`}
      />
      
      {/* Canonical URL */}
      <link rel="canonical" href={`${baseUrl}/${currentLocale}${pathWithoutLocale}`} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={pageTitles[currentLocale]} />
      <meta property="og:description" content={pageDescriptions[currentLocale]} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${baseUrl}/${currentLocale}${pathWithoutLocale}`} />
      <meta property="og:locale" content={localeNames[currentLocale]} />
      {languages.filter(lang => lang !== currentLocale).map(lang => (
        <meta
          key={lang}
          property="og:locale:alternate"
          content={localeNames[lang]}
        />
      ))}
      <meta property="og:site_name" content="Blissful Beauty" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitles[currentLocale]} />
      <meta name="twitter:description" content={pageDescriptions[currentLocale]} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="Blissful Beauty" />
    </Helmet>
  );
};

export default SEOHead;
