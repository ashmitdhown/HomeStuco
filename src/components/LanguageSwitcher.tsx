import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  };

  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("ar")}>العربية</button>
    </div>
  );
};

export default LanguageSwitcher;
