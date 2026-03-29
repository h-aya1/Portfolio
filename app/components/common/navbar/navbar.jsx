import { useState, useEffect } from 'react';
import './navbar.css';

const NAV_ITEMS = [
  { id: 'home',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'projects',   label: 'Projects' },
  { id: 'experience', label: 'Experience' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [active, setActive]         = useState('home');
  const [progress, setProgress]     = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? (scrollTop / max) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'experience', 'contact'];
    const observers = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-container">
        <button className="navbar-logo" onClick={() => scrollToSection('home')}>
          HAYAT
        </button>

        <div className="navbar-desktop">
          <div className="navbar-links">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`navbar-link${active === id ? ' active' : ''}`}
              >
                {label}
              </button>
            ))}
            <button onClick={() => scrollToSection('contact')} className="navbar-link-cta">
              Contact
            </button>
          </div>
        </div>

        <div className="navbar-mobile-toggle">
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="mobile-toggle-btn"
            aria-label="Toggle menu"
          >
            <span className="toggle-icon" />
            <span className="toggle-icon" />
            <span className="toggle-icon" />
          </button>
        </div>
      </div>

      {/* Reading progress */}
      <div className="navbar-progress" style={{ width: `${progress}%` }} aria-hidden="true" />

      {isMenuOpen && (
        <div className="navbar-mobile">
          <div className="mobile-links">
            {[...NAV_ITEMS, { id: 'contact', label: 'Contact' }].map(({ id, label }) => (
              <button key={id} onClick={() => scrollToSection(id)} className="mobile-link">
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
