import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from "./en.json";
import translationJa from "./ja.json";

const resources = {
    en: {
        translation: translationEn
    },
    ja: {
        translation: translationJa
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
    });

export default i18n;