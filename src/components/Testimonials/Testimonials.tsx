import React from 'react';
import './Testimonials.css';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Necesitábamos digitalizar procesos que hacíamos de manera manual y el cambio fue enorme. Nos desarrollaron un sistema a medida que mejoró nuestra organización, redujo errores y nos permitió ahorrar mucho tiempo en la operación diaria.",
      name: "Brian Charles Mengeón",
      role: "BCM Products"
    },
    {
      quote: "Necesitaba gestionar varios proyectos al mismo tiempo y el equipo de Rivuz creo un sistema adecuado. Hoy mis clientes notan la diferencia.",
      name: "Sofia Caceres",
      role: "SOCA STUDIO"
    },
    {
      quote: "Gracias a RIVUZ pudimos mejorar la gestión de nuestra barbería con una solución simple, ordenada y fácil de usar. Hoy trabajamos de forma más organizada y brindamos una mejor atención a nuestros clientes.",
      name: "Nazareno Wicky",
      role: "NazaBarber"
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Testimonios</span>
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, i) => (
            <div 
              key={testimonial.name} 
              className="testimonial-card glass-panel" 
              data-aos="fade-up" 
              data-aos-delay={i * 150}
            >
              <div className="quote-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1.5.5 1.5 1.714Z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.5c0 1.214.5 1.714 1.5 1.714Z"></path>
                </svg>
              </div>
              <p className="quote-text">"{testimonial.quote}"</p>

              <div className="client-meta">
                <div className="client-info">
                  <h4 className="client-name">{testimonial.name}</h4>
                  <p className="client-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
