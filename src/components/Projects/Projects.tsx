import React from 'react';
import './Projects.css';

interface Project {
  name: string;
  category: string;
  desc: string;
  image: string;
  delay: number;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      name: 'Sistema Inmobiliario',
      category: 'PLATAFORMA',
      desc: 'Gestión integral de propiedades, clientes y contratos con panel administrativo avanzado.',
      image: '/images/projects/App-Inmobiliaria.jpeg',
      delay: 100
    },
    {
      name: 'Gestión de Lotes',
      category: 'SISTEMA',
      desc: 'Plataforma para la visualización y administración de loteos con mapas interactivos.',
      image: '/images/projects/App-Lotes.jpeg',
      delay: 200
    },
    {
      name: 'Concesionaria Digital',
      category: 'WEB',
      desc: 'Catálogo dinámico de vehículos con sistema de reservas y gestión de inventario.',
      image: '/images/projects/App-Concesionaria.jpeg',
      delay: 300
    },
    {
      name: 'Music Stream',
      category: 'PLATAFORMA',
      desc: 'Interfaz moderna para reproducción de música y gestión de listas de reproducción.',
      image: '/images/projects/App-Music.jpeg',
      delay: 400
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Logros</span>
          <h2 className="section-title">Portafolio Destacado</h2>
          <p className="section-subtitle">Casos de éxito donde nuestra ingeniería transformó visión en rentabilidad.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.name} 
              className="project-card" 
              data-aos="fade-up" 
              data-aos-delay={project.delay}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.name} className="project-image" />
                <div className="project-overlay">
                  <div className="project-content">
                    <span className="project-category">{project.category}</span>
                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-desc">{project.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
