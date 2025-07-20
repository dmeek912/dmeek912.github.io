import './Contact.css';

export default function Contact() {
  // Helper to render checkered row
  const renderCheckered = (count, reverse) => (
    <div className="checkered">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="checkered-square"
          style={{ background: reverse ? (i % 2 === 0 ? '#0A332C' : '#f7deba') : (i % 2 === 0 ? '#f7deba' : '#0A332C') }}
        />
      ))}
    </div>
  );

  return (
    <div className="contact-container">
      <div className="contact-cards-wrapper">
        {/* First business card */}
        <div className="business-card alfarn">
          <div>
            <div className="name">DREXEL MEEK</div>
            <div className="role">GRAPHIC DESIGNER</div>
            <div className="contact">(405) 513-2161</div>
            <div className="email">DREXELMEEK912@GMAIL.COM</div>
          </div>
          <div className="checkered-container">
            {renderCheckered(10, false)}
            {renderCheckered(10, true)}
          </div>
          <img src="/drexel-logo2.png" alt="Drexel Logo" className="business-card-logo" loading="lazy" />
        </div>
        {/* Second business card */}
        <div className="business-card beige alfarn">
          {renderCheckered(13, true)}
          <div className="business-card-center">
            <div className="business-card-logo-wrapper">
              <img src="/drexel-logo.png" alt="Drexel Logo" className="business-card-logo-large" loading="lazy" />
              <span className="drexel-meek">DREXEL<br />MEEK</span>
            </div>
          </div>
          {renderCheckered(13, true)}
        </div>
      </div>
    </div>
  );
} 