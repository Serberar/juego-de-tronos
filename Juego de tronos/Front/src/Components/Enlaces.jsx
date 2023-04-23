import React from 'react'
import { NavLink } from 'react-router-dom';
import '../css/Enlaces.css'
import { useTranslation } from 'react-i18next';


const Enlaces = () => {
  const [t] = useTranslation("global");
    return (
      <div className='nav-div'>
<nav>
    <ul>
      <li>
        <NavLink exact to="/" activeClassName="active"></NavLink>
      </li>
      <li>
        <NavLink to="/personajes" activeClassName="active">{t('nav.characters')}</NavLink>
      </li>
      <li>
        <NavLink to="/casas" activeClassName="active">{t('nav.houses')}</NavLink>
      </li>
      <li>
        <NavLink to="/cronologia" activeClassName="active">{t('nav.chronology')}</NavLink>
      </li>
    </ul>
  </nav>
        </div>
      );
    }

export default Enlaces