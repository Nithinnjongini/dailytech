import { Shield, Compass, HeartHandshake } from 'lucide-react';

export default function Mission() {
  return (
    <div className="container" style={{ paddingBottom: '96px' }}>
      {/* Editorial Title */}
      <section className="mission-hero">
        <span className="hero-subtitle">Our Vision</span>
        <h1>AI in Service of Human Calm</h1>
        <p>
          We build tools that elevate personal expression, organize environments, and protect cognitive focus.
        </p>
      </section>

      {/* Editorial Core Philosophy */}
      <div className="editorial-layout">
        <div className="editorial-text">
          <h2>Designing Invisible Utilities</h2>
          <p>
            The tech industry has spent the last decade building systems designed to capture and hold your attention. We believe it is time for a course correction.
          </p>
          <p>
            Dailytech focuses on creating personal companions that perform specialized, high-aesthetic tasks and then step aside. Whether it's finding your personal style with Mirre, styling your living room with Cura, or allocating tasks around your circadian peaks with Kairos, our products are built to serve your lifestyle—not the attention economy.
          </p>
          <p>
            By designing with local-first parameters, we protect your personal context. Your style details, room configurations, and workflows are kept securely on your device.
          </p>
        </div>

        <div className="editorial-graphics">
          <div className="graphic-block glass-panel">
            <Compass size={24} style={{ color: 'var(--accent-cyan)' }} />
            <h3>Design-First</h3>
            <p>Visual calm, deliberate typography, and high-fidelity transitions that make software feel like craftsmanship.</p>
          </div>
          
          <div className="graphic-block glass-panel">
            <Shield size={24} style={{ color: 'var(--accent-violet)' }} />
            <h3>Privacy Default</h3>
            <p>Zero tracking, client-side processing, and zero backend databases by design to keep your data truly yours.</p>
          </div>

          <div className="graphic-block glass-panel" style={{ gridColumn: 'span 2' }}>
            <HeartHandshake size={24} style={{ color: 'var(--accent-cyan)' }} />
            <h3>Circadian Alignment</h3>
            <p>Systems built to adjust to human biology and energy profiles instead of forcing humans to bend to corporate calendars.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
