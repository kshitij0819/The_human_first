import './Events.css';
import Button from '../components/Button';

const Events = () => {
  return (
    <div className="events">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="container">
          <h1 className="events-hero__title">
            <span className="text-gradient">Events</span> & Gatherings
          </h1>
          <p className="events-hero__subtitle">
            Where connection happens and community comes alive
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="events-upcoming">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          
          <div className="timeline">
            <div className="timeline-line"></div>
            
            <div className="event-card event-card--upcoming">
              <div className="event-card__date">
                <span className="date-month">Mar</span>
                <span className="date-day">15</span>
              </div>
              <div className="event-card__content">
                <div className="event-card__image">
                  <div className="image-placeholder">
                    <span className="image-icon">🔄</span>
                  </div>
                </div>
                <h3 className="event-card__title">Human First Circles</h3>
                <p className="event-card__description">
                  Monthly gathering for deep conversation and authentic connection. 
                  Join us online for an evening of meaningful dialogue.
                </p>
                <div className="event-card__meta">
                  <span className="meta-item">📍 Online</span>
                  <span className="meta-item">⏰ 7:00 PM IST</span>
                </div>
                <Button variant="primary" size="small">Register Now</Button>
              </div>
            </div>

            <div className="event-card event-card--upcoming">
              <div className="event-card__date">
                <span className="date-month">Apr</span>
                <span className="date-day">08</span>
              </div>
              <div className="event-card__content">
                <div className="event-card__image">
                  <div className="image-placeholder">
                    <span className="image-icon">✍️</span>
                  </div>
                </div>
                <h3 className="event-card__title">Experiential Poetry Session</h3>
                <p className="event-card__description">
                  An immersive evening of spoken word, storytelling, and creative expression. 
                  Share your voice or simply listen and be moved.
                </p>
                <div className="event-card__meta">
                  <span className="meta-item">📍 Bangalore</span>
                  <span className="meta-item">⏰ 6:30 PM IST</span>
                </div>
                <Button variant="primary" size="small">Register Now</Button>
              </div>
            </div>

            <div className="event-card event-card--upcoming">
              <div className="event-card__date">
                <span className="date-month">Jun</span>
                <span className="date-day">20-22</span>
              </div>
              <div className="event-card__content">
                <div className="event-card__image">
                  <div className="image-placeholder">
                    <span className="image-icon">🏔️</span>
                  </div>
                </div>
                <h3 className="event-card__title">Annual Retreat</h3>
                <p className="event-card__description">
                  Three days of deep connection, reflection, and renewal in nature. 
                  Limited spots available for this transformative experience.
                </p>
                <div className="event-card__meta">
                  <span className="meta-item">📍 Himachal Pradesh</span>
                  <span className="meta-item">⏰ 3 Days</span>
                </div>
                <Button variant="beige" size="small">Early Bird Registration</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Highlights */}
      <section className="events-past">
        <div className="container">
          <h2 className="section-title">Past Highlights</h2>
          
          <div className="past-events-grid">
            <div className="past-event-card">
              <div className="past-event__image">
                <div className="image-placeholder image-placeholder--past">
                  <span className="image-icon">🌴</span>
                </div>
                <div className="image-overlay"></div>
              </div>
              <div className="past-event__content">
                <span className="past-event__date">January 2025</span>
                <h3 className="past-event__title">Kerala D2C Gathering</h3>
                <p className="past-event__description">
                  A weekend of connection with entrepreneurs and creators in God's Own Country. 
                  Deep conversations, beach walks, and authentic bonds formed.
                </p>
              </div>
            </div>

            <div className="past-event-card">
              <div className="past-event__image">
                <div className="image-placeholder image-placeholder--past">
                  <span className="image-icon">🚀</span>
                </div>
                <div className="image-overlay"></div>
              </div>
              <div className="past-event__content">
                <span className="past-event__date">December 2024</span>
                <h3 className="past-event__title">Nagpur Startup Ecosystem Circle</h3>
                <p className="past-event__description">
                  Bringing together founders, investors, and ecosystem builders for meaningful 
                  dialogue about building human-centered businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
