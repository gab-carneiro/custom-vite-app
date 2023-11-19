import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import pt from './pt-br/pt-br.json';

const resources = {
  pt: {
    translation: pt,
  },
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'pt',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
