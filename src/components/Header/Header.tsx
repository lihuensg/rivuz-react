import React, { useState, useEffect } from 'react';
import './Header.css';
import VaporizeTextCycle, { Tag } from '../ui/vapour-text-effect';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo relative flex items-center" style={{ width: '130px', height: '40px' }}>
          <a href="#" className="nav-logo" style={{ position: 'absolute', inset: 0, display: 'block' }}>
              <VaporizeTextCycle
                  texts={["RIVUZ.", "RIVUZ."]}
                  font={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "28.8px",
                      fontWeight: 800,
                      letterSpacing: "-1px"
                  }}
                  color="rgb(255, 255, 255)"
                  spread={4}
                  density={8}
                  animation={{ vaporizeDuration: 2.2, fadeInDuration: 1.5, waitDuration: 4 }}
                  direction="left-to-right"
                  alignment="left"
                  tag={Tag.H1}
              />
          </a>
        </div>
        <nav className="nav-links">
          <a href="#services">Servicios</a>
          <a href="#projects">Proyectos</a>
          <a href="#pricing">Precios</a>
          <a href="#testimonials">Clientes</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contact" className="btn btn-primary btn-sm">
            <span>Contacto</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
