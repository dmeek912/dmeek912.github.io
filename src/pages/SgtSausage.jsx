import React from 'react';
import './SgtSausage.css';

function SgtSausage() {
  // Removed the description variable and placed its content directly in the JSX
  return (
    <div className="sgtsausage-page">
      {/* Hero Section */}
      <section className="sgtsausage-hero">
        <div className="hero-content">
          <img src="/sgtsausage/sgtsausage-logo.JPEG" alt="Sgt. Sausage Logo" className="sgtsausage-logo" loading="lazy" />
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
              <p>With a belief in delivering delicious humor and even bolder flavors to clients, SGT Sausage is a cured meat subscription service with a singular mission: to put a laugh in your belly and a bite of boldness on your plate. Imagining camouflage packaging, pun-packed copy, and a no-nonsense mascot who takes snacks <i>very</i> seriously, we're looking to create a full-on meat-tainment experience.</p>
              <p>This brand identity was designed to cut through the noise (and the cheese), standing out in a crowded market with humor, grit, and a whole lot of cured confidence. Focusing on blending a striking visual language with tongue-in-cheek storytelling, and aiming to build a brand that’s not just memorable (but <strong>craveable</strong>)—every design choice, from the typography to the packaging concept, was made to reinforce the voice of a snack that doesn’t mess around.</p>
            </div>
            <div className="about-image-container">
              <img src="/sgtsausage/sgtsausage-artboard.JPEG" alt="Sgt. Sausage Artboard" className="sgtsausage-about-img" loading="lazy" />
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
              <h3>A Whole New Tier</h3>
              <p>Premium cured meats and artisanal charcuterie selections delivered directly to your doorstep with military precision and attention to detail.</p>
            </div>
            <div className="service-card">
              <h3>Military-Grade Comedy</h3>
              <p>Expert humor with the intensity of a drill sergeant and the timing of a seasoned comic. A brand that leaves customers laughing, engaged, and coming back for more.</p>
            </div>
            <div className="service-card">
              <h3>Tailored Service</h3>
              <p>Personalized cured meat subscriptions customized to your preferences, giving you exactly what you want, when you want it - down to the last savory moment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="sgtsausage-portfolio">
        <div className="container">
          <h2>Rollout Operations</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img src="/sgtsausage/sgtsausage-van.JPEG" alt="Sgt. Sausage Van" className="sgtsausage-portfolio-img van"/>
              <div className="portfolio-overlay">
                <h3>Mobile Operations</h3>
                <p>Our military-grade delivery vehicle brings top-tier charcuterie and comedy directly to your location</p>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="/sgtsausage/sgtsausage-mockup.JPEG" alt="Sgt. Sausage Mockup" className="sgtsausage-portfolio-img product" loading="lazy" />
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
              <h2>The Call of Duty</h2>
              <p>This answer to the hunger call punches with a sense of disciplined delivery and unwavering flavor. The ideas behind SGT Sausage focused on feeling active, assertive, and unmistakably proud of its service. When mission meets meaning, it's suddenly not just about making a brand look sharp; it's about showing up with the character, confidence, and the clear mindset to serve an unapologetic love for its product.</p>
              <p>Whether you're on the front lines of snack time or deep behind enemy cravings, mission-ready meats are ready to arrive at the perfect time, locked and loaded.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SgtSausage; 
