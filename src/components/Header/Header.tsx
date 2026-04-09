import React, { useState, useEffect } from 'react';
import './Header.css';

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
        <div className="logo">
          <a href="#" className="nav-logo">
            RIVUZ<span className="dot">.</span>
          </a>
        </div>
        <nav className="nav-links">
          <a href="#services">Servicios</a>
          <a href="#projects">Proyectos</a>
          <a href="#pricing">Precios</a>
          <a href="#testimonials">Clientes</a>
          <a href="#contact" className="btn btn-primary btn-sm">
            <span>Contacto</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
