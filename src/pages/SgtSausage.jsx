import React from 'react';
import './SgtSausage.css';

function SgtSausage() {
  // Removed the description variable and placed its content directly in the JSX
  return (
    <div className="sgtsausage-page">
      {/* Hero Section */}
      <section className="sgtsausage-hero">
        <div className="hero-content">
          <img src="/sgtsausage/sgtsausage-logo.JPEG" alt="Sgt. Sausage Logo" className="sgtsausage-logo" />
          <h1 className="hero-title">SGT Sausage</h1>
          <p className="hero-subtitle">Reporting for Duty</p>
        </div>
      </section>

      {/* About Section */}
      <section className="sgtsausage-about">
        <div className="container">
          <div className="about-content">
            <div className="sgtsausage-about-text">
              <h2>About SGT Sausage</h2>
              <p>As a member of the US Military-grade Comedy Team, I take pride in delivering humor and even bolder laughs to my customers. Our services include top-tier charcuterie and military-grade comedy. We blend bold flavors with the perfect amount of laughter to create a full-on meat-tainment experience.</p>
              <p>SGT Sausage is a cured meat subscription service with a mission to bring bold flavors and even bolder laughs to your doorstep. Our team of experts will work closely with you to understand your needs and preferences, and deliver the perfect combination of charcuterie and comedy that you'll love.</p>
            </div>
            <div className="about-image">
              <img src="/sgtsausage/sgtsausage-artboard.JPEG" alt="Sgt. Sausage Artboard" className="about-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="sgtsausage-services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Top-Tier Charcuterie</h3>
              <p>Premium cured meats and artisanal charcuterie selections delivered directly to your doorstep with military precision and attention to detail.</p>
            </div>
            <div className="service-card">
              <h3>Military-Grade Comedy</h3>
              <p>Expert-level humor and entertainment that brings bold laughs and creates a full-on meat-tainment experience for all customers.</p>
            </div>
            <div className="service-card">
              <h3>Subscription Service</h3>
              <p>Personalized cured meat subscriptions tailored to your preferences, delivered with the perfect combination of quality and comedy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="sgtsausage-portfolio">
        <div className="container">
          <h2>Our Operations</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img src="/sgtsausage/sgtsausage-van.JPEG" alt="Sgt. Sausage Van" className="portfolio-img" />
              <div className="portfolio-overlay">
                <h3>Mobile Operations</h3>
                <p>Our military-grade delivery vehicle brings top-tier charcuterie and comedy directly to your location</p>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="/sgtsausage/sgtsausage-mockup.JPEG" alt="Sgt. Sausage Mockup" className="portfolio-img" />
              <div className="portfolio-overlay">
                <h3>Product Showcase</h3>
                <p>Premium charcuterie products designed with military precision and delivered with humor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="sgtsausage-mission">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>As proud members of the US Military-grade Comedy Team, we take our duty seriously - delivering both exceptional charcuterie and unbeatable entertainment. Our mission is to bring bold flavors and even bolder laughs to every doorstep we serve.</p>
              <p>We believe that great food and great humor go hand in hand, creating a unique meat-tainment experience that keeps our customers coming back for more. Every delivery is an opportunity to serve with pride and entertain with purpose.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SgtSausage; 