import './Home.css';

export default function Home() {
  return (
    <>
      <section className="masthead">
        <img src="/home/portfolio-masthead-2.jpg" alt="Masthead" className="masthead-img"/>
        <div>
        </div>
      </section>
      
      <section className="portfolio-intro">
        <div className="intro-container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Welcome to My Portfolio</h2>
              <p>I'm a creative professional passionate about design, branding, and visual storytelling. Explore my work and discover how I bring ideas to life through thoughtful design solutions.</p>
            </div>
            <div className="intro-image">
              <img src="/home/character.JPG" alt="Portfolio Character" className="character-img" loading='lazy'/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 