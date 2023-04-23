import React, { useEffect, useState } from 'react';
import { getCharacters, getApiEndpoint } from '../shared/Api';
import '../css/PersonajesPage.css';
import ReactModal from 'react-modal';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const PersonajesPage = () => {
  const [t, i18n] = useTranslation("global");

  const [personajes, setPersonajes] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPersonaje, setSelectedPersonaje] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacters();
      setPersonajes(data);
    };
    fetchData();
  }, []);

  const openModal = (personaje) => {
    setSelectedPersonaje(personaje);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedPersonaje(null);
    setModalIsOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPersonajes = personajes.filter(personaje =>
    personaje.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='personajes'>
      <div className='buscador'>
        <input className="byname" type='text' placeholder={t('input.text')} value={searchTerm}
          onChange={handleSearchChange}
        />
      <div className='banderas'>
        <Link to= "/"> <img className='inicioimg' src='./img/home.png' alt="home"/>
        </Link>
        <img className='idioma' src="./img/ingles.webp" alt='English' onClick={()=>i18n.changeLanguage("en")} />
        <img className='idioma' src="./img/castellano.webp" alt='Español' onClick={()=>i18n.changeLanguage("es")} />
        </div>
      </div>
      <div className="cards-container">
        {filteredPersonajes.map((personaje) => (
          <div className="cards" key={personaje.id} onClick={() => openModal(personaje)}>
            <div className="card-image">
              <img src={`${getApiEndpoint}${personaje.image}`} alt={personaje.name} />
            </div>
            <div className="card-name">{personaje.name}</div>
          </div>
        ))}
        {selectedPersonaje && (
          <ReactModal className="modal" isOpen={modalIsOpen} onRequestClose={closeModal}>
            <img className="personajeImg" src={`${getApiEndpoint}${selectedPersonaje.image}`} alt={selectedPersonaje.name} />

            <h2>{selectedPersonaje.name}</h2>
            <div className='card-container'>
              <div className='card'>
                <div className='titleCard'>{t('characters.house')}</div>
                <div className='contentCard'><img className="houseImg" src={`${getApiEndpoint}${selectedPersonaje.houseImage}`} alt={selectedPersonaje.houseImage} /></div>
              </div>
              <div className='card'>
                <div className='titleCard'>{t('characters.parents')}</div>
                <div className='contentCard'>{selectedPersonaje.parents.join(', ')}</div>
              </div>
              <div className='card'>
                <div className='titleCard'>{t('characters.relatives')}</div>
                <div className='contentCard'>{selectedPersonaje.siblings.join(', ')}</div>
              </div>
              <div className='card'>
                <div className='titleCard'>{t('characters.titles')}</div>
                <div className='contentCard'>{selectedPersonaje.titles.join(', ')}</div>
              </div>
              <div className='card'>
                <div className='titleCard'>{t('characters.alliances')}</div>
                <div className='contentCard'>{selectedPersonaje.alliances.join(', ')}</div>
              </div>
              <div className='card'>
                <div className='titleCard'>{t('characters.episodes')}</div>
                <div className='contentCard'>{selectedPersonaje.episodes.join(', ')}</div>
              </div>
              <div className='card'>
                <div className='titleCard'>{t('characters.age')}</div>
                <div className='contentCard'>{selectedPersonaje.age}</div>
              </div>
            </div>

            <button onClick={closeModal}>{t('button.close')}</button>
          </ReactModal>
        )}
        <div className="footer-div">
        </div>
      </div>
    </div>
  );
};

export default PersonajesPage;
