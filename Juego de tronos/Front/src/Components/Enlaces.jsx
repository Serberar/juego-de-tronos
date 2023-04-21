import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Enlaces.css'


const Enlaces = () => {
    return (
      <div className='nav-div'>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/personajes">Characters</Link>
            </li>
            <li>
              <Link to="/casas">Houses</Link>
            </li>
            <li>
              <Link to="/cronologia">Chronology</Link>
            </li>
          </ul>
        </nav>
        </div>
      );
    }

export default Enlaces