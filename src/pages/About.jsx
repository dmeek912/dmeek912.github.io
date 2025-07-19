import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text-section">
          <h1 className="about-greeting">Hello!</h1>
          <h2 className="about-name">I'm Drexel.</h2>
          <p className="about-description">
            I am a graphic designer out of Oklahoma City, with a passion for creating compelling and fun brand identities. When I am not sketching logos, you can find me at a concert, lost in the woods, or spending time with my dog, Memphis.
          </p>
        </div>
        <div className="about-image-section">
          <img 
            src="/drexel-portfolio-website/about/drexel-boat.jpg" 
            alt="Drexel on a boat" 
            className="about-image"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
} 