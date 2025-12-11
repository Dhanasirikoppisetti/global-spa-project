// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import '@testing-library/jest-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    ns: ['common', 'home', 'product'],
    defaultNS: 'common',
    resources: {
      en: {
        common: { app_name: 'Blissful Beauty', home: 'Home', products: 'Products' },
        home: { hero_title: 'Your Daily Glow Starts Here.', view_products: 'View All Products' },
        product: { product_catalog_header: 'Skincare Products', buy_now: 'Buy Now' }
      }
    }
  });

export default i18n;
