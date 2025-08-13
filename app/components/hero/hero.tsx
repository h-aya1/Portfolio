import React from 'react';
import './hero.css';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background decorative elements */}
      <div className="hero-bg-decoration">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text-section">
            <div className="hero-text-content">
              <div className="hero-badge">
                <span className="badge-dot"></span>
                Web Developer
              </div>

              <h1 className="hero-title">
                Hi, I'm <span className="hero-name">Hayat</span>
              </h1>

              <h2 className="hero-subtitle">
                Front-End Developer & Web Development  Enthusiast
              </h2>

              <p className="hero-description">
                I craft elegant, responsive web experiences with clean code and thoughtful design. 
                Transforming ideas into beautiful, functional digital solutions.
              </p>
            </div>

            <div className="hero-buttons">
              <button
                onClick={scrollToProjects}
                className="hero-btn hero-btn-primary"
              >
                View My Work
              </button>

              <a
                href="#contact"
                className="hero-btn hero-btn-secondary"
              >
                Get In Touch
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </div>

          {/* Hero Avatar */}
          <div className="hero-avatar-section">
            <div className="hero-avatar-container">
              <div className="hero-avatar-main">
                <div className="hero-avatar-inner">
                  <img
                    src="app/assets/avatar.jpg"
                    alt="Hayat Avatar"
                    className="hero-avatar-image"
                  />
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="floating-element element-1"></div>
              <div className="floating-element element-2"></div>
              <div className="floating-element element-3"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
