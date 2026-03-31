import { experience } from '~/data/experience.js';
import './experience.css';

const TYPES = ['Full-Time', 'Internship'];

const Experience = () => (
  <section id="experience" className="experience-section">
    <div className="section-container">

      <div className="experience-header" data-reveal style={{ '--delay': 0 }}>
        <span className="section-label">History</span>
        <h2 className="section-title">Where I've worked.</h2>
      </div>

      <div className="experience-list">
        {experience.map((item, index) => (
          <div
            key={item.id}
            className="experience-entry"
            data-reveal
            style={{ '--delay': 80 + index * 120 }}
          >
            <div className="experience-left">
              <span className="experience-period">{item.period}</span>
              <span className="experience-type">{TYPES[index] ?? 'Contract'}</span>
            </div>

            <div className="experience-right">
              <div className="experience-title-row">
                <h3 className="experience-role">{item.title}</h3>
                <span className="experience-company">{item.company}</span>
              </div>
              <ul className="experience-bullets">
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Experience;
