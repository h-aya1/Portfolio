import { skills, languages } from '~/data/skills';
import './about.css';

const CATEGORY_COLORS = {
  Frontend: 'sage',
  Backend:  'rose',
  Mobile:   'warm',
  Design:   'dim',
  Tools:    'dim',
};

const STATS = [
  { value: '3+', label: 'Years experience' },
  { value: '∞',  label: 'Things to learn' },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">

        <div className="about-header" data-reveal style={{ '--delay': 0 }}>
          <span className="section-label">About</span>
          <h2 className="section-title">The person behind the code.</h2>
        </div>

        <div className="about-stats" data-reveal style={{ '--delay': 100 }}>
          {STATS.map((s) => (
            <div key={s.label} className="about-stat">
              <span className="about-stat-value">{s.value}</span>
              <span className="about-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="about-content">
          <div className="about-bio-col" data-reveal style={{ '--delay': 180 }}>
            <div className="about-bio-card glass-card">
              <h3 className="about-bio-title">The Approach</h3>
              <p className="about-bio-text">
                I specialize in building complex, real-world systems with a focus on Frontend excellence.
                My experience spans from designing intuitive internal dashboards to architecting full-stack API integrations.
              </p>
              <p className="about-bio-text" style={{ marginTop: '1rem' }}>
                I believe in <em className="about-em">"Quiet Confidence"</em> — let the system's performance and clarity speak for itself.
                Currently expanding into <span className="text-accent about-mono">Mobile / App Development</span>.
              </p>

              <div className="about-languages">
                <span className="about-languages-label">Languages</span>
                <div className="about-languages-list">
                  {languages.map((lang) => (
                    <span key={lang.name} className="about-lang-pill">
                      {lang.name} <span className="about-lang-level">— {lang.level}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="about-skills-col" data-reveal style={{ '--delay': 280 }}>
            <div className="glass-card about-skills-card">
              <h3 className="about-skills-title">Technical Stack</h3>
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
      </div>
    </section>
  );
};

export default About;
