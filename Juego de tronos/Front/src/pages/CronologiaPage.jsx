import React, { useEffect, useState } from 'react';
import { getCharacters, getApiEndpoint } from '../shared/Api';
import '../css/Crono.css'

const CronologiaPage = () => {
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
        <img className='idioma' src="./img/ingles.jpg" alt='English'/>
        <img className='idioma' src="./img/castellano.svg" alt='Español'/>
        </div>
      <div className="container">
        <button onClick={ordenarPersonajes}>CHRONOLOGICAL ORDER</button>
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
