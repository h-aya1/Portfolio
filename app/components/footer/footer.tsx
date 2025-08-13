import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Background decoration */}
      <div className="footer-bg-decoration"></div>
      
      <div className="footer-container">
        <div className="footer-content">
          {/* Copyright */}
          <div className="footer-copyright">
            <div className="footer-logo">
              <span className="logo-text">H</span>
            </div>
            <h3 className="footer-brand">Hayat</h3>
            <p className="footer-copyright-text">© 2025 Hayat. All rights reserved.</p>
            <p className="footer-tagline">Crafting digital experiences with passion and precision.</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="footer-links-title">Quick Links</h3>
            <div className="footer-links-list">
              <a
                href="https://github.com/h-aya1"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <div className="footer-link-icon">
                  <svg className="footer-icon-svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <span className="footer-link-text">GitHub</span>
              </a>
              
              <a
                href="mailto:hayata.rezak@gmail.com"
                className="footer-link"
              >
                <div className="footer-link-icon">
                  <svg className="footer-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="footer-link-text">Email</span>
              </a>
            </div>
          </div>

          {/* Back to Top */}
          <div className="footer-back-to-top">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="back-to-top-button"
            >
              <span className="button-text">
                Back to Top
              </span>
              <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-built-with">
            Built with React, Tailwind CSS, and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
