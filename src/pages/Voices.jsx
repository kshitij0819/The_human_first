import './Voices.css';

const Voices = () => {
  const testimonials = [
    {
      quote: "I came here looking for ideas. I left with connection, clarity, and hope.",
      author: "Priya S.",
      role: "Entrepreneur"
    },
    {
      quote: "This is the only space where I can just be myself — no masks, no roles.",
      author: "Rahul M.",
      role: "Product Designer"
    },
    {
      quote: "The Human First Club reminded me that success means nothing if I lose myself in the process.",
      author: "Anjali K.",
      role: "Startup Founder"
    },
    {
      quote: "I found a community that celebrates vulnerability as strength, not weakness.",
      author: "Vikram P.",
      role: "Tech Lead"
    },
    {
      quote: "Before The Human First Club, I was building a company. Now I'm building a life worth living.",
      author: "Meera D.",
      role: "CEO"
    },
    {
      quote: "The conversations here go deeper than any networking event ever could.",
      author: "Arjun T.",
      role: "Creative Director"
    }
  ];

  return (
    <div className="voices">
      {/* Hero Section */}
      <section className="voices-hero">
        <div className="voices-texture"></div>
        <div className="container">
          <h1 className="voices-hero__title">
            Voices from the <span className="text-gradient">Community</span>
          </h1>
          <p className="voices-hero__subtitle">
            Real stories from real people on their Human First journey
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="voices-testimonials">
        <div className="container">
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-card__quote">
                  <span className="quote-mark">"</span>
                  <p className="quote-text">{testimonial.quote}</p>
                </div>
                <div className="testimonial-card__author">
                  <cite className="author-name">— {testimonial.author}</cite>
                  <span className="author-role">{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="voices-featured">
        <div className="container">
          <div className="featured-story">
            <h2 className="featured-story__title">A Journey of Transformation</h2>
            <blockquote className="featured-story__quote">
              "I joined The Human First Club at a crossroads in my life. I was successful on paper, 
              but felt empty inside. Through the circles, the conversations, and the genuine 
              connections I made here, I rediscovered what truly matters. This community 
              didn't just change my perspective — it changed my life."
            </blockquote>
            <cite className="featured-story__author">— Deepak R., Community Member since 2023</cite>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Voices;
