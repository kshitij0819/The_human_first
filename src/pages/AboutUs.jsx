import './AboutUs.css';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__background">
          <div className="flowing-lines">
            <svg className="flow-svg" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
              <path className="flow-path flow-path-1" d="M0,400 Q300,200 600,400 T1200,400" />
              <path className="flow-path flow-path-2" d="M0,300 Q300,500 600,300 T1200,300" />
              <path className="flow-path flow-path-3" d="M0,500 Q300,300 600,500 T1200,500" />
            </svg>
          </div>
          <div className="connection-nodes">
            <div className="node node-1"></div>
            <div className="node node-2"></div>
            <div className="node node-3"></div>
            <div className="node node-4"></div>
            <div className="node node-5"></div>
          </div>
        </div>

        <div className="container">
          <div className="about-hero__content">
            <h1 className="about-hero__title">
              About <span className="text-gradient">The Human First Club</span>
            </h1>
            <p className="about-hero__subtitle">
              Navigating humanity in a fast-changing tech world
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="about-philosophy">
        <div className="container">
          <div className="philosophy-content">
            <h2 className="philosophy-title">Our Philosophy</h2>
            <p className="philosophy-text">
              In an era where technology advances at unprecedented speed, we believe in 
              anchoring ourselves to what makes us fundamentally human. We are not here 
              to resist progress, but to ensure that as we move forward, we carry with 
              us the essence of our humanity — our capacity for connection, empathy, 
              and meaningful presence.
            </p>
          </div>
        </div>
      </section>

      {/* Core Points Section */}
      <section className="about-points">
        <div className="container">
          <div className="points-grid">
            <div className="point-card">
              <div className="point-card__visual">
                <svg viewBox="0 0 100 100" className="point-icon">
                  <circle cx="50" cy="50" r="35" className="icon-circle" />
                  <path d="M50,30 L50,50 L65,65" className="icon-path" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="point-card__title">Connect with Ourselves</h3>
              <p className="point-card__description">
                Before we can truly connect with others, we must first understand and 
                be present with ourselves. We create space for self-reflection, 
                introspection, and authentic self-discovery.
              </p>
            </div>

            <div className="point-card">
              <div className="point-card__visual">
                <svg viewBox="0 0 100 100" className="point-icon">
                  <circle cx="35" cy="50" r="15" className="icon-circle" />
                  <circle cx="65" cy="50" r="15" className="icon-circle" />
                  <path d="M35,50 L65,50" className="icon-path icon-path-pulse" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="point-card__title">Belong with Empathy</h3>
              <p className="point-card__description">
                True belonging comes from being seen, heard, and understood. We foster 
                a community where empathy is not just encouraged but practiced, where 
                vulnerability is strength, and authenticity is celebrated.
              </p>
            </div>

            <div className="point-card">
              <div className="point-card__visual">
                <svg viewBox="0 0 100 100" className="point-icon">
                  <path d="M30,70 L50,30 L70,70" className="icon-path" strokeLinecap="round" />
                  <circle cx="50" cy="30" r="8" className="icon-circle" />
                </svg>
              </div>
              <h3 className="point-card__title">Uplift Each Other</h3>
              <p className="point-card__description">
                We rise by lifting others. Our community is built on mutual support, 
                encouragement, and the genuine desire to see each other thrive — not 
                just professionally, but as whole human beings.
              </p>
            </div>

            <div className="point-card">
              <div className="point-card__visual">
                <svg viewBox="0 0 100 100" className="point-icon">
                  <circle cx="50" cy="50" r="30" className="icon-circle" />
                  <circle cx="50" cy="50" r="20" className="icon-circle icon-circle-pulse" />
                  <circle cx="50" cy="50" r="10" className="icon-circle" />
                </svg>
              </div>
              <h3 className="point-card__title">Contribute to Our Future</h3>
              <p className="point-card__description">
                Every interaction, every moment of genuine connection, contributes to 
                shaping a more human-centered future. Together, we're building a world 
                where technology serves humanity, not the other way around.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise/Manifesto Section */}
      <section className="about-promise">
        <div className="promise-background">
          <div className="promise-glow"></div>
        </div>
        <div className="container">
          <div className="promise-content">
            <h2 className="promise-title">Our Promise</h2>
            <div className="promise-statement">
              <p className="promise-text">
                We are not a network.<br />
                We are not an event.<br />
                <strong>We are a movement</strong> towards deeper presence, 
                emotional well-being, and meaningful collaboration.
              </p>
            </div>
            <div className="promise-cta">
              <Link to="/get-involved">
                <Button variant="primary" size="large" className="glow-button">
                  Join Our Movement
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Visualization */}
      <section className="about-values-visual">
        <div className="container">
          <div className="values-visual-content">
            <h2 className="values-visual-title">The Human First Way</h2>
            <div className="connection-visual">
              <svg viewBox="0 0 600 400" className="connection-svg">
                {/* Central node */}
                <circle cx="300" cy="200" r="40" className="central-node" />
                <text x="300" y="210" textAnchor="middle" className="node-text">You</text>
                
                {/* Surrounding nodes */}
                <circle cx="150" cy="100" r="30" className="outer-node" />
                <text x="150" y="105" textAnchor="middle" className="node-text-small">Self</text>
                
                <circle cx="450" cy="100" r="30" className="outer-node" />
                <text x="450" y="105" textAnchor="middle" className="node-text-small">Others</text>
                
                <circle cx="150" cy="300" r="30" className="outer-node" />
                <text x="150" y="305" textAnchor="middle" className="node-text-small">Growth</text>
                
                <circle cx="450" cy="300" r="30" className="outer-node" />
                <text x="450" y="305" textAnchor="middle" className="node-text-small">Future</text>
                
                {/* Connecting lines */}
                <line x1="300" y1="200" x2="150" y2="100" className="connection-line" />
                <line x1="300" y1="200" x2="450" y2="100" className="connection-line" />
                <line x1="300" y1="200" x2="150" y2="300" className="connection-line" />
                <line x1="300" y1="200" x2="450" y2="300" className="connection-line" />
                
                {/* Outer connections */}
                <line x1="150" y1="100" x2="450" y2="100" className="connection-line connection-line-subtle" />
                <line x1="150" y1="300" x2="450" y2="300" className="connection-line connection-line-subtle" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
