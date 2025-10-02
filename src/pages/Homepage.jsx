import './Homepage.css';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="homepage-hero">
        <div className="homepage-hero__background">
          <div className="hero-pattern"></div>
          <div className="hero-glow hero-glow--1"></div>
          <div className="hero-glow hero-glow--2"></div>
          <div className="hero-silhouette hero-silhouette--1"></div>
          <div className="hero-silhouette hero-silhouette--2"></div>
        </div>
        
        <div className="homepage-hero__content">
          <h1 className="homepage-hero__headline">
            Staying Human in the Age of <span className="text-gradient">AI</span>
          </h1>
          
          <p className="homepage-hero__subheadline">
            A community built on connection, emotional safety, and real presence.
          </p>
          
          <div className="homepage-hero__cta">
            <Link to="/get-involved">
              <Button variant="primary" size="large" className="glow-button">
                Join the Movement
              </Button>
            </Link>
            <Link to="/what-we-do">
              <Button variant="beige" size="large" className="glow-button-beige">
                Discover Our Vision
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Statement Section */}
      <section className="homepage-intro">
        <div className="container">
          <div className="homepage-intro__content">
            <p className="homepage-intro__text">
              At <strong>The Human First Club</strong>, we believe that before we are entrepreneurs, 
              creators, or professionals, we are <em>human beings</em>. This community is a 
              space to connect, reflect, and grow — <span className="text-gradient">together</span>.
            </p>
          </div>
        </div>
      </section>
      <section className="homepage-values">
        <div className="container">
          <h2 className="homepage-values__title">Our Foundation</h2>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-card__icon">🤝</div>
              <h3 className="value-card__title">Connection</h3>
              <p className="value-card__description">
                Building genuine relationships that transcend digital boundaries and foster real human bonds.
              </p>
            </div>

            <div className="value-card">
              <div className="value-card__icon">🛡️</div>
              <h3 className="value-card__title">Emotional Safety</h3>
              <p className="value-card__description">
                Creating a space where vulnerability is welcomed and authenticity is celebrated.
              </p>
            </div>

            <div className="value-card">
              <div className="value-card__icon">✨</div>
              <h3 className="value-card__title">Real Presence</h3>
              <p className="value-card__description">
                Being fully present with each other, beyond screens and notifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Call Section */}
      <section className="homepage-call">
        <div className="container">
          <div className="homepage-call__content">
            <h2 className="homepage-call__title">
              Ready to Reconnect with Your Humanity?
            </h2>
            <p className="homepage-call__text">
              Join a community that values who you are, not just what you do.
            </p>
            <Link to="/get-involved">
              <Button variant="primary" size="large" className="glow-button">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
