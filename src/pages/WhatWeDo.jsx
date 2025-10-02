import './WhatWeDo.css';

const WhatWeDo = () => {
  return (
    <div className="what-we-do">
      {/* Hero Section */}
      <section className="wwd-hero">
        <div className="wwd-hero__texture"></div>
        <div className="container">
          <h1 className="wwd-hero__title">
            What We <span className="text-gradient">Do</span>
          </h1>
          <p className="wwd-hero__subtitle">
            Creating spaces for authentic human connection and growth
          </p>
        </div>
      </section>

      {/* Community Gatherings */}
      <section className="wwd-section">
        <div className="section-divider section-divider--top"></div>
        <div className="container">
          <div className="wwd-content">
            <div className="wwd-icon-wrapper">
              <div className="wwd-icon wwd-icon--neon">
                <svg viewBox="0 0 100 100" className="icon-svg">
                  <circle cx="50" cy="35" r="12" className="neon-shape" />
                  <circle cx="30" cy="60" r="10" className="neon-shape" />
                  <circle cx="70" cy="60" r="10" className="neon-shape" />
                  <circle cx="50" cy="80" r="8" className="neon-shape" />
                  <line x1="50" y1="47" x2="30" y2="50" className="neon-line" />
                  <line x1="50" y1="47" x2="70" y2="50" className="neon-line" />
                  <line x1="30" y1="70" x2="50" y2="72" className="neon-line" />
                  <line x1="70" y1="70" x2="50" y2="72" className="neon-line" />
                </svg>
              </div>
            </div>
            <div className="wwd-text">
              <h2 className="wwd-title">Community Gatherings</h2>
              <p className="wwd-description">
                We host intimate circles both online and offline, creating safe spaces for 
                genuine conversation and connection. These gatherings are designed to foster 
                deep relationships beyond superficial networking — where vulnerability is 
                welcomed and authenticity is celebrated.
              </p>
              <ul className="wwd-features">
                <li>Monthly online circles for global connection</li>
                <li>Local meetups in cities across India</li>
                <li>Small group formats (8-15 people) for meaningful dialogue</li>
                <li>Facilitated discussions on human-centered themes</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section-divider section-divider--bottom"></div>
      </section>

      {/* Experiential Events */}
      <section className="wwd-section wwd-section--alt">
        <div className="section-divider section-divider--top"></div>
        <div className="container">
          <div className="wwd-content wwd-content--reverse">
            <div className="wwd-icon-wrapper">
              <div className="wwd-icon wwd-icon--neon">
                <svg viewBox="0 0 100 100" className="icon-svg">
                  <path d="M30,70 Q50,30 70,70" className="neon-shape" fill="none" />
                  <circle cx="50" cy="45" r="8" className="neon-shape" />
                  <path d="M35,50 L50,35 L65,50" className="neon-line" strokeWidth="2" />
                  <circle cx="35" cy="50" r="4" className="neon-shape" />
                  <circle cx="65" cy="50" r="4" className="neon-shape" />
                </svg>
              </div>
            </div>
            <div className="wwd-text">
              <h2 className="wwd-title">Experiential Events</h2>
              <p className="wwd-description">
                Beyond traditional gatherings, we create immersive experiences that engage 
                the whole person — mind, body, and spirit. These events are designed to 
                help participants reconnect with themselves and others in profound ways.
              </p>
              <ul className="wwd-features">
                <li>Storytelling sessions that honor lived experiences</li>
                <li>Poetry and creative expression circles</li>
                <li>Breathwork and mindfulness practices</li>
                <li>Presence-building workshops and exercises</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section-divider section-divider--bottom"></div>
      </section>

      {/* Thought Leadership */}
      <section className="wwd-section">
        <div className="section-divider section-divider--top"></div>
        <div className="container">
          <div className="wwd-content">
            <div className="wwd-icon-wrapper">
              <div className="wwd-icon wwd-icon--neon">
                <svg viewBox="0 0 100 100" className="icon-svg">
                  <rect x="30" y="30" width="40" height="50" rx="3" className="neon-shape" fill="none" />
                  <line x1="38" y1="40" x2="62" y2="40" className="neon-line" />
                  <line x1="38" y1="50" x2="62" y2="50" className="neon-line" />
                  <line x1="38" y1="60" x2="55" y2="60" className="neon-line" />
                  <circle cx="50" cy="20" r="6" className="neon-shape" />
                </svg>
              </div>
            </div>
            <div className="wwd-text">
              <h2 className="wwd-title">Thought Leadership</h2>
              <p className="wwd-description">
                We share insights, reflections, and real stories that challenge conventional 
                thinking and inspire deeper consideration of what it means to be human in 
                today's world. Our content is grounded in lived experience and authentic inquiry.
              </p>
              <ul className="wwd-features">
                <li>Articles exploring humanity in the age of technology</li>
                <li>Personal reflections from community members</li>
                <li>Research-backed insights on well-being and connection</li>
                <li>Real stories of transformation and growth</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section-divider section-divider--bottom"></div>
      </section>

      {/* Collaborative Projects */}
      <section className="wwd-section wwd-section--alt">
        <div className="section-divider section-divider--top"></div>
        <div className="container">
          <div className="wwd-content wwd-content--reverse">
            <div className="wwd-icon-wrapper">
              <div className="wwd-icon wwd-icon--neon">
                <svg viewBox="0 0 100 100" className="icon-svg">
                  <polygon points="50,25 70,40 65,65 35,65 30,40" className="neon-shape" fill="none" />
                  <circle cx="50" cy="50" r="15" className="neon-shape" fill="none" />
                  <line x1="50" y1="35" x2="50" y2="25" className="neon-line" />
                  <line x1="50" y1="65" x2="50" y2="75" className="neon-line" />
                  <line x1="35" y1="50" x2="25" y2="50" className="neon-line" />
                  <line x1="65" y1="50" x2="75" y2="50" className="neon-line" />
                </svg>
              </div>
            </div>
            <div className="wwd-text">
              <h2 className="wwd-title">Collaborative Projects</h2>
              <p className="wwd-description">
                We believe in turning conversations into action. Our community comes together 
                to co-create solutions for challenges that matter — projects that put human 
                needs and values at the center of innovation and progress.
              </p>
              <ul className="wwd-features">
                <li>Human-centered design initiatives</li>
                <li>Community-driven social impact projects</li>
                <li>Cross-disciplinary collaboration opportunities</li>
                <li>Mentorship and peer learning programs</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section-divider section-divider--bottom"></div>
      </section>
    </div>
  );
};

export default WhatWeDo;
