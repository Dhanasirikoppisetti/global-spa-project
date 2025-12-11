// src/pages/Home.js
import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { useLocaleInfo } from "../hooks/useLocaleInfo";
import {
  formatLocalizedDate,
  formatRelativeTime
} from "../services/localeFormatter";

const Home = () => {
  const { t } = useTranslation("common");
  const { lang, locale, dir } = useLocaleInfo();

  const sampleProductImage =
    "https://i.pinimg.com/1200x/7c/7f/c5/7c7fc5bc7f619200e227ea375b87cc59.jpg";

  const today = new Date();
  const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000);

  return (
    <div
      style={{
        minHeight: "calc(100vh - 70px)",
        paddingBlock: "60px",
        paddingInline: "40px",
        background: "#a7f3d0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
          gap: "60px",
          alignItems: "center",
          direction: dir
        }}
      >
        {/* Text side */}
        <div style={{ textAlign: dir === "rtl" ? "right" : "left" }}>
          <span
            style={{
              display: "inline-block",
              paddingBlock: "6px",
              paddingInline: "14px",
              borderRadius: "999px",
              backgroundColor: "rgba(255,255,255,0.9)",
              color: "#065f46",
              fontSize: "0.9rem",
              fontWeight: 600,
              marginBlockEnd: "16px",
              boxShadow: "0 2px 8px rgba(6, 95, 70, 0.15)"
            }}
          >
            {t("welcome_header")}
          </span>

          <h1
            style={{
              color: "#064e3b",
              fontSize: "3rem",
              lineHeight: 1.15,
              marginBlock: "0 20px",
              fontWeight: 700
            }}
          >
            {t("home_header_skincare")}
          </h1>

          <p
            style={{
              maxWidth: "540px",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              marginBlockEnd: "24px",
              color: "#065f46"
            }}
          >
            <Trans i18nKey="home_intro_text">
              Discover our collection of <strong>natural, cruelty-free</strong>{" "}
              skincare products designed for every skin type.
            </Trans>
          </p>

          {/* Localization demo section */}
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.6)",
              paddingBlock: "16px",
              paddingInline: "20px",
              borderRadius: "12px",
              marginBlockEnd: "28px",
              border: "1px solid rgba(6, 95, 70, 0.1)"
            }}
          >
            <p
              style={{
                fontSize: "0.9rem",
                color: "#065f46",
                marginBlock: "0 8px",
                fontWeight: 500
              }}
            >
              📅 {t("last_updated", "Last Updated")}:{" "}
              <strong>{formatLocalizedDate(today, locale)}</strong>
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#047857",
                marginBlock: 0,
                fontWeight: 500
              }}
            >
              🕐 {t("localization_header", "Localized Data")}:{" "}
              <strong>{formatRelativeTime(twoHoursAgo, locale)}</strong>
            </p>
          </div>

          <Link
            to={`/${lang}/products`}
            style={{
              display: "inline-block",
              paddingBlock: "16px",
              paddingInline: "36px",
              backgroundColor: "#059669",
              color: "#ffffff",
              textDecoration: "none",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: "1.05rem",
              boxShadow: "0 12px 30px rgba(5, 150, 105, 0.4)",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#047857";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 16px 40px rgba(5, 150, 105, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#059669";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 12px 30px rgba(5, 150, 105, 0.4)";
            }}
          >
            {t("button_view_all_products")}
          </Link>
        </div>

        {/* Visual side: floating card with image */}
        <div
          aria-hidden="true"
          style={{
            justifySelf: dir === "rtl" ? "start" : "end",
            width: "100%",
            maxWidth: "400px",
            aspectRatio: "4 / 5"
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "28px",
              backgroundColor: "rgba(255,255,255,0.95)",
              border: "1px solid rgba(255,255,255,0.9)",
              boxShadow: "0 20px 50px rgba(6, 95, 70, 0.2)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              animation: "floatCard 4s ease-in-out infinite"
            }}
          >
            <div style={{ padding: "20px 22px 0 22px" }}>
              <p
                style={{
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#059669",
                  marginBlock: 0
                }}
              >
                Blissfull Beauty
              </p>
              <p
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  marginBlock: "8px 16px",
                  color: "#064e3b"
                }}
              >
                {t("home_header_skincare")}
              </p>
            </div>

            <div
              style={{
                flex: 1,
                borderRadius: "20px",
                overflow: "hidden",
                marginInline: "20px",
                marginBlockEnd: "16px"
              }}
            >
              <img
                src={sampleProductImage}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>

            <p
              style={{
                paddingInline: "22px",
                paddingBlockEnd: "22px",
                fontSize: "0.88rem",
                color: "#065f46",
                marginBlock: 0,
                lineHeight: 1.5
              }}
            >
              {t("welcome_message")}
            </p>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes floatCard {
            0% { 
              transform: translateY(0px); 
              box-shadow: 0 20px 50px rgba(6, 95, 70, 0.2); 
            }
            50% { 
              transform: translateY(-12px); 
              box-shadow: 0 28px 70px rgba(6, 95, 70, 0.3); 
            }
            100% { 
              transform: translateY(0px); 
              box-shadow: 0 20px 50px rgba(6, 95, 70, 0.2); 
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
