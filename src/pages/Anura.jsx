// src/pages/Anura.jsx
import React from "react";
import './Anura.css';

function Anura() {

 return (
   <div className="anura-page">
     {/* Hero Section */}
     <section className="anura-hero">
       <div className="hero-content">
         <img src="/anura/anura-logo.JPEG" alt="Anura Logo" className="anura-logo" loading="lazy" />
         <h1 className="hero-title">Anura</h1>
         <p className="hero-subtitle">Evolved for the Depths</p>
       </div>
     </section>

     {/* About Section */}
     <section className="anura-about">
       <div className="container">
         <div className="about-content">
           <div className="anura-about-text">
             <h2>About Anura</h2>
             <p>The silent precision of a diving frog. The splendor of a golden toad. Anura is a high-performance diving gear brand built for those who move with purpose beneath the surface. Informed by the scientific order of amphibians, Anura fuses sleek design with cutting-edge functionality.</p>
             <p>Gear that feels natural, streamlined, and intuitive in the water. Advanced materials, minimalist aesthetics - every detail is engineered for depth, clarity, and control. Because Anura strives to be more than just gear: it becomes an extension of the diver.</p>
           </div>
           <div className="about-image">
             <img src="/anura/anura-mockup.JPEG" alt="Anura Diving Gear" className="about-img" loading="lazy" />
           </div>
         </div>
       </div>
     </section>

     {/* Features Section */}
     <section className="anura-features">
       <div className="container">
         <h2>Key Features</h2>
         <div className="features-grid">
           <div className="feature-card">
             <h3>High Performance</h3>
             <p>Engineered for maximum efficiency and control in underwater environments, ensuring every movement is precise and purposeful.</p>
           </div>
           <div className="feature-card">
             <h3>Instinctive Design</h3>
             <p>Taking inspiration from amphibian biology, our gear enhances the diver's natural capabilities, taking underwater mobility to the next level.</p>
           </div>
           <div className="feature-card">
             <h3>Advanced Materials</h3>
             <p>Cutting-edge materials and minimalist aesthetics combine to create gear that's both functional and visually striking.</p>
           </div>
         </div>
       </div>
     </section>

     {/* Portfolio Section */}
     <section className="anura-portfolio">
       <div className="container">
         <h2>Product Showcase</h2>
         <div className="portfolio-grid">
           <div className="portfolio-item">
             <img src="/anura/anura-mockup2.PNG" alt="Anura Product Mockup" className="portfolio-img" loading="lazy" />
             <div className="portfolio-overlay">
               <h3>Diving Equipment</h3>
               <p>Professional-grade gear designed for serious divers who demand precision and reliability</p>
             </div>
           </div>
           <div className="portfolio-item">
             <img src="/anura/anura-mockup3.JPEG" alt="Anura Gear Mockup" className="portfolio-img" loading="lazy" />
             <div className="portfolio-overlay">
               <h3>Streamlined Design</h3>
               <p>Minimalist aesthetics that prioritize function while maintaining visual appeal</p>
             </div>
           </div>
         </div>
       </div>
     </section>

     {/* Philosophy Section */}
     <section className="anura-philosophy">
       <div className="container">
         <div className="philosophy-content">
           <div className="philosophy-text">
             <h2>Our Philosophy</h2>
             <p>Having noticed the graceful precision of amphibians in motion, Anura represents the perfect harmony between natural design and human engineering. Just as amphibians have evolved to thrive in both aquatic and terrestrial environments, our gear enables divers to move with the same effortless elegance in the water.</p>
             <p>We believe that the best diving equipment should feel like a natural extension of the body, enhancing rather than hindering the diver's connection with the underwater world.</p>
           </div>
         </div>
       </div>
     </section>
   </div>
 );
}

export default Anura;
