import { skills, languages } from '~/data/skills';
import './about.css';

const CATEGORY_COLORS = {
  Frontend: 'sage',
  Backend:  'rose',
  Mobile:   'warm',
  Design:   'dim',
  Tools:    'dim',
};

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">

        <div className="about-header" data-reveal style={{ '--delay': 0 }}>
          <span className="section-label">About</span>
          <h2 className="section-title">The person behind the code.</h2>
        </div>

        <div className="about-content">
          {/* Bio */}
          <div className="about-bio">
            <p className="about-bio-text">
              I build across the full stack: web, mobile, and everything in between.
              I care less about titles and more about whether the thing actually works.
            </p>
            <p className="about-bio-text">
              My work spans internal dashboards, client-facing platforms, and API-driven systems.
              Whatever the project needs, I figure it out and ship it.
            </p>

            <div className="about-languages">
              <span className="about-languages-label">Languages</span>
              <div className="about-languages-list">
                {languages.map((lang) => (
                  <span key={lang.name} className="about-lang-pill">
                    {lang.name} <span className="about-lang-level">· {lang.level}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="about-divider" aria-hidden="true" />

          {/* Skills */}
          <div className="about-skills">
            {['Frontend', 'Backend', 'Mobile', 'Design', 'Tools'].map((cat) => {
              const catSkills = skills.filter((s) => s.category === cat);
              if (!catSkills.length) return null;
              return (
                <div key={cat} className="about-skill-group">
                  <span className={`about-cat-label about-cat-${CATEGORY_COLORS[cat]}`}>{cat}</span>
                  <div className="about-skill-pills">
                    {catSkills.map((skill) => (
                      <span key={skill.name} className={`about-skill-pill about-skill-pill-${CATEGORY_COLORS[cat]}`}>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
