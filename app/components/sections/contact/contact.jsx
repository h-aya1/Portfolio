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
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">

        <div className="contact-top" data-reveal style={{ '--delay': 0 }}>
          <div className="contact-heading">
            <span className="section-label">Connect</span>
            <h2 className="section-title">Got something in mind?</h2>
            <p className="contact-sub">If it's worth building, it's worth talking about.</p>
          </div>

          <div className="contact-links">
            <a href="mailto:hayata.rezak@gmail.com" className="contact-link">
              <span className="contact-link-label">Mail</span>
              <span className="contact-link-value">hayata.rezak@gmail.com</span>
              <span className="contact-link-arrow">↗</span>
            </a>
            <a href="https://github.com/h-aya1" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-link-label">GitHub</span>
              <span className="contact-link-value">h-aya1</span>
              <span className="contact-link-arrow">↗</span>
            </a>
            <a href="https://www.linkedin.com/in/hayat-dari-759a1b30a/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-link-label">LinkedIn</span>
              <span className="contact-link-value">Hayat Dari</span>
              <span className="contact-link-arrow">↗</span>
            </a>
          </div>
        </div>

        <div className="contact-form-wrapper glass-card" data-reveal style={{ '--delay': 120 }}>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="form-input" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" placeholder="hello@example.com" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="form-textarea" placeholder="What's on your mind?" />
            </div>

            <div className="form-footer">
              <button type="submit" className="form-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send'}
                {!isSubmitting && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </button>
              {submitStatus === 'success' && <p className="status-msg success">Sent. I'll get back to you.</p>}
              {submitStatus === 'error'   && <p className="status-msg error">Something went wrong. Try again.</p>}
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
