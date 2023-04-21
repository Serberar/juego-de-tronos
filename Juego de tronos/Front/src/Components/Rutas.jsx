import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PersonajesPage from '../pages/PersonajesPage';
import CasasPage from '../pages/CasasPage'
import CronologiaPage from '../pages/CronologiaPage'

function Rutas() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage></HomePage>} />
        <Route path="personajes" element={<PersonajesPage></PersonajesPage>} />
        <Route path="casas" element={<CasasPage></CasasPage>} />
        <Route path="cronologia" element={<CronologiaPage></CronologiaPage>} />
      </Routes>
    </div>
  );
}

export default Rutas;