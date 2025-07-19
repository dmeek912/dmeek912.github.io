import React from 'react';
import './Babylon.css';

/**
 * Babylon Consulting page for the portfolio website.
 */

const description = `Where Strategy Meets Communication.

Babylon Consulting is a professional firm rooted in the story of human connection. The Tower of Babel's legendary tale of ancient communication serves to inspire the weaving of a modern vision of clarity, strategy, and insight.

In a world often clouded by noise, Babylon helps organizations align their message, bridge internal gaps, and build structures that last. With a visual identity grounded in timeless forms and a narrative that honors the power in language, Babylon Consulting redefines what it means to truly understand and be understood.`;

export default function Babylon() {
  return (
    <div className="babylon-page">
      {/* Hero Section */}
      <section className="babylon-hero">
        <div className="hero-content">
          <img src="./babylon/babylon-logo.JPEG" alt="Babylon Consulting Logo" className="babylon-logo" />
          <h1 className="hero-title">Babylon Consulting</h1>
          <p className="hero-subtitle">Where Strategy Meets Communication</p>
        </div>
      </section>

      {/* About Section */}
      <section className="babylon-about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Babylon</h2>
              <p>{description}</p>
            </div>
            <div className="about-image">
              <img src="./babylon/babylon-consulting.JPEG" alt="Babylon Consulting" className="about-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="babylon-services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Strategic Communication</h3>
              <p>Aligning your message with your mission through thoughtful strategy and clear communication frameworks.</p>
            </div>
            <div className="service-card">
              <h3>Internal Alignment</h3>
              <p>Bridging gaps within organizations to create cohesive teams that speak with one voice.</p>
            </div>
            <div className="service-card">
              <h3>Brand Development</h3>
              <p>Building lasting structures that reflect your values and resonate with your audience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="babylon-portfolio">
        <div className="container">
          <h2>Portfolio</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img src="./babylon/babylon-letterhead-mockup.JPEG" alt="Babylon Letterhead Mockup" className="portfolio-img" />
              <div className="portfolio-overlay">
                <h3>Letterhead Design</h3>
                <p>Professional stationery that reflects the firm's timeless approach</p>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="./babylon/babylon-sign.JPEG" alt="Babylon Sign" className="portfolio-img" />
              <div className="portfolio-overlay">
                <h3>Environmental Design</h3>
                <p>Physical manifestations of the brand in built environments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="babylon-philosophy">
        <div className="container">
          <div className="philosophy-content">
            <div className="philosophy-text">
              <h2>Our Philosophy</h2>
              <p>Inspired by the ancient Tower of Babel, we believe that clear communication is the foundation of all human achievement. Just as the tower represented humanity's collective ambition, we help organizations build structures of understanding that elevate their mission and connect with their audience.</p>
              <p>Our approach combines timeless wisdom with modern strategy, creating communication frameworks that are both enduring and effective.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
