import React, { useEffect, useMemo, useState } from 'react';
import './Projects.css';

interface Project {
  name: string;
  category: string;
  desc: string;
  image: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      name: 'Sistema Inmobiliario',
      category: 'PLATAFORMA',
      desc: 'Gestión integral de propiedades, clientes y contratos con panel administrativo avanzado.',
      image: '/images/projects/App-Inmobiliaria.jpeg',
    },
    {
      name: 'Gestión de Lotes',
      category: 'SISTEMA',
      desc: 'Plataforma para la visualización y administración de loteos con mapas interactivos.',
      image: '/images/projects/App-Lotes.jpeg',
    },
    {
      name: 'Concesionaria Digital',
      category: 'WEB',
      desc: 'Catálogo dinámico de vehículos con sistema de reservas y gestión de inventario.',
      image: '/images/projects/App-Concesionaria.jpeg',
    },
    {
      name: 'Music Stream',
      category: 'PLATAFORMA',
      desc: 'Interfaz moderna para reproducción de música y gestión de listas de reproducción.',
      image: '/images/projects/App-Music.jpeg',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const activeProject = projects[activeIndex];

  // Autoplay orbital focus
  useEffect(() => {
    if (modalIndex !== null) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [projects.length, modalIndex]);

  // Allow closing modal with Escape key
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setModalIndex(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const goNext = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const orbitItems = useMemo(() => {
    const radius = 230;
    const baseAngle = -90;
    return projects.map((project, index) => {
      const angleStep = 360 / projects.length;
      const angle = baseAngle + (index - activeIndex) * angleStep;
      const radians = (angle * Math.PI) / 180;
      return {
        ...project,
        index,
        x: Math.cos(radians) * radius,
        y: Math.sin(radians) * radius,
      };
    });
  }, [projects, activeIndex]);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Logros</span>
          <h2 className="section-title">Portafolio <span className="text-gradient-muted">Destacado</span></h2>
          <p className="section-subtitle">
            Casos de éxito donde nuestra ingeniería transformó visión en rentabilidad.
          </p>
        </div>
        <div className="projects-orbit" data-aos="fade-up" data-aos-delay="200">
          <button className="orbit-nav orbit-nav-prev" onClick={goPrev} aria-label="Proyecto anterior">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button className="orbit-nav orbit-nav-next" onClick={goNext} aria-label="Proyecto siguiente">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>

          <div className="orbit-rings" aria-hidden="true" />

          <div className="orbit-map" role="list" aria-label="Proyectos destacados">
            {orbitItems.map((project) => (
              <button
                key={project.name}
                type="button"
                className={`orbit-node ${activeIndex === project.index ? 'is-active' : ''}`}
                style={{
                  transform: `translate(calc(-50% + ${project.x}px), calc(-50% + ${project.y}px))`,
                }}
                onClick={() => {
                  setActiveIndex(project.index);
                  setModalIndex(project.index);
                }}
                aria-label={`Abrir ${project.name}`}
              >
                <img src={project.image} alt={project.name} loading="lazy" />
              </button>
            ))}
          </div>

          <article className="project-spotlight glass-panel">
            <div className="spotlight-image-wrap">
              <img src={activeProject.image} alt={activeProject.name} className="spotlight-image" />
            </div>

            <div className="spotlight-content">
              <span className="project-category">{activeProject.category}</span>
              <h3 className="project-title">{activeProject.name}</h3>
              <p className="project-desc">{activeProject.desc}</p>
              <button type="button" className="spotlight-expand" onClick={() => setModalIndex(activeIndex)}>
                Ver en grande
              </button>
            </div>
          </article>
        </div>

        <div className="projects-mobile-list" data-aos="fade-up" data-aos-delay="250">
          {projects.map((project, index) => (
            <button
              key={project.name}
              type="button"
              className={`mobile-project-card glass-panel ${activeIndex === index ? 'is-active' : ''}`}
              onClick={() => {
                setActiveIndex(index);
                setModalIndex(index);
              }}
            >
              <img src={project.image} alt={project.name} className="mobile-project-image" loading="lazy" />
              <div className="mobile-project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.name}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {modalIndex !== null && (
        <div className="project-modal-backdrop" onClick={() => setModalIndex(null)}>
          <div className="project-modal glass-panel" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="project-modal-close" onClick={() => setModalIndex(null)} aria-label="Cerrar">
              ×
            </button>
            <img
              src={projects[modalIndex].image}
              alt={projects[modalIndex].name}
              className="project-modal-image"
            />
            <div className="project-modal-content">
              <span className="project-category">{projects[modalIndex].category}</span>
              <h3 className="project-title">{projects[modalIndex].name}</h3>
              <p className="project-desc">{projects[modalIndex].desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
