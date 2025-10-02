import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Contact Section */}
      <section className="footer-contact">
        <div className="container">
          <h2 className="footer-contact__title">
            Let's Stay Human, <span className="text-gradient">Together</span>
          </h2>
          
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h3 className="contact-subtitle">Get in Touch</h3>
              <form className="contact-form">
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    placeholder="Your Message" 
                    rows="5"
                    className="form-input form-textarea"
                  ></textarea>
                </div>
                <button type="submit" className="form-submit">
                  Send Message
                </button>
              </form>
            </div>

            {/* Newsletter Signup */}
            <div className="newsletter-wrapper">
              <h3 className="contact-subtitle">Monthly Reflections</h3>
              <p className="newsletter-description">
                Reflections & Stories from the Path — delivered monthly to your inbox.
              </p>
              <form className="newsletter-signup">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-button">
                  Subscribe
                </button>
              </form>

              {/* Social Links */}
              <div className="social-links">
                <h4 className="social-title">Connect With Us</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="YouTube">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="Spotify">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom__content">
            <div className="footer-brand">
              <span className="footer-logo">The Human First <span className="text-gradient">Club</span></span>
              <p className="footer-tagline">Staying human in the age of AI</p>
            </div>
            
            <nav className="footer-nav">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/what-we-do" className="footer-link">What We Do</Link>
              <Link to="/events" className="footer-link">Events</Link>
              <Link to="/blog" className="footer-link">Blog</Link>
              <Link to="/get-involved" className="footer-link">Get Involved</Link>
            </nav>

            <div className="footer-copyright">
              <p>&copy; 2025 Human First. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
