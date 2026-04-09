import React, { useRef, useState, useEffect, useCallback } from 'react';
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

  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Update active index on scroll
  const handleScroll = useCallback(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const cardWidth = track.querySelector('.project-card')?.clientWidth || 0;
    const gap = 32;
    const index = Math.round(track.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(index, projects.length - 1));
  }, [projects.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Mouse drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
    trackRef.current.style.cursor = 'grabbing';
    trackRef.current.style.scrollSnapType = 'none';
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => {
    setIsDragging(false);
    if (!trackRef.current) return;
    trackRef.current.style.cursor = 'grab';
    trackRef.current.style.scrollSnapType = 'x mandatory';
  };

  // Navigate to specific card
  const scrollToIndex = (index: number) => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const card = track.querySelectorAll('.project-card')[index] as HTMLElement;
    if (card) {
      const trackRect = track.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const offset = cardRect.left - trackRect.left + track.scrollLeft - (trackRect.width - cardRect.width) / 2;
      track.scrollTo({ left: offset, behavior: 'smooth' });
    }
  };

  const goNext = () => {
    const next = Math.min(activeIndex + 1, projects.length - 1);
    scrollToIndex(next);
  };

  const goPrev = () => {
    const prev = Math.max(activeIndex - 1, 0);
    scrollToIndex(prev);
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Logros</span>
          <h2 className="section-title">Portafolio Destacado</h2>
          <p className="section-subtitle">
            Casos de éxito donde nuestra ingeniería transformó visión en rentabilidad.
          </p>
        </div>
      </div>

      {/* Carousel wrapper */}
      <div className="projects-carousel-wrapper" data-aos="fade-up" data-aos-delay="200">
        {/* Nav arrows — desktop */}
        <button
          className={`carousel-arrow carousel-arrow-prev ${activeIndex === 0 ? 'is-disabled' : ''}`}
          onClick={goPrev}
          aria-label="Proyecto anterior"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          className={`carousel-arrow carousel-arrow-next ${activeIndex === projects.length - 1 ? 'is-disabled' : ''}`}
          onClick={goNext}
          aria-label="Proyecto siguiente"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>

        {/* Scrollable track */}
        <div
          ref={trackRef}
          className={`projects-track ${isDragging ? 'is-dragging' : ''}`}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {projects.map((project, i) => (
            <div
              key={project.name}
              className={`project-card ${activeIndex === i ? 'is-active' : ''}`}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                  loading="lazy"
                  draggable={false}
                />
                <div className="project-image-overlay" />
              </div>

              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.name}</h3>
                <p className="project-desc">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="carousel-dots">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${activeIndex === i ? 'is-active' : ''}`}
              onClick={() => scrollToIndex(i)}
              aria-label={`Ir al proyecto ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
