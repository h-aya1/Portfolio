import { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar border-divider">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1 className="navbar-logo font-mono text-accent">
            HAYAT
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-desktop">
          <div className="navbar-links font-mono">
            <button
              onClick={() => scrollToSection('home')}
              className="navbar-link"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="navbar-link"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="navbar-link"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="navbar-link"
            >
              History
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="navbar-link text-accent"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="navbar-mobile-toggle">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-toggle-btn"
            aria-label="Toggle mobile menu"
          >
            <span className="toggle-icon"></span>
            <span className="toggle-icon"></span>
            <span className="toggle-icon"></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="navbar-mobile">
          <div className="mobile-links">
            <button
              onClick={() => scrollToSection('home')}
              className="mobile-link"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="mobile-link"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="mobile-link"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="mobile-link"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="mobile-link"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
