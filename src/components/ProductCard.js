// src/components/ProductCard.js

import React from "react";

const ProductCard = ({ product, t, locale }) => {
  const formatPrice = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2
  }).format(product.price);

  return (
    <div
      className="product-card"
      style={{
        border: "1px solid #d1fae5",
        borderRadius: "16px",
        paddingBlock: "20px",
        paddingInline: "18px",
        textAlign: "start",
        boxShadow: "0 4px 12px rgba(6, 95, 70, 0.1)",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "all 0.3s ease",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(6, 95, 70, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(6, 95, 70, 0.1)";
      }}
    >
      <div
        style={{
          width: "100%",
          height: "200px",
          borderRadius: "12px",
          overflow: "hidden",
          marginBlockEnd: "16px",
          backgroundColor: "#f0fdf4"
        }}
      >
        <img
          src={product.image}
          alt={t(product.nameKey)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            transition: "transform 0.4s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
      </div>

      <h3
        style={{
          marginBlock: "0 12px",
          fontSize: "1.1rem",
          fontWeight: 600,
          color: "#064e3b",
          fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
          lineHeight: 1.3
        }}
      >
        {t(product.nameKey)}
      </h3>

      {/* Footer sticks to bottom: price + button aligned for all cards */}
      <div style={{ marginBlockStart: "auto" }}>
        <p
          style={{
            color: "#059669",
            fontWeight: 700,
            fontSize: "1.25rem",
            marginBlock: "0 16px",
            textAlign: "center",
            fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif"
          }}
        >
          {formatPrice}
        </p>

        <a
          href={product.buyLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            backgroundColor: "#059669",
            color: "#fff",
            paddingBlock: "12px",
            paddingInline: "20px",
            borderRadius: "10px",
            textDecoration: "none",
            textAlign: "center",
            fontWeight: 600,
            fontSize: "1rem",
            fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 12px rgba(5, 150, 105, 0.3)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#047857";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 6px 16px rgba(5, 150, 105, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#059669";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(5, 150, 105, 0.3)";
          }}
        >
          {t("product.buyNow", "Buy Now")}
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
