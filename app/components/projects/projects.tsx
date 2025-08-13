import { projects } from '~/data/projects.js';
import './projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      {/* Background decoration */}
      <div className="projects-bg-decoration"></div>
      
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-badge">
            <span className="badge-dot"></span>
            My Work
          </div>
          <h2 className="projects-title">Selected Works</h2>
          <div className="projects-underline"></div>
          <p className="projects-description">
            Here are some of the projects I've worked on, showcasing my skills and passion for web development.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
            >
              {/* Project Image */}
              <div className="project-image">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={`${project.title} screenshot`}
                    className="project-screenshot"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = target.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                ) : null}
                
                {/* Fallback placeholder */}
                <div className={`project-placeholder ${project.image ? 'hidden' : ''}`}>
                  <div className="project-icon">🖥️</div>
                  <p className="project-title-text">{project.title}</p>
                  <p className="project-subtext">Project Screenshot</p>
                </div>
                
                {/* Status badge */}
                {project.status && (
                  <div className="project-status">
                    <span className="status-badge">
                      {project.status}
                    </span>
                  </div>
                )}
                
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-name">
                    {project.title}
                  </h3>
                  <p className="project-description-text">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="technology-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Note */}
                {project.note && (
                  <div className="project-note">
                    <p className="note-text">
                      {project.note}
                    </p>
                  </div>
                )}

                {/* Project Links */}
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-secondary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="projects-cta">
          <div className="cta-card">
            <h3 className="cta-title">Interested in working together?</h3>
            <p className="cta-description">Let's discuss your next project and bring your ideas to life.</p>
            <a
              href="#contact"
              className="cta-button"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
