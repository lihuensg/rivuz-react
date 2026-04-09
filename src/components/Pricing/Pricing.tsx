import React from 'react';
import './Pricing.css';

interface Plan {
  name: string;
  desc: string;
  features: string[];
  scope: string;
  recommended: boolean;
}

const Pricing: React.FC = () => {
  const plans: Plan[] = [
    {
      name: 'Plan Inicial',
      desc: 'Ideal para emprendimientos o negocios que quieren dar sus primeros pasos en el mundo digital.',
      features: [
        'Aplicación web moderna',
        'Diseño simple, claro y profesional',
        'Hasta 5 secciones',
        'WhatsApp, Google Maps, Formularios, Reseñas',
        'Dominio y hosting (opcional)',
        'Soporte técnico básico'
      ],
      scope: 'Desde $5,000 USD',
      recommended: false
    },
    {
      name: 'Plan Crecimiento',
      desc: 'Pensado para empresas que necesitan mejorar procesos.',
      features: [
        'Todo lo incluido en el Plan Inicial',
        'Conexión con otras plataformas o sistemas',
        'Panel de administración simple',
        'Carga simple de productos/stock',
        'Soporte técnico avanzado',
      ],
      scope: 'Desde $12,000 USD',
      recommended: true
    },
    {
      name: 'Plan Empresarial',
      desc: 'Creado para empresas que necesitan una solución completa y personalizada.',
      features: [
        'Desarrollo a medida',
        'Funciones avanzadas según las necesidades del negocio',
        'Integración con herramientas inteligentes o automatizadas',
        'Gestión de usuarios, inventarios y ventas',
        'Métricas, reportes y estadísticas',
        'Soporte técnico 24/7',
      ],
      scope: 'Cotización a medida',
      recommended: false
    }
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Escalabilidad flexible</span>
          <h2 className="section-title">Impulsa tu Crecimiento</h2>
          <p className="section-subtitle">
            Acompañamos el crecimiento de tu empresa con soluciones tecnológicas pensadas para cada etapa.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div 
              key={plan.name} 
              className={`pricing-card glass-panel ${plan.recommended ? 'recommended' : ''}`} 
              data-aos="fade-up" 
              data-aos-delay={i * 100}
            >
              {plan.recommended && (
                <div className="badge-wrapper">
                  <span className="badge">Más popular</span>
                </div>
              )}
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-desc">{plan.desc}</p>
              </div>
              <ul className="features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className="check">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="action-wrapper">
                <a 
                  href="#contact" 
                  className={`btn btn-block ${plan.recommended ? 'btn-primary' : 'btn-outline'}`}
                >
                  <span>Contactar Ventas</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
