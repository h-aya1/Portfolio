import { useEffect, useState } from 'react';
import { projects } from '~/data/projects.js';
import './projects.css';

const ACCENT_COLORS = ['sage', 'rose', 'warm'];

const withImages    = projects.filter((p) => p.images?.length > 0);
const withoutImages = projects.filter((p) => !p.images?.length);

const Lightbox = ({ project, currentIndex, onClose, onPrev, onNext }) => (
  <div className="lightbox-overlay" onClick={onClose}>
    <button className="lightbox-close" onClick={(e) => { e.stopPropagation(); onClose(); }} aria-label="Close">✕</button>
    <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous screenshot">‹</button>
    <img
      src={project.images[currentIndex]}
      alt={`${project.title} screenshot ${currentIndex + 1}`}
      className="lightbox-img"
      onClick={(e) => e.stopPropagation()}
    />
    <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next screenshot">›</button>
  </div>
);

const Projects = () => {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (event) => {
      if (!lightbox) return;
      if (event.key === 'Escape') {
        setLightbox(null);
        return;
      }

      const imageCount = lightbox.project.images.length;
      if (event.key === 'ArrowLeft') {
        setLightbox((prev) => ({
          ...prev,
          currentIndex: (prev.currentIndex - 1 + imageCount) % imageCount,
        }));
      }

      if (event.key === 'ArrowRight') {
        setLightbox((prev) => ({
          ...prev,
          currentIndex: (prev.currentIndex + 1) % imageCount,
        }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox]);

  const openLightbox = (project, index) => setLightbox({ project, currentIndex: index });
  const closeLightbox = () => setLightbox(null);
  const showPrevious = () => {
    setLightbox((prev) => {
      if (!prev) return null;
      const count = prev.project.images.length;
      return {
        ...prev,
        currentIndex: (prev.currentIndex - 1 + count) % count,
      };
    });
  };
  const showNext = () => {
    setLightbox((prev) => {
      if (!prev) return null;
      const count = prev.project.images.length;
      return {
        ...prev,
        currentIndex: (prev.currentIndex + 1) % count,
      };
    });
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">

        <div className="projects-header" data-reveal style={{ '--delay': 0 }}>
          <span className="section-label">Work</span>
          <h2 className="section-title">Selected Projects</h2>
        </div>

        {/* Projects with images */}
        <div className="projects-list">
          {withImages.map((project, index) => {
            const color = ACCENT_COLORS[index % ACCENT_COLORS.length];
            return (
              <article
                key={project.id}
                className="project-item glass-card"
                data-reveal
                style={{ '--delay': 80 + index * 100 }}
              >
                {/* Left: info */}
                <div className="project-info">
                  <span className={`project-role project-role-${color}`}>{project.role}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="project-tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.liveDemo !== '#' && (
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className={`project-link project-link-${color}`}>
                        Live ↗
                      </a>
                    )}
                    {Array.isArray(project.github)
                      ? project.github.map((link) => (
                          <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link project-link-dim">
                            {link.label} ↗
                          </a>
                        ))
                      : project.github !== '#' && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link project-link-dim">
                            GitHub ↗
                          </a>
                        )}
                  </div>
                </div>

                {/* Right: image stack */}
                <div
                  className="project-imgs"
                  tabIndex="0"
                  aria-label={`${project.title} screenshots`}
                  onKeyDown={(event) => {
                    if (event.key === 'ArrowDown') {
                      event.currentTarget.scrollBy({ top: 200, left: 0, behavior: 'smooth' });
                    }
                    if (event.key === 'ArrowUp') {
                      event.currentTarget.scrollBy({ top: -200, left: 0, behavior: 'smooth' });
                    }
                    if (event.key === 'ArrowRight') {
                      event.currentTarget.scrollBy({ left: 220, top: 0, behavior: 'smooth' });
                    }
                    if (event.key === 'ArrowLeft') {
                      event.currentTarget.scrollBy({ left: -220, top: 0, behavior: 'smooth' });
                    }
                  }}
                >
                  {project.images.map((img, i) => (
                    <button
                      key={i}
                      className="project-thumb"
                      onClick={() => openLightbox(project, i)}
                      aria-label={`View screenshot ${i + 1} of ${project.title}`}
                    >
                      <img src={img} alt={`${project.title} screenshot ${i + 1}`} />
                    </button>
                  ))}
                </div>

                <div className={`project-side-bar project-side-bar-${color}`} />
              </article>
            );
          })}
        </div>

        {/* Other projects */}
        {withoutImages.length > 0 && (
          <div className="other-projects" data-reveal style={{ '--delay': 100 }}>
            <span className="other-projects-label">Other Projects</span>
            <div className="other-projects-grid">
              {withoutImages.map((project, index) => {
                const color = ACCENT_COLORS[(withImages.length + index) % ACCENT_COLORS.length];
                return (
                  <div key={project.id} className="other-card glass-card">
                    <span className={`project-role project-role-${color}`}>{project.role}</span>
                    <h4 className="other-card-title">{project.title}</h4>
                    <p className="other-card-description">{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="project-tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {Array.isArray(project.github)
                        ? project.github.map((link) => (
                            <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link project-link-dim">
                              {link.label} ↗
                            </a>
                          ))
                        : project.github !== '#' && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link project-link-dim">
                              GitHub ↗
                            </a>
                          )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {lightbox && (
        <Lightbox
          project={lightbox.project}
          currentIndex={lightbox.currentIndex}
          onClose={closeLightbox}
          onPrev={showPrevious}
          onNext={showNext}
        />
      )}
    </section>
  );
};

export default Projects;
