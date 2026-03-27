import { projects } from '~/data/projects.js';
import './projects.css';

const ACCENT_COLORS = ['sage', 'rose', 'warm', 'sage', 'rose'];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        {/* Header */}
        <div className="projects-header">
          <span className="section-label">Case Studies</span>
          <h2 className="section-title">Selected Work</h2>
          <p className="projects-description">
            Production-ready systems and internal dashboards — built for performance, clarity, and real business impact.
          </p>
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => {
            const color = ACCENT_COLORS[index % ACCENT_COLORS.length];
            return (
              <div
                key={project.id}
                className={`project-card glass-card ${project.featured ? 'project-card-featured' : ''}`}
              >
                {/* Top accent line */}
                <div className={`project-accent-bar project-accent-${color}`} />

                <div className="project-body">
                  {/* Meta */}
                  <div className="project-meta">
                    <span className={`project-role-tag project-role-${color}`}>{project.role}</span>
                    {project.featured && (
                      <span className="project-featured-badge">Featured</span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-summary">{project.description}</p>

                  {/* Problem / Solution / Impact */}
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

                  {/* Tech stack */}
                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="project-tech-tag">{tech}</span>
                    ))}
                  </div>

                  {/* Links */}
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
};

export default Projects;
