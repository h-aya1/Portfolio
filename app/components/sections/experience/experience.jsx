import { experience } from '~/data/experience.js';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">

        <div className="experience-header" data-reveal style={{ '--delay': 0 }}>
          <span className="section-label">History</span>
          <h2 className="section-title">Professional Path</h2>
        </div>

        <div className="experience-timeline">
          {experience.map((item, index) => (
            <div
              key={item.id}
              className="timeline-item"
              data-reveal
              style={{ '--delay': 120 + index * 150 }}
            >
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot" />
                {index !== experience.length - 1 && <div className="timeline-connector" />}
              </div>

              <div className="experience-content glass-card">
                <div className="experience-meta">
                  <span className="experience-period font-mono">{item.period}</span>
                  <span className="experience-company-mobile font-mono">{item.company}</span>
                </div>

                <div className="experience-title-row">
                  <h3 className="experience-role">{item.title}</h3>
                  <span className="experience-company-desktop font-mono">{item.company}</span>
                </div>

                <ul className="experience-description">
                  {item.description.map((desc, i) => (
                    <li key={i} className="description-item">
                      <p className="description-text">{desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
