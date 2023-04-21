import React from 'react'
import '../css/Home.css';

const HomePage = () => {
  return (
    <div className='home-div'>
    <div className='banderas'>
        <img className='idioma' src="./img/ingles.jpg" alt='English'/>
        <img className='idioma' src="./img/castellano.svg" alt='Español'/>
        </div>
      <h1>GAME <br />OF <br />THRONES</h1>
      </div>
  )
} 

export default HomePage