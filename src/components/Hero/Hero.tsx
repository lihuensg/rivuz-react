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
          {/* Background Matrix */}
          <g className="waves-bg">
            <path id="bg-1" className="wave wave-bg" d="M0,100 C400,150 800,50 1440,100"></path>
            <path id="bg-2" className="wave wave-bg" d="M0,200 C300,250 900,150 1440,200"></path>
            <path id="bg-3" className="wave wave-bg" d="M0,300 C500,350 1000,250 1440,300"></path>
            <path id="bg-4" className="wave wave-bg" d="M0,500 C400,450 800,550 1440,500"></path>
            <path id="bg-5" className="wave wave-bg" d="M0,600 C300,550 900,650 1440,600"></path>
            <path id="bg-6" className="wave wave-bg" d="M0,700 C500,650 1000,750 1440,700"></path>
          </g>

          {/* Main Neural Streams (Dense Core) */}
          <g className="waves-main">
            <path id="m-1" className="wave wave-cyan wave-main" d="M0,380 C320,580 420,180 720,380 C1020,580 1120,180 1440,380"></path>
            <path id="m-2" className="wave wave-blue wave-main" d="M0,420 C200,270 600,570 1440,420"></path>
            <path id="m-3" className="wave wave-electric wave-main" d="M0,400 C400,500 800,300 1440,400"></path>
            <path id="m-4" className="wave wave-cyan wave-main" d="M0,350 C300,450 900,250 1440,350"></path>
            <path id="m-5" className="wave wave-blue wave-main" d="M0,450 C250,550 650,350 1440,450"></path>
            <path id="m-6" className="wave wave-electric wave-main" d="M0,300 C500,400 1100,200 1440,300"></path>
            <path id="m-7" className="wave wave-cyan wave-main" d="M0,500 C400,600 800,400 1440,500"></path>
          </g>

          {/* Detail Network (Vertical Spread) */}
          <g className="waves-detail">
            <path id="d-1" className="wave wave-cyan wave-detail" d="M0,150 C400,250 800,50 1440,150"></path>
            <path id="d-2" className="wave wave-blue wave-detail" d="M0,250 C300,150 900,350 1440,250"></path>
            <path id="d-3" className="wave wave-electric wave-detail" d="M0,350 C500,450 1100,250 1440,350"></path>
            <path id="d-4" className="wave wave-accent wave-detail" d="M0,450 C200,550 1000,350 1440,450"></path>
            <path id="d-5" className="wave wave-cyan wave-detail" d="M0,550 C300,450 900,650 1440,550"></path>
            <path id="d-6" className="wave wave-blue wave-detail" d="M0,650 C500,750 1100,550 1440,650"></path>
            <path id="d-7" className="wave wave-accent wave-detail" d="M0,750 C150,650 550,850 1440,750"></path>
            <path id="d-8" className="wave wave-cyan wave-detail" d="M0,120 C450,220 1050,20 1440,120"></path>
            <path id="d-9" className="wave wave-blue wave-detail" d="M0,680 C400,580 800,780 1440,680"></path>
            <path id="d-10" className="wave wave-electric wave-detail" d="M0,280 C250,380 650,180 1440,280"></path>
          </g>

          {/* High-Speed Data Packets */}
          <g className="packets">
            <circle className="data-packet" r="3" fill="#00f2ff">
              <animateMotion dur="2.5s" repeatCount="indefinite">
                <mpath href="#m-1" />
              </animateMotion>
            </circle>
            <circle className="data-packet" r="2" fill="#00f2ff" begin="1.2s">
              <animateMotion dur="2.5s" repeatCount="indefinite">
                <mpath href="#m-1" />
              </animateMotion>
            </circle>
            <circle className="data-packet" r="2.5" fill="#0ea5e9">
              <animateMotion dur="4s" repeatCount="indefinite">
                <mpath href="#m-2" />
              </animateMotion>
            </circle>
            <circle className="data-packet" r="3" fill="#3b82f6" begin="0.8s">
              <animateMotion dur="3.5s" repeatCount="indefinite">
                <mpath href="#m-3" />
              </animateMotion>
            </circle>
            <circle className="data-packet" r="2" fill="#00f2ff" begin="0.5s">
              <animateMotion dur="5s" repeatCount="indefinite">
                <mpath href="#m-4" />
              </animateMotion>
            </circle>
            <circle className="data-packet" r="2.5" fill="#0ea5e9" begin="2s">
              <animateMotion dur="3s" repeatCount="indefinite">
                <mpath href="#m-5" />
              </animateMotion>
            </circle>
            <circle className="data-packet" r="2" fill="#6366f1" begin="1.5s">
              <animateMotion dur="4.5s" repeatCount="indefinite">
                <mpath href="#d-4" />
              </animateMotion>
            </circle>
            <circle className="data-packet" r="1.5" fill="#00f2ff" begin="3s">
              <animateMotion dur="6s" repeatCount="indefinite">
                <mpath href="#d-1" />
              </animateMotion>
            </circle>
            <circle className="data-packet" r="1.5" fill="#3b82f6" begin="2.5s">
              <animateMotion dur="5.5s" repeatCount="indefinite">
                <mpath href="#d-6" />
              </animateMotion>
            </circle>
            <circle className="data-packet" r="2" fill="#00f2ff" begin="1s">
              <animateMotion dur="4s" repeatCount="indefinite">
                <mpath href="#m-7" />
              </animateMotion>
            </circle>
            <circle className="data-packet" r="1.5" fill="#6366f1" begin="0s">
              <animateMotion dur="5s" repeatCount="indefinite">
                <mpath href="#d-7" />
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
