import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Nuestros Servicios</span>
          <h2 className="section-title">Soluciones tecnológicas que impulsan tu negocio</h2>
          <p className="section-subtitle">
            Diseñamos y desarrollamos software, plataformas y soluciones digitales que optimizan procesos, conectan sistemas y ayudan a las empresas a crecer con tecnología confiable.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card glass-panel hover-glow" data-aos="fade-up" data-aos-delay="100">
            <div className="icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3>Desarrollo de Software</h3>
            <p>Creamos soluciones tecnológicas personalizadas adaptadas a las necesidades específicas de tu empresa, optimizando procesos y mejorando la eficiencia operativa.</p>
          </div>

          <div className="service-card glass-panel hover-glow" data-aos="fade-up" data-aos-delay="200">
            <div className="icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h3>Desarrollo Web Profesional</h3>
            <p>Sitios web modernos, rápidos y optimizados que generan resultados y reflejan la identidad de tu marca.</p>
          </div>

          <div className="service-card glass-panel hover-glow" data-aos="fade-up" data-aos-delay="300">
            <div className="icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22v-5"></path>
                <path d="M9 8V2"></path>
                <path d="M15 8V2"></path>
                <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path>
              </svg>
            </div>
            <h3>Integraciones de Sistemas</h3>
            <p>Conectamos tus herramientas y plataformas para crear flujos de trabajo eficientes y automatizados.</p>
          </div>

          <div className="service-card glass-panel hover-glow" data-aos="fade-up" data-aos-delay="400">
            <div className="icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
              </svg>
            </div>
            <h3>Desarrollo de MVPs</h3>
            <p>Lanzamos tu producto mínimo viable de forma rápida para validar tu idea de negocio en el mercado.</p>
          </div>

          <div className="service-card glass-panel hover-glow" data-aos="fade-up" data-aos-delay="500">
            <div className="icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <h3>Automatización de Procesos</h3>
            <p>Automatizamos procesos repetitivos para que tu equipo se enfoque en lo que realmente importa.</p>
          </div>

          <div className="service-card glass-panel hover-glow featured" data-aos="fade-up" data-aos-delay="600">
            <div className="card-top">
              <div className="icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary)" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
            </div>
            <h3>¿Necesitas una solución a medida?</h3>
            <p>Cuéntanos sobre tu proyecto y descubramos cómo la tecnología puede impulsar tu negocio.</p>
            <div className="action-featured">
              <a href="#contact" className="btn btn-primary btn-sm">
                <span>Contactar Ahora</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
