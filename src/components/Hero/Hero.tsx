import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-orb orb-left" />
        <div className="hero-orb orb-right" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-container">
        <div className="content-wrapper">
          <span className="section-tag" data-aos="fade-down" data-aos-delay="50">Arquitectura digital premium</span>

          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="120">
            Software de alto impacto <br />
            <span className="text-gradient">para decisiones más rápidas</span>
          </h1>

          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="220">
            Diseñamos productos y sistemas a medida que simplifican operaciones, elevan la experiencia del cliente y sostienen crecimiento real.
          </p>

          <div className="action-buttons" data-aos="fade-up" data-aos-delay="320">
            <a href="#contact" className="btn btn-primary">
              <span>Iniciar Proyecto</span>
            </a>
            <a href="#projects" className="btn btn-outline">
              Ver Casos de Éxito
            </a>
          </div>

          <div className="hero-metrics" data-aos="fade-up" data-aos-delay="420">
            <div className="hero-metric">
              <strong>Entregas precisas</strong>
              <span>priorizando tiempo y claridad</span>
            </div>
            <div className="hero-metric">
              <strong>Diseño orientado a negocio</strong>
              <span>menos ruido, más conversión</span>
            </div>
            <div className="hero-metric">
              <strong>Soporte estratégico</strong>
              <span>acompañamiento en cada etapa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
