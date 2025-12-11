// src/services/localeFormatter.js

// Format a date according to the given locale (e.g., en-US, es-ES, ar-SA, ja-JP)
export const formatLocalizedDate = (date, locale) => {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
};

// Format numbers as currency, respecting locale decimal/thousands separators
export const formatCurrency = (amount, locale, currencyCode = "USD") => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
    maximumFractionDigits: 2
  }).format(amount);
};

// Localized relative time such as "2 hours ago" / "hace 2 horas"
export const formatRelativeTime = (timestamp, locale) => {
  const now = Date.now();
  const diffInSeconds = Math.round((now - timestamp) / 1000);
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

  const abs = Math.abs(diffInSeconds);

  if (abs < 60) {
    return rtf.format(-diffInSeconds, "second");
  }
  if (abs < 3600) {
    const minutes = Math.round(diffInSeconds / 60);
    return rtf.format(-minutes, "minute");
  }
  if (abs < 86400) {
    const hours = Math.round(diffInSeconds / 3600);
    return rtf.format(-hours, "hour");
  }
  const days = Math.round(diffInSeconds / 86400);
  if (abs < 30 * 86400) {
    return rtf.format(-days, "day");
  }

  // For older content, fall back to absolute date
  return formatLocalizedDate(new Date(timestamp), locale);
};
