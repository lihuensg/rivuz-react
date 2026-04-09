import React from 'react';
import { RadialScrollGallery } from '../ui/portfolio-and-image-gallery';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '../ui/badge';
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
    <section className="bg-background min-h-[400px] sm:min-h-[600px] text-foreground overflow-hidden w-full relative pb-10" id="projects">
      <div className="h-[200px] sm:h-[250px] flex flex-col items-center justify-center space-y-4 pt-12 sm:pt-16 z-10 relative px-4">
        <div className="space-y-1 text-center" data-aos="fade-up">
          <span className="section-tag mb-4">
            Logros
          </span>
          <h2 className="section-title">
            Portafolio Destacado
          </h2>
          <p className="section-subtitle">Casos de éxito donde nuestra ingeniería transformó visión en rentabilidad.</p>
        </div>
        <div className="animate-bounce text-primary text-xs mt-4 sm:mt-6 font-medium text-center">↓ Desliza y pasa el mouse sobre ellas</div>
      </div>

      <RadialScrollGallery
        className="!min-h-[500px] sm:!min-h-[700px] mt-4"
        baseRadius={320}   /* Radio reducido para que estén más juntas */
        mobileRadius={180}
        visiblePercentage={60}
        scrollDuration={2500}
      >
        {(hoveredIndex) =>
          projects.map((project, index) => {
             const isActive = hoveredIndex === index;
             return (
              <div 
                key={project.name} 
                className={`group relative flex flex-col w-[300px] h-[350px] sm:w-[420px] sm:h-[400px] overflow-hidden rounded-[24px] bg-[#0A1220] transition-all duration-700 ease-out cursor-pointer border border-white/5 ${isActive ? 'scale-125 sm:scale-[1.35] shadow-[0_40px_80px_rgba(0,179,255,0.3)] z-50 ring-1 ring-[#00B3FF]' : 'scale-90 opacity-70 z-10 hover:opacity-100'}`}
              >
                {/* MITAD SUPERIOR: IMAGEN LIMPIA */}
                <div className="h-[55%] w-full relative overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Gradiente sutil interno solo para resaltar bordes */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0A1220] to-transparent opacity-100" />
                </div>

                {/* MITAD INFERIOR: TEXTO ORDENADO CENTRADO */}
                <div 
                  className="flex-1 w-full flex flex-col justify-center items-center text-center z-20 bg-[#0A1220]"
                  style={{ padding: '0 36px' }} /* Blindaje contra fallos de Tailwind (Margen lateral asegurado) */
                >
                    <span 
                      className="text-[#00B3FF] font-bold uppercase drop-shadow-md" 
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '11px', letterSpacing: '0.2em', marginBottom: '8px' }}
                    >
                      {project.category}
                    </span>
                    <h3 
                      className="font-extrabold text-white drop-shadow-lg"
                      style={{ fontFamily: "'Outfit', sans-serif", fontSize: '24px', lineHeight: '1.2', letterSpacing: '-0.02em', marginBottom: '12px' }}
                    >
                      {project.name}
                    </h3>
                    <p 
                      className="text-gray-400 opacity-90 leading-relaxed"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '13px', margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                    >
                      {project.desc}
                    </p>
                </div>
              </div>
             );
          })
        }
      </RadialScrollGallery>
    </section>
  );
};

export default Projects;
