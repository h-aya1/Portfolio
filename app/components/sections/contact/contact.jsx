import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '~/config/emailjs';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        { from_name: formData.name, from_email: formData.email, message: formData.message, to_email: emailjsConfig.recipientEmail },
        emailjsConfig.publicKey
      );
      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">

        <div className="contact-header" data-reveal style={{ '--delay': 0 }}>
          <span className="section-label">Connect</span>
          <h2 className="section-title">Let's start a conversation.</h2>
          <p className="contact-subtitle">
            Whether you have a project in mind or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info" data-reveal style={{ '--delay': 100 }}>
            <a href="mailto:hayata.rezak@gmail.com" className="contact-method glass-card">
              <div className="method-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="method-text">
                <span className="method-label font-mono">Mail</span>
                <span className="method-link">hayata.rezak@gmail.com</span>
              </div>
            </a>

            <a href="https://github.com/h-aya1" target="_blank" rel="noopener noreferrer" className="contact-method glass-card">
              <div className="method-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
              </div>
              <div className="method-text">
                <span className="method-label font-mono">GitHub</span>
                <span className="method-link">h-aya1</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/hayat-dari-759a1b30a/" target="_blank" rel="noopener noreferrer" className="contact-method glass-card">
              <div className="method-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div className="method-text">
                <span className="method-label font-mono">LinkedIn</span>
                <span className="method-link">Hayat Dari</span>
              </div>
            </a>

          </div>

          <div className="contact-form-wrapper glass-card" data-reveal style={{ '--delay': 200 }}>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label font-mono">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="form-input" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label font-mono">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" placeholder="hello@example.com" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label font-mono">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="form-textarea" placeholder="Tell me about your project..." />
              </div>

              <button type="submit" className="form-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </button>

              {submitStatus === 'success' && <p className="status-msg success">Message sent. I'll get back to you soon.</p>}
              {submitStatus === 'error'   && <p className="status-msg error">Something went wrong. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
