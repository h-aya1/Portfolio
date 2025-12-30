import React from 'react';
import './hero.css';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text-section">
            <div className="hero-text-content">

              <h1 className="hero-title">
                Frontend Developer building <span className="text-accent">real-world systems</span> — with full-stack capability.
              </h1>

              <p className="hero-description text-secondary">
                I design modern web interfaces, build backend APIs when needed, and I’m expanding into mobile apps.
                Focused on clarity, scalability, and system-oriented solutions.
              </p>
            </div>

            <div className="hero-buttons">
              <button
                onClick={scrollToProjects}
                className="hero-btn hero-btn-primary"
              >
                View Work
              </button>

              <a
                href="#contact"
                className="hero-btn hero-btn-secondary"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
