import { skills, languages } from '~/data/skills';
import './about.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <div className="about-badge font-mono">
            <span className="badge-dot"></span>
            About
          </div>
          <h2 className="about-title">Professional Identity</h2>
        </div>

        <div className="about-content">
          <div className="about-bio-section">
            <div className="bio-card card-system">
              <h3 className="bio-title">The Approach</h3>
              <p className="bio-text text-secondary">
                I specialize in building complex, real-world systems with a focus on Frontend excellence.
                My experience spans from designing intuitive internal dashboards to architecting full-stack API integrations.
                I believe in "Quiet Confidence" — let the system's performance and clarity speak for itself.
              </p>
              <div className="bio-subtext mt-4">
                <p className="text-secondary">
                  Currently expanding my expertise into <span className="text-accent font-mono">Mobile/App Development</span>
                  to provide seamless cross-platform experiences.
                </p>
              </div>
            </div>

            <div className="languages-card card-system">
              <h4 className="languages-title font-mono">
                Languages
              </h4>
              <div className="languages-grid">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="language-badge font-mono"
                  >
                    {lang.name} — {lang.level}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="skills-section">
            <div className="skills-card card-system">
              <h3 className="skills-title font-mono">Technical Stack</h3>

              <div className="skills-categories">
                {['Frontend', 'Backend', 'Mobile', 'Tools'].map((category) => {
                  const categorySkills = skills.filter(skill => skill.category === category);
                  if (categorySkills.length === 0) return null;

                  return (
                    <div key={category} className="skill-category">
                      <h4 className="category-title font-mono text-accent">
                        {category}
                      </h4>
                      <div className="skills-grid">
                        {categorySkills.map((skill, index) => (
                          <div
                            key={index}
                            className="skill-item font-mono"
                          >
                            <span className="skill-name">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
