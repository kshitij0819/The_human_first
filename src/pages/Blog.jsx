import './Blog.css';
import Card from '../components/Card';

const Blog = () => {
  const articles = [
    {
      title: "Staying Human in the Age of AI",
      excerpt: "As artificial intelligence reshapes our world, how do we maintain our humanity? Exploring the balance between technological progress and human values.",
      tags: ["AI", "Philosophy", "Future"],
      date: "March 2025",
      readTime: "8 min read"
    },
    {
      title: "From Stress to Strength: Daily Tools for Emotional Well-being",
      excerpt: "Practical, evidence-based techniques for managing stress and building emotional resilience in our fast-paced world.",
      tags: ["Well-being", "Mental Health", "Practices"],
      date: "February 2025",
      readTime: "6 min read"
    },
    {
      title: "Why Belonging is the New Success",
      excerpt: "In a world obsessed with achievement, we explore why genuine connection and belonging matter more than traditional markers of success.",
      tags: ["Community", "Success", "Connection"],
      date: "January 2025",
      readTime: "7 min read"
    },
    {
      title: "Turning Problems into Projects: My Journey of Growth",
      excerpt: "A personal story of transformation — how embracing challenges and collaborating with others led to unexpected growth and fulfillment.",
      tags: ["Personal Growth", "Story", "Collaboration"],
      date: "December 2024",
      readTime: "10 min read"
    },
    {
      title: "The Art of Presence in a Distracted World",
      excerpt: "Rediscovering the power of being fully present in our interactions, work, and daily life amidst constant digital distractions.",
      tags: ["Mindfulness", "Presence", "Digital Life"],
      date: "November 2024",
      readTime: "5 min read"
    },
    {
      title: "Building Communities That Heal",
      excerpt: "What makes a community truly supportive? Lessons from creating spaces where people can be vulnerable, grow, and thrive together.",
      tags: ["Community", "Healing", "Connection"],
      date: "October 2024",
      readTime: "9 min read"
    }
  ];

  return (
    <div className="blog">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <h1 className="blog-hero__title">
            Blog & <span className="text-gradient">Resources</span>
          </h1>
          <p className="blog-hero__subtitle">
            Reflections, insights, and stories on staying human in a changing world
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="blog-articles">
        <div className="container">
          <div className="articles-grid">
            {articles.map((article, index) => (
              <Card key={index} variant="default" className="article-card">
                <div className="article-card__content">
                  <div className="article-card__meta">
                    <span className="meta-date">{article.date}</span>
                    <span className="meta-separator">•</span>
                    <span className="meta-read-time">{article.readTime}</span>
                  </div>
                  <h3 className="article-card__title">{article.title}</h3>
                  <p className="article-card__excerpt">{article.excerpt}</p>
                  <div className="article-card__tags">
                    {article.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                  <a href="#" className="article-card__link">
                    Read More →
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="blog-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Stay Connected</h2>
            <p className="newsletter-text">
              Receive our monthly reflections and stories delivered to your inbox.
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
