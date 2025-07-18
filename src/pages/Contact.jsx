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
    <div style={{ background: '#AABAB5', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
        {/* First business card (dark) */}
        <div className="business-card alfarn">
          <div>
            <div className="name" style={{ fontSize: '2em', fontWeight: 'bold' }}>DREXEL MEEK</div>
            <div className="role" style={{ fontWeight: 'bold', fontSize: '1.1em' }}>GRAPHIC DESIGNER</div>
            <div className="contact">(405) 513-2161</div>
            <div className="email">DREXELMEEK912@GMAIL.COM</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, lineHeight: 0 }}>
            {renderCheckered(10, false)}
            {renderCheckered(10, true)}
          </div>
          <img src="/drexel-logo.png" alt="Drexel Logo" style={{ position: 'absolute', bottom: 18, right: 28, height: '2.2em', width: 'auto' }} />
        </div>
        {/* Second business card (beige) */}
        <div className="business-card beige alfarn" style={{ alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          {renderCheckered(13, true)}
          <div style={{ padding: '24px 0', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/drexel-logo.png" alt="Drexel Logo" style={{ height: '4em', width: 'auto', marginBottom: '0.2em' }} />
              <span className="drexel-meek">DREXEL<br />MEEK</span>
            </div>
          </div>
          {renderCheckered(13, true)}
        </div>
      </div>
    </div>
  );
} 