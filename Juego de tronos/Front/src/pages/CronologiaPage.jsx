import React, { useEffect, useState } from 'react';
import { getCharacters, getApiEndpoint } from '../shared/Api';
import '../css/Crono.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const CronologiaPage = () => {
  const [t, i18n] = useTranslation("global");

  const [personajes, setPersonajes] = useState([]);
  const [filteredPersonajes, setFilteredPersonajes] = useState([]);
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacters();
      setPersonajes(data);
      setFilteredPersonajes(data);
    };
    fetchData();
  }, []);

  const ordenarPersonajes = () => {
    if (ordenAscendente) {
      setFilteredPersonajes([...personajes].sort((a, b) => a.age - b.age));
    } else {
      setFilteredPersonajes([...personajes].sort((a, b) => b.age - a.age));
    }
    setOrdenAscendente(!ordenAscendente);
  }

  return (
    <div className='cronologia-div'>
      <div className='banderas'>
        <Link to= "/"> <img className='inicioimg' src='./img/home.png' alt="home"/>
        </Link>
        <img className='idioma' src="./img/ingles.webp" alt='English' onClick={()=>i18n.changeLanguage("en")} />
        <img className='idioma' src="./img/castellano.webp" alt='Español' onClick={()=>i18n.changeLanguage("es")} />
        </div>
      <div className="container">
        <button className='order' onClick={ordenarPersonajes}>{t('button.order')}</button>
        {filteredPersonajes.map((personaje) => (
          <div className="personaje" key={personaje.id}>
            <div className="image">
              <img src={`${getApiEndpoint}${personaje.image}`} alt={personaje.name} />
            </div>
            <div className="name">{personaje.name}</div>
            <div className="age">{personaje.age}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CronologiaPage;
