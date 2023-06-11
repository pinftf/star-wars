import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import logo from '../images/star-wars-logo.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  const logoStyle =
    windowWidth <= 960
      ? {
          width: '80px',
        }
      : {
          width: '120px',
        };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img
              className="navbar-logo-img"
              src={logo}
              alt="logo"
              style={logoStyle}
            />
          </Link>
          <button type="button" className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </button>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/quiz" className="nav-links" onClick={closeMenu}>
              Character Quiz
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/lightsaber" className="nav-links" onClick={closeMenu}>
              Lightsaber Duel
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/soundboard" className="nav-links" onClick={closeMenu}>
              SoundBoard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/translator" className="nav-links" onClick={closeMenu}>
              Galactic Translator
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
