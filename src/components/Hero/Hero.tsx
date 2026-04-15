import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        containerRef.current.style.setProperty('--mouse-x', `${x}%`);
        containerRef.current.style.setProperty('--mouse-y', `${y}%`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-section">
      <div className="river-container" ref={containerRef}>
        <svg className="river-svg" viewBox="0 0 1440 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <g className="river-back">
            <path className="river-line river-line-back" d="M0,180 C320,220 860,120 1440,170" />
            <path className="river-line river-line-back" d="M0,300 C300,350 820,250 1440,300" />
            <path className="river-line river-line-back" d="M0,520 C300,470 880,600 1440,540" />
            <path className="river-line river-line-back" d="M0,660 C340,620 900,730 1440,680" />
          </g>

          <g className="river-main">
            <path id="flow-main-1" className="river-line river-line-main" d="M0,360 C280,520 480,210 740,360 C980,500 1160,240 1440,370" />
            <path id="flow-main-2" className="river-line river-line-main" d="M0,420 C300,300 620,560 1440,430" />
            <path id="flow-main-3" className="river-line river-line-main river-line-accent" d="M0,460 C380,600 860,320 1440,470" />
          </g>

          <g className="packets">
            <circle className="data-packet" r="2" fill="#00b3ff">
              <animateMotion dur="8s" repeatCount="indefinite">
                <mpath href="#flow-main-1" />
              </animateMotion>
            </circle>
            <circle className="data-packet" r="2" fill="#00b3ff" begin="2.2s">
              <animateMotion dur="10s" repeatCount="indefinite">
                <mpath href="#flow-main-2" />
              </animateMotion>
            </circle>
            <circle className="data-packet" r="1.8" fill="#00b3ff" begin="1.4s">
              <animateMotion dur="9s" repeatCount="indefinite">
                <mpath href="#flow-main-3" />
              </animateMotion>
            </circle>
          </g>
        </svg>
      </div>

      <div className="container hero-container">
        <div className="content-wrapper">
          <span className="section-tag" data-aos="fade-down" data-aos-delay="100">Soluciones que fluyen</span>

          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="300">
            Tecnología que hace <br />
            <span className="text-gradient">fluir tu negocio</span>
          </h1>

          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="500">
            Creamos soluciones tecnológicas para empresas que buscan innovar, optimizar procesos y crecer con software confiable.
          </p>

          <div className="action-buttons" data-aos="fade-up" data-aos-delay="700">
            <a href="#contact" className="btn btn-primary">
              <span>Iniciar Proyecto</span>
            </a>
            <a href="#projects" className="btn btn-outline">
              Ver Proyectos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
