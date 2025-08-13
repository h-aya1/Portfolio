import { skills, languages } from '../../data/skills';
import './about.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* Background decoration */}
      <div className="about-bg-decoration"></div>
      
      <div className="about-container">
        <div className="about-header">
          <div className="about-badge">
            <span className="badge-dot"></span>
            About Me
          </div>
          <h2 className="about-title">A Little Bit About Me</h2>
          <div className="about-underline"></div>
        </div>

        <div className="about-content">
          {/* Bio */}
          <div className="about-bio-section">
            <div className="bio-card">
              <h3 className="bio-title">Who I Am</h3>
              <p className="bio-text">
                I am an aspiring front-end developer with hands-on experience in full-stack web development, 
                collaborative software projects, and academic projects. I have completed a front-end internship 
                at DevTech and am currently interning at Skylink Technologies, contributing to real-world applications. 
                I specialize in creating clean, responsive, and accessible interfaces that combine functionality 
                with great user experience.
              </p>
            </div>
            
            {/* Languages */}
            <div className="languages-card">
              <h4 className="languages-title">
                <span className="language-icon">🌍</span>
                Languages
              </h4>
              <div className="languages-grid">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="language-badge"
                  >
                    {lang.name} ({lang.level})
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="skills-section">
            <div className="skills-card">
              <h3 className="skills-title">
                <span className="skills-icon">⚡</span>
                Skills & Technologies
              </h3>
              
              {/* Skills by category */}
              <div className="skills-categories">
                {['Frontend', 'Backend', 'Mobile', 'Design', 'Tools'].map((category) => {
                  const categorySkills = skills.filter(skill => skill.category === category);
                  if (categorySkills.length === 0) return null;
                  
                  return (
                    <div key={category} className="skill-category">
                      <h4 className="category-title">
                        {category}
                      </h4>
                      <div className="skills-grid">
                        {categorySkills.map((skill, index) => (
                          <div
                            key={index}
                            className="skill-item"
                          >
                            <div className="skill-icon">{skill.icon}</div>
                            <h5 className="skill-name">
                              {skill.name}
                            </h5>
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
