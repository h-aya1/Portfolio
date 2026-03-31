import './footer.css';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="section-container">

        <div className="footer-main">
          <div className="footer-left">
            <span className="footer-logo">HAYAT</span>
            <p className="footer-tagline">Building things that work.</p>
          </div>

          <div className="footer-right">
            <a href="mailto:hayata.rezak@gmail.com" className="footer-social-link">Mail</a>
            <a href="https://github.com/h-aya1" target="_blank" rel="noopener noreferrer" className="footer-social-link">GitHub</a>
            <a href="https://www.linkedin.com/in/hayat-dari-759a1b30a/" target="_blank" rel="noopener noreferrer" className="footer-social-link">LinkedIn</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© {new Date().getFullYear()} · Made with Still Water</p>
          <button onClick={scrollToTop} className="footer-top-btn">
            Back to top
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 15l-6-6-6 6"/>
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
