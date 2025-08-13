import { experience } from '../../data/experience.js';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      {/* Background decoration */}
      <div className="experience-bg-decoration"></div>
      
      <div className="experience-container">
        <div className="experience-header">
          <div className="experience-badge">
            <span className="badge-dot"></span>
            My Journey
          </div>
          <h2 className="experience-title">Work Experience</h2>
          <div className="experience-underline"></div>
          <p className="experience-description">
            My professional journey in web development and software engineering.
          </p>
        </div>

        <div className="experience-timeline">
          <div className="timeline-container">
            {experience.map((exp, index) => (
              <div key={exp.id} className="timeline-item">
                {/* Timeline line */}
                {index < experience.length - 1 && (
                  <div className="timeline-line"></div>
                )}
                
                <div className="timeline-content">
                  {/* Timeline dot */}
                  <div className="timeline-dot">
                    <div className="dot-inner"></div>
                    {/* Company icon */}
                    
                  </div>
                  
                  {/* Content */}
                  <div className="experience-card">
                    <div className="experience-header-content">
                      <h3 className="experience-role">{exp.title}</h3>
                      <span className="experience-period">
                        <span className="period-dot"></span>
                        {exp.period}
                      </span>
                    </div>
                    
                    <h4 className="experience-company">
                      <span className="company-location">📍</span>
                      {exp.company}
                    </h4>
                    
                    <ul className="experience-description-list">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="experience-description-item">
                          <span className="description-bullet"></span>
                          <span className="description-text">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="experience-cta">
            <div className="cta-card">
              <h3 className="cta-title">Ready for the next chapter?</h3>
              <p className="cta-description">I'm always looking for new opportunities to grow and contribute.</p>
              <a
                href="#contact"
                className="cta-button"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
