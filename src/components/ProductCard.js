// src/components/ProductCard.js
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, t, locale }) => {
  const formatPrice = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2
  }).format(product.price);

  return (
    <div className="product-card">
      <div className="product-card-image-wrapper">
        <img
          src={product.image}
          alt={t(product.nameKey)}
          className="product-card-image"
        />
      </div>

      <h3 className="product-card-title">
        {t(product.nameKey)}
      </h3>

      <div className="product-card-footer">
        <p className="product-card-price">{formatPrice}</p>

        <a
          href={product.buyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="product-card-button"
        >
          {t("product.buyNow", "Buy Now")}
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
