import './GetInvolved.css';
import Button from '../components/Button';
import Card from '../components/Card';

const GetInvolved = () => {
  return (
    <div className="get-involved">
      {/* Hero Section */}
      <section className="involved-hero">
        <div className="container">
          <h1 className="involved-hero__title">
            Get <span className="text-gradient">Involved</span>
          </h1>
          <p className="involved-hero__subtitle">
            Choose your path to being part of the movement
          </p>
        </div>
      </section>

      {/* Ways to Join */}
      <section className="involved-ways">
        <div className="container">
          <div className="ways-grid">
            {/* Become a Member */}
            <Card variant="accent" className="way-card">
              <div className="way-card__icon">👥</div>
              <h3 className="way-card__title">Become a Member</h3>
              <p className="way-card__description">
                Join our community and gain access to all circles, events, and resources. 
                Connect with like-minded individuals who value authentic human connection.
              </p>
              <ul className="way-card__benefits">
                <li>Access to all community circles (online & offline)</li>
                <li>Monthly group calls and workshops</li>
                <li>Private community platform</li>
                <li>Early access to events and retreats</li>
                <li>Resource library and exclusive content</li>
              </ul>
              <div className="way-card__cta">
                <Button variant="primary" size="large" className="glow-button-teal">
                  Join as a Member
                </Button>
              </div>
            </Card>

            {/* Collaborate on Projects */}
            <Card variant="elevated" className="way-card">
              <div className="way-card__icon">🤝</div>
              <h3 className="way-card__title">Collaborate on Projects</h3>
              <p className="way-card__description">
                Have an idea for a human-centered project? Want to co-create solutions 
                to meaningful challenges? Let's build something together.
              </p>
              <ul className="way-card__benefits">
                <li>Propose and lead community projects</li>
                <li>Find collaborators for your initiatives</li>
                <li>Access to mentorship and guidance</li>
                <li>Platform to share your work</li>
                <li>Community support and resources</li>
              </ul>
              <div className="way-card__cta">
                <Button variant="beige" size="large" className="glow-button-beige">
                  Start Collaborating
                </Button>
              </div>
            </Card>

            {/* Support as a Partner */}
            <Card variant="glass" className="way-card">
              <div className="way-card__icon">🌟</div>
              <h3 className="way-card__title">Support as a Partner</h3>
              <p className="way-card__description">
                Organizations and leaders who believe in our mission can partner with us 
                to amplify impact and create meaningful change together.
              </p>
              <ul className="way-card__benefits">
                <li>Co-host events and initiatives</li>
                <li>Sponsor community programs</li>
                <li>Access to our network for hiring/collaboration</li>
                <li>Brand alignment with human-first values</li>
                <li>Custom partnership opportunities</li>
              </ul>
              <div className="way-card__cta">
                <Button variant="secondary" size="large">
                  Explore Partnership
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="involved-final-cta">
        <div className="container">
          <div className="final-cta-content">
            <h2 className="final-cta__title">
              Ready to Make a Difference?
            </h2>
            <p className="final-cta__text">
              Every journey begins with a single step. Take yours today.
            </p>
            <Button variant="primary" size="large" className="glow-button-teal">
              Be Part of the Movement →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
