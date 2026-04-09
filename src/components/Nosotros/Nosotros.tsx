import React, { useState } from 'react';
import './Nosotros.css';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials?: {
    linkedin?: string;
    github?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: 'Lihuel Gonzalez',
    role: 'Co-Founder & Full Stack Developer',
    image: '/images/team/member-1.png',
    socials: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Valentina Ruiz',
    role: 'UI/UX Designer & Frontend Developer',
    image: '/images/team/member-2.png',
    socials: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Matías Torres',
    role: 'Backend Engineer & DevOps',
    image: '/images/team/member-3.png',
    socials: {
      linkedin: '#',
      github: '#',
    },
  },
];

const Nosotros: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => setActiveIndex(index);
  const handleMouseLeave = () => setActiveIndex(null);

  return (
    <section className="nosotros-section" id="nosotros">
      <div className="container">
        {/* Section Header — same pattern as Services, Testimonials, etc. */}
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Nuestro Equipo</span>
          <h2 className="section-title">
            Las personas detrás de cada{' '}
            <span className="text-gradient">solución</span>
          </h2>
          <p className="section-subtitle">
            Somos un equipo multidisciplinario apasionado por la tecnología, comprometido con crear productos digitales que generan impacto real en los negocios de nuestros clientes.
          </p>
        </div>

        {/* Two-column content */}
        <div className="nosotros-content" data-aos="fade-up" data-aos-delay="200">
          {/* Left — Staggered Photo Grid */}
          <div className="nosotros-photos">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`photo-card ${
                  activeIndex === index ? 'active' : ''
                } ${activeIndex !== null && activeIndex !== index ? 'dimmed' : ''}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Right — Team Member List */}
          <div className="nosotros-team-list">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`team-member-item ${
                  activeIndex === index ? 'active' : ''
                } ${activeIndex !== null && activeIndex !== index ? 'dimmed' : ''}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="member-indicator" />
                <div className="member-info">
                  <h4 className="member-name">{member.name}</h4>
                  <p className="member-role">{member.role}</p>
                </div>
                <span className="member-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Social links — appear on hover */}
                {member.socials && (
                  <div className="member-socials">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn de ${member.name}`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub de ${member.name}`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
