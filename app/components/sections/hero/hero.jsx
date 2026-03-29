import { useEffect, useState } from 'react';
import './hero.css';

const ROLES = [
  'Frontend Developer',
  'Full-Stack Builder',
  'UI/UX Thinker',
  'System Architect',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed]  = useState('');
  const [deleting, setDeleting]    = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout;

    if (!deleting && displayed.length < currentRole.length) {
      timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      {/* Ambient background blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />

      {/* Floating code decoration */}
      <div className="hero-code-float" aria-hidden="true">
        <span className="hero-code-line"><span className="hero-code-kw">const</span> hayat = {'{'}</span>
        <span className="hero-code-line">  role: <span className="hero-code-str">"developer"</span>,</span>
        <span className="hero-code-line">  focus: <span className="hero-code-str">"clarity"</span>,</span>
        <span className="hero-code-line">  status: <span className="hero-code-accent">"available"</span></span>
        <span className="hero-code-line">{'}'}</span>
      </div>

      <div className="hero-container">
        {/* Main headline */}
        <h1 className="hero-headline">
          Crafting interfaces<br />
          that <em>think clearly</em>.
        </h1>

        {/* Animated role */}
        <p className="hero-role">
          <span className="hero-role-label">I am a</span>
          {' '}
          <span className="hero-role-typed">{displayed}</span>
          <span className="hero-cursor">|</span>
        </p>

        {/* Description */}
        <p className="hero-description">
          Frontend-first, full-stack capable. I build production systems that are
          clean by design, scalable by nature, and human at the core.
        </p>

        {/* CTA buttons */}
        <div className="hero-buttons">
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="hero-btn-primary">
            View Work
          </button>
          <a href="#contact" className="hero-btn-secondary">
            Let's Talk
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button className="hero-scroll-indicator" onClick={scrollDown} aria-label="Scroll down">
        <span className="hero-scroll-line" />
      </button>
    </section>
  );
};

export default Hero;
