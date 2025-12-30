import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '~/config/emailjs';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: emailjsConfig.recipientEmail,
        },
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-section">
      {/* Background decoration */}
      <div className="contact-bg-decoration"></div>

      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-badge">
            <span className="badge-dot"></span>
            Let's Connect
          </div>
          <h2 className="contact-title">Get In Touch</h2>
          <div className="contact-underline"></div>
          <p className="contact-description">
            I'm always interested in hearing about new opportunities and exciting projects.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info-section">
            <div className="contact-intro-card">
              <h3 className="contact-intro-title">
                <span className="contact-intro-icon">💬</span>
                Let's Connect
              </h3>
              <p className="contact-intro-text">
                Whether you have a question about my work, want to discuss a potential project,
                or just want to say hello, I'd love to hear from you.
              </p>
            </div>

            <div className="contact-methods">
              <div className="contact-method-card">
                <div className="contact-method-icon">
                  <svg className="contact-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="contact-method-content">
                  <h4 className="contact-method-title">Email</h4>
                  <a
                    href="mailto:hayata.rezak@gmail.com"
                    className="contact-method-link"
                  >
                    hayata.rezak@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-method-card">
                <div className="contact-method-icon">
                  <svg className="contact-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div className="contact-method-content">
                  <h4 className="contact-method-title">GitHub</h4>
                  <a
                    href="https://github.com/h-aya1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-method-link"
                  >
                    github.com/h-aya1
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="contact-form-card">
              <h3 className="contact-form-title">
                <span className="contact-form-icon">✉️</span>
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="form-textarea"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="form-submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="form-success-message">
                    ✅ Thank you for your message! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="form-error-message">
                    ❌ Failed to send message. Please try again or contact me directly at hayata.rezak@gmail.com
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Contact;
