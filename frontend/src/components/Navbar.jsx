import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';
import Curriculum from "../assets/curriculum.jpg";
import CurriculumModalLink from '../screens/Portfolio';

export default function Navbar() {
  const location = useLocation();
  const [glowLink, setGlowLink] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('light-mode', !darkMode);
  }, [darkMode]);

  const handleLinkClick = (name) => {
    setGlowLink(name);
    setTimeout(() => setGlowLink(null), 2000);
  };

  const toggleTheme = () => setDarkMode(prev => !prev);

  const links = [
    { name: 'Portafolio', path: '/' },
    // { name: 'Conócenos', path: '/conocenos' },
    {
      name: 'Curriculum',
      component: <CurriculumModalLink src={Curriculum} label="Curriculum" />
    },
    { name: 'Contáctame', path: '/contacto' },

  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="NEONCODE Logo" className="navbar-logo" />
        <span className="navbar-name"><strong>Contrahazt_code</strong></span>
      </div>

      <ul className="navbar-list">
        {links.map((item) => {
          const isGlowing = glowLink === item.name;
          const isCurrent = item.path ? location.pathname === item.path : false;

          return (
            <li key={item.name} className="navbar-item">
    {item.path ? (
  <Link
    to={item.path}
    className={
      'navbar-link' +
      (isGlowing ? ' active' : '') +
      (isCurrent && !isGlowing ? ' selected' : '')
    }
    onClick={() => handleLinkClick(item.name)}
  >
    {item.name}
  </Link>
) : (
  /* item especial: inyectamos clase y callback para el glow */
  React.cloneElement(item.component, {
    className: 'navbar-link' + (isGlowing ? ' active' : ''),
    onOpen: () => handleLinkClick(item.name),
  })
)}

            </li>
          );
        })}

        {/* <li className="navbar-item">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Alternar modo día/noche"
          >
            {darkMode ? '◐' : '◑'}
          </button>
        </li> */}
      </ul>
    </nav>
  );
}
