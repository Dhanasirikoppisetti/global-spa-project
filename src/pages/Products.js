// src/pages/Products.js

import React from "react";
import { useTranslation } from "react-i18next";
import { useLocaleInfo } from "../hooks/useLocaleInfo";
import ProductCard from "../components/ProductCard";

const PRODUCTS_DATA = [
  {
    id: 1,
    nameKey: "cetaphil_cleanser",
    price: 25.0,
    image:
      "https://cnc-magazine.oramiland.com/parenting/images/Cetaphil_Gentle_Skin_Cleanser_500.width-800.format-webp.webp",
    buyLink: "https://www.amazon.in"
  },
  {
    id: 2,
    nameKey: "loreal_serum",
    price: 45.5,
    image: "https://m.media-amazon.com/images/I/51a6jphka0L._SL1000_.jpg",
    buyLink: "https://www.flipkart.com"
  },
  {
    id: 3,
    nameKey: "plum_moisturizer",
    price: 30.0,
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/Q31483/plum-green-tea-mattifying-moisturizer-50-ml-6.2-1671743626.jpg",
    buyLink: "https://www.nykaa.com"
  },
  {
    id: 4,
    nameKey: "cerave_sunscreen",
    price: 20.0,
    image:
      "https://i5.walmartimages.com/asr/332a21d4-5add-4bb4-baf7-ab0e4ce12148_1.5666b7cdfccba3cf882f174eb7c10277.jpeg",
    buyLink: "https://www.amazon.in"
  },
  {
    id: 5,
    nameKey: "sheet_mask",
    price: 18.0,
    image: "https://www.gosupps.com/media/catalog/product/7/1/71GSAH60FrL_1.jpg",
    buyLink: "https://www.flipkart.com"
  },
  {
    id: 6,
    nameKey: "alcohol_free_toner",
    price: 22.0,
    image: "https://m.media-amazon.com/images/I/61714xF9LAL._SL1500_.jpg",
    buyLink: "https://www.amazon.in"
  },
  {
    id: 7,
    nameKey: "laneige_eye_cream",
    price: 35.0,
    image: "https://cdn1.productnation.co/stg/sites/3/62f6042410248.jpeg",
    buyLink: "https://www.nykaa.com"
  },
  {
    id: 8,
    nameKey: "organic_face_oil",
    price: 40.0,
    image:
      "https://cdn.cliqueinc.com/posts/288993/best-face-oils-288993-1685125576145-main.1200x0c.jpg?interlace=true&quality=70",
    buyLink: "https://www.amazon.in"
  },
  {
    id: 9,
    nameKey: "walnut_face_scrub",
    price: 15.0,
    image: "https://m.media-amazon.com/images/I/71uYte3ID1L._SL1500_.jpg",
    buyLink: "https://www.flipkart.com"
  },
  {
    id: 10,
    nameKey: "vcare_facial_kit",
    price: 99.0,
    image:
      "https://www.vcareproducts.com/storage/app/public/files/133/Webp%20products%20Images/Face/Facial%20Kits/Flower%20Bouquet%20Facial%20Kit%20-%20800%20X%20800%20Pixels/VCARE%20FLOWER%20BOQUET%20FACIAL%20KIT%20%20B+%20Creatives-06.webp",
    buyLink: "https://www.amazon.in"
  }
];

const ProductsPage = () => {
  const { t } = useTranslation("product");
  const { locale, dir } = useLocaleInfo();

  return (
    <div
      style={{
        minHeight: "calc(100vh - 70px)",
        paddingBlock: "40px",
        paddingInline: "20px",
        background: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 40%, #6ee7b7 100%)"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBlockEnd: "40px",
          color: "#064e3b",
          fontSize: "2.5rem",
          fontWeight: 700,
          fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif"
        }}
      >
        {t("title", "Skincare Products")}
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "32px",
          maxWidth: "1400px",
          marginInline: "auto",
          direction: dir
        }}
      >
        {PRODUCTS_DATA.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            t={t}
            locale={locale}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
