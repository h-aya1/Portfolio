import { projects } from '~/data/projects.js';
import './projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-badge font-mono">
            <span className="badge-dot"></span>
            Case Studies
          </div>
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-description text-secondary">
            A selection of production-ready systems and internal dashboards I've developed,
            focusing on performance, clarity, and business impact.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card card-system ${project.featured ? 'featured-project' : ''}`}
            >
              <div className="project-content">
                <div className="project-meta">
                  <span className="project-role font-mono text-accent">{project.role}</span>
                </div>

                <h3 className="project-name">
                  {project.title}
                </h3>

                <div className="project-details">
                  <div className="detail-item">
                    <span className="detail-label font-mono">Problem</span>
                    <p className="detail-text text-secondary">{project.problem}</p>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label font-mono">Solution</span>
                    <p className="detail-text text-secondary">{project.solution}</p>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label font-mono">Impact</span>
                    <p className="detail-text text-secondary">{project.impact}</p>
                  </div>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="technology-tag font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.liveDemo !== "#" && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link-primary"
                    >
                      Live Demo
                    </a>
                  )}
                  {/* Dynamic GitHub Links Rendering */}
                  {Array.isArray(project.github) ? (
                    project.github.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link project-link-secondary"
                      >
                        {link.label || "GitHub"}
                      </a>
                    ))
                  ) : (
                    project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link project-link-secondary"
                      >
                        GitHub
                      </a>
                    )
                  )}
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
