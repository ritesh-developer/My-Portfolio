import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_3m1zo9v';
  const EMAILJS_TEMPLATE_ID = 'template_l8xogxj';
  const EMAILJS_PUBLIC_KEY = '4slgb-pcAKZvO1rcH';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Send email using EmailJS
      const templateParams = {
        name: formData.name,           // Changed from 'from_name' to 'name'
        email: formData.email,         // Changed from 'from_email' to 'email'
        message: formData.message,
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS Result:', result);

      if (result.status === 200 || result.text === 'OK') {
        setStatus({
          type: 'success',
          message: 'Thank you for your message! I will get back to you soon.',
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      console.error('Error details:', error.text || error.message);
      
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly at riteshraj.developer@gmail.com',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <section className="contact-header">
        <h1>Get In Touch</h1>
        <p>Have a question or want to work together? I'd love to hear from you!</p>
      </section>

      <div className="contact-info-box">
        <p>📧 <strong>Email:</strong> riteshraj.developer@gmail.com</p>
        <p>📱 <strong>Phone:</strong> +91 9060025222</p>
        <p>💼 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ritesh8/" target="_blank" rel="noopener noreferrer">linkedin.com/in/ritesh8</a></p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            placeholder="Your message (minimum 10 characters)"
            minLength="10"
            disabled={isSubmitting}
          />
        </div>

        {status.message && (
          <div className={`form-status ${status.type}`}>
            {status.message}
          </div>
        )}

        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

export default Contact;
