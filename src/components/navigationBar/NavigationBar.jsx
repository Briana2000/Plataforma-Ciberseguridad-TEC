import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './navigationBar.css';

const NavigationBar = () => {
  
  const [activeItem, setActiveItem] = useState('challenges'); // Inicialmente, Challenges está activo

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <a className="navbar-brand custom-margin-right" href="#">TEC</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className={`nav-item ${activeItem === 'challenges' ? 'active' : ''}`}>
            <Link
              className="nav-link"
              to="/challenges"
              onClick={() => handleItemClick('challenges')}
            >
              Challenges <span className="sr-only"></span>
            </Link>
          </li>
          <li className={`nav-item ${activeItem === 'submit_flag' ? 'active' : ''}`}>
            <Link
              className="nav-link"
              to="/submit_flag"
              onClick={() => handleItemClick('submit_flag')}
            >
              Submit Flag <span className="sr-only"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;