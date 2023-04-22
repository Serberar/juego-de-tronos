import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../translate/i18n';

function LanguageSwitcher() {
  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>{t('English')}</button>
      <button onClick={() => changeLanguage('es')}>{t('Español')}</button>
    </div>
  );
}

export default LanguageSwitcher;
