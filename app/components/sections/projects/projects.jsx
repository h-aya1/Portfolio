import { useState } from 'react';
import { projects } from '~/data/projects.js';
import './projects.css';

const ACCENT_COLORS = ['sage', 'rose', 'warm'];

const withImages    = projects.filter((p) => p.images?.length > 0);
const withoutImages = projects.filter((p) => !p.images?.length);

const Lightbox = ({ img, onClose }) => (
  <div className="lightbox-overlay" onClick={onClose}>
    <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>
    <img
      src={img}
      alt="Project screenshot"
      className="lightbox-img"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
);

const Projects = () => {
  const [lightbox, setLightbox] = useState(null);

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
                <div className="project-imgs">
                  {project.images.map((img, i) => (
                    <button
                      key={i}
                      className="project-thumb"
                      onClick={() => setLightbox(img)}
                      aria-label={`View screenshot ${i + 1}`}
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

      {lightbox && <Lightbox img={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  );
};

export default Projects;
