import React from 'react';
import '../css/Home.css';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className='home-div'>
      <h1>{t('home.title')}</h1>
      <div className='banderas'>
        <img className='idioma' src="./img/ingles.webp" alt='English' onClick={()=>i18n.changeLanguage("en")} />
        <img className='idioma' src="./img/castellano.webp" alt='Español' onClick={()=>i18n.changeLanguage("es")} />
        </div>
      </div>
  )
} 

export default HomePage 