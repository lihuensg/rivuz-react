import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-glow"></div>
      <div className="container footer-content">
        <div className="brand-col">
          <a href="#" className="footer-logo">RIVUZ<span className="dot">.</span></a>
          <p className="brand-desc">
            Arquitectura de software de élite para empresas. Diseñamos el futuro, línea por línea.
          </p>
        </div>

        <div className="copyright-col">
          <p className="copyright">&copy; {currentYear} RIVUZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
