import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <a href="#" className="nav-logo" aria-label="RIVUZ">
            <span className="nav-logo-mark">RIVUZ</span>
            <span className="nav-logo-dot">.</span>
          </a>
        </div>

        {/* Hamburger button */}
        <button
          className={`hamburger ${menuOpen ? 'is-active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        {/* Overlay */}
        {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}

        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#services" onClick={handleNavClick}>Servicios</a>
          <a href="#projects" onClick={handleNavClick}>Proyectos</a>
          <a href="#pricing" onClick={handleNavClick}>Precios</a>
          <a href="#testimonials" onClick={handleNavClick}>Clientes</a>
          <a href="#nosotros" onClick={handleNavClick}>Nosotros</a>
          <a href="#contact" className="btn btn-primary btn-sm" onClick={handleNavClick}>
            <span>Contacto</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
