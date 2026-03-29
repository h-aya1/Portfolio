import { useState } from 'react';
import { projects } from '~/data/projects.js';
import './projects.css';

const ACCENT_COLORS = ['sage', 'rose', 'warm', 'sage', 'rose', 'warm'];
const ACCENT_RGB = { sage: '143,174,159', rose: '201,164,154', warm: '212,169,106' };

const ImagePanel = ({ images, title }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="project-image-panel">
      {/* Browser chrome */}
      <div className="image-browser-bar">
        <div className="browser-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
      </div>

      {/* Screenshot — scrolls top→bottom on card hover */}
      <div
        className="image-scroll-area"
        style={{ backgroundImage: `url(${images[current]})` }}
        aria-label={`${title} screenshot`}
      />

      {/* Gradient fade into card background */}
      <div className="image-fade" aria-hidden="true" />

      {/* Dot switcher for multiple screenshots */}
      {images.length > 1 && (
        <div className="image-nav-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`nav-dot${i === current ? ' active' : ''}`}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              aria-label={`Screenshot ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Projects = () => (
  <section id="projects" className="projects-section">
    <div className="section-container">

      <div className="projects-header" data-reveal style={{ '--delay': 0 }}>
        <span className="section-label">Case Studies</span>
        <h2 className="section-title">Selected Work</h2>
        <p className="projects-description">
          Production-ready systems and internal dashboards — built for performance, clarity, and real business impact.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const color = ACCENT_COLORS[index % ACCENT_COLORS.length];
          return (
            <div
              key={project.id}
              className={`project-card glass-card${project.featured ? ' project-card-featured' : ''}`}
              style={{ '--accent-rgb': ACCENT_RGB[color], '--delay': 80 + index * 110 }}
              data-reveal
            >
              {project.images?.length > 0 && (
                <ImagePanel images={project.images} title={project.title} />
              )}

              <div className={`project-accent-bar project-accent-${color}`} />

              <div className="project-body">
                <span className="project-number">0{index + 1}</span>

                <div className="project-meta">
                  <span className={`project-role-tag project-role-${color}`}>{project.role}</span>
                  {project.featured && <span className="project-featured-badge">Featured</span>}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.description}</p>

                <div className="project-details">
                  {[
                    { label: 'Problem',  text: project.problem },
                    { label: 'Solution', text: project.solution },
                    { label: 'Impact',   text: project.impact },
                  ].map(({ label, text }) => (
                    <div key={label} className="project-detail">
                      <span className="project-detail-label">{label}</span>
                      <p className="project-detail-text">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.liveDemo !== '#' && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link project-link-primary">
                      Live Demo ↗
                    </a>
                  )}
                  {Array.isArray(project.github)
                    ? project.github.map((link) => (
                        <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link project-link-secondary">
                          {link.label} ↗
                        </a>
                      ))
                    : project.github !== '#' && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link project-link-secondary">
                          GitHub ↗
                        </a>
                      )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Projects;
