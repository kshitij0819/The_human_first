import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/what-we-do', label: 'What We Do' },
    { path: '/why-join', label: 'Why Join' },
    { path: '/events', label: 'Events' },
    { path: '/voices', label: 'Voices' },
    { path: '/blog', label: 'Blog' },
    { path: '/get-involved', label: 'Get Involved' }
  ];

  return (
    <nav className="navigation">
      <div className="container">
        <div className="navigation__content">
          <Link to="/" className="navigation__logo">
            <span className="logo-text">The Human First <span className="text-gradient">Club</span></span>
          </Link>
          
          <div className="navigation__actions">
            <ThemeToggle />
            <button 
              className="navigation__toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
            </button>
          </div>

          <ul className={`navigation__menu ${isMenuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path}
                  className={`navigation__link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
