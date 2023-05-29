import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import './Navbar.css';
import logo from '../images/star-wars-logo.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img className="navbar-logo-img" src={logo} alt="logo" />
          </Link>
        </div>
        <button type="button" className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </button>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="quiz" className="nav-links" onClick={closeMenu}>
              Character Quiz
            </Link>
          </li>
          <li className="nav-item">
            <Link to="lightsaber" className="nav-links" onClick={closeMenu}>
              Lightsaber Duel
            </Link>
          </li>
          <li className="nav-item">
            <Link to="soundboard" className="nav-links" onClick={closeMenu}>
              SoundBoard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="translator" className="nav-links" onClick={closeMenu}>
              Galactic Translator
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
