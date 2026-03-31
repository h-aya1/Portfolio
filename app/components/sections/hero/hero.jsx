import './hero.css';

const Hero = () => {
  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />

      <div className="hero-container">
        <h1 className="hero-headline">
          Crafting interfaces<br />
          that <em>think clearly</em>.
        </h1>

        <p className="hero-subtitle">
          Engineer by mind, developer by hand.
        </p>

        <div className="hero-buttons">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="hero-btn-primary"
          >
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

      <button className="hero-scroll-indicator" onClick={scrollDown} aria-label="Scroll down">
        <span className="hero-scroll-line" />
      </button>
    </section>
  );
};

export default Hero;
