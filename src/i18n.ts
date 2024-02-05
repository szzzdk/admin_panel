import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en.json";
import translationKZ from "./locales/kz.json";
import translationRU from "./locales/ru.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    kz: { translation: translationKZ },
    ru: { translation: translationRU },
  },
  fallbackLng: "ru",
});