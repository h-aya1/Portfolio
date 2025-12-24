import './footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer border-t border-divider">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand-section">
            <h2 className="footer-brand font-mono text-accent">HAYAT</h2>
            <p className="footer-tagline text-secondary">
              Frontend Developer building real-world systems.
            </p>
          </div>

          <div className="footer-links-section">
            <h3 className="footer-links-title font-mono">Connect</h3>
            <div className="footer-links-list">
              <a href="https://github.com/h-aya1" target="_blank" rel="noopener noreferrer" className="footer-link text-secondary">
                GitHub
              </a>
              <a href="mailto:contact@example.com" className="footer-link text-secondary">
                Email
              </a>
            </div>
          </div>

          <div className="footer-action-section">
            <button
              onClick={scrollToTop}
              className="back-to-top-button font-mono"
            >
              Back to Top
            </button>
          </div>
        </div>

        <div className="footer-bottom border-t border-divider">
          <p className="footer-copyright-text font-mono text-secondary">
            © {new Date().getFullYear()} — Built with React & Quiet Confidence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
