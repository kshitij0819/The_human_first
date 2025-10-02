import './WhyJoinUs.css';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';

const WhyJoinUs = () => {
  return (
    <div className="why-join">
      {/* Hero Section */}
      <section className="why-hero">
        <div className="container">
          <h1 className="why-hero__title">
            Why Join <span className="text-gradient">Us?</span>
          </h1>
          <p className="why-hero__subtitle">
            Discover what makes Human First a transformative community
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="why-benefits">
        <div className="container">
          <div className="benefits-grid">
            {/* Personal Growth */}
            <Card variant="elevated" className="benefit-card">
              <div className="benefit-icon benefit-icon--green">
                🌱
              </div>
              <h3 className="benefit-title">Personal Growth</h3>
              <p className="benefit-description">
                Develop the skills and practices that matter most for your well-being 
                and fulfillment in an increasingly complex world.
              </p>
              <ul className="benefit-list">
                <li>Stress management techniques that actually work</li>
                <li>Presence and mindfulness practices</li>
                <li>Emotional health and resilience building</li>
                <li>Self-awareness and personal development</li>
              </ul>
            </Card>

            {/* Connection */}
            <Card variant="elevated" className="benefit-card">
              <div className="benefit-icon benefit-icon--golden">
                🤝
              </div>
              <h3 className="benefit-title">Authentic Connection</h3>
              <p className="benefit-description">
                Build genuine relationships with people who value depth over surface, 
                substance over status, and authenticity over performance.
              </p>
              <ul className="benefit-list">
                <li>No masks, no pretense — just real people</li>
                <li>Safe space for vulnerability and honesty</li>
                <li>Meaningful friendships that go beyond networking</li>
                <li>Community that celebrates your whole self</li>
              </ul>
            </Card>

            {/* Contribution */}
            <Card variant="elevated" className="benefit-card">
              <div className="benefit-icon benefit-icon--teal">
                💡
              </div>
              <h3 className="benefit-title">Meaningful Contribution</h3>
              <p className="benefit-description">
                Be part of shaping solutions to humanity's most pressing challenges, 
                from mental health to technological ethics.
              </p>
              <ul className="benefit-list">
                <li>Collaborate on human-centered projects</li>
                <li>Influence the future of work and technology</li>
                <li>Share your unique gifts and perspectives</li>
                <li>Create lasting impact beyond yourself</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="why-testimonial">
        <div className="container">
          <div className="testimonial-content">
            <blockquote className="testimonial-quote">
              "Human First gave me something I didn't know I was missing — 
              a community where I can be fully myself, grow without judgment, 
              and contribute to something bigger than my own success."
            </blockquote>
            <cite className="testimonial-author">— Community Member</cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="why-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Begin Your Journey?</h2>
            <p className="cta-text">
              Join a community that values who you are, not just what you do.
            </p>
            <Link to="/get-involved">
              <Button variant="primary" size="large" className="glow-button">
                Join The Human First Club
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyJoinUs;
