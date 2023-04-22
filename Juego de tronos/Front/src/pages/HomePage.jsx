import React from 'react'
import '../css/Home.css';
import { useTranslation } from 'react-i18next';
import i18n from '../translate/i18n';

function LanguageSwitcher() {
  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
}
const HomePage = () => {
  return (
    <div className='home-div'>
     <div>
      <button onClick={() => changeLanguage('en')}>{t('English')}</button>
      <button onClick={() => changeLanguage('es')}>{t('Español')}</button>
    </div>
    <div className='banderas'>
        <img className='idioma' src="./img/ingles.jpg" alt='English'/>
        <img className='idioma' src="./img/castellano.svg" alt='Español'/>
        </div>
      <h1>GAME <br />OF <br />THRONES</h1>
      </div>
  )
} 

export default HomePage