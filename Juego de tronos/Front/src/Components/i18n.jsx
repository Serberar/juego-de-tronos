import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to my app!',
      buttonText: 'Change language'
    }
  },
  es: {
    translation: {
      welcome: '¡Bienvenido a mi aplicación!',
      buttonText: 'Cambiar idioma'
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
