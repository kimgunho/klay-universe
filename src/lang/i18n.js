import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import langEn from './lang.en.json';
import langKo from './lang.ko.json';

// 기본 언어
let lang = localStorage.getItem('@lang');
if (lang === null) {
  lang = 'ko';
}

const resources = {
  en: { translation: langEn },
  ko: { translation: langKo },
};

i18n.use(initReactI18next).init({
  resources,
  lng: lang,
  debug: false, // console
  defaultNS: 'translation',
  ns: 'translation',
  keySeparator: '.', // for key in object[json]
  returnObjects: true, // for array in object[json]
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
