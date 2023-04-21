import React, { useEffect, useState } from 'react';
import { getHouses, getApiEndpoint } from '../shared/Api';
import '../css/PersonajesPage.css';
import ReactModal from 'react-modal';


const CasasPage = () => {
  const [personajes, setPersonajes] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPersonaje, setSelectedPersonaje] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHouses();
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
        <input className="byname" type='text' placeholder='Search by name' value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className='banderas'>
        <img className='idioma' src="./img/ingles.jpg" alt='English'/>
        <img className='idioma' src="./img/castellano.svg" alt='Español'/>
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
    <div className='titleCard'>Settlement:</div>
    <div className='contentCard'>{selectedPersonaje.settlement}</div>
  </div>
  <div className='card'>
    <div className='titleCard'>Region:</div>
    <div className='contentCard'>{selectedPersonaje.region}</div>
  </div>
  <div className='card'>
    <div className='titleCard'>Alliances:</div>
    <div className='contentCard'>{selectedPersonaje.alliances.join(', ')}</div>
  </div>
  <div className='card'>
    <div className='titleCard'>Religions:</div>
    <div className='contentCard'>{selectedPersonaje.religions.join(', ')}</div>
  </div>
  <div className='card'>
    <div className='titleCard'>Foundation:</div>
    <div className='contentCard'>{selectedPersonaje.foundation}</div>
  </div>
</div>

            <button onClick={closeModal}>Close</button>
          </ReactModal>
        )}
        <div className="footer-div">
        </div>
      </div>
    </div>
  );
};

export default CasasPage;
