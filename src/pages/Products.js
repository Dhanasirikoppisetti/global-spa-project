// src/pages/Products.js
import React from "react";
import { useTranslation } from "react-i18next";
import { useLocaleInfo } from "../hooks/useLocaleInfo";
import ProductCard from "../components/ProductCard";
import products from "../data/products.json";
import "./Products.css";

const ProductsPage = () => {
  const { t } = useTranslation("product");
  const { locale, dir } = useLocaleInfo();

  return (
      <section className="products-root">
            <header className="products-header">
        <h1 className="products-title">
          {t("product_catalog_header")}
        </h1>
      </header>

      <div className="products-grid">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            t={t}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
