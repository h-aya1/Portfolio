import './footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo font-mono">H·AYAT</h2>
            <p className="footer-tagline">
              Frontend-first developer building quiet, <br /> 
              thoughtful systems for the modern web.
            </p>
          </div>

          <nav className="footer-nav">
            <div className="footer-nav-col">
              <span className="footer-label font-mono">General</span>
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#projects" className="footer-link">Projects</a>
            </div>
            <div className="footer-nav-col">
              <span className="footer-label font-mono">Social</span>
              <a href="https://github.com/h-aya1" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
              <a href="https://www.linkedin.com/in/hayat-dari-759a1b30a/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              <a href="mailto:hayata.rezak@gmail.com" className="footer-link">Email</a>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright font-mono">
            © {new Date().getFullYear()} — Made with Still Water
          </p>
          <button onClick={scrollToTop} className="footer-top-btn font-mono">
            Top <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6"/></svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
