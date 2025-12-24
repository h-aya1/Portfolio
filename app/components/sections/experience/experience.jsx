import { experience } from '~/data/experience.js';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-header">
          <div className="experience-badge font-mono">
            <span className="badge-dot"></span>
            History
          </div>
          <h2 className="experience-title">Previous Experience</h2>
        </div>

        <div className="experience-timeline">
          {experience.map((item, _index) => (
            <div key={item.id} className="timeline-item">
              <div className="experience-card card-system">
                <div className="experience-meta">
                  <span className="experience-period font-mono text-accent">{item.period}</span>
                </div>

                <h3 className="experience-role">{item.title}</h3>
                <h4 className="experience-company font-mono text-secondary">{item.company}</h4>

                <div className="experience-description mt-6">
                  {item.description.map((desc, i) => (
                    <div key={i} className="description-item">
                      <p className="description-text text-secondary">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
