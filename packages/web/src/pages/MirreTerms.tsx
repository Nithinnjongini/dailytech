import { Shield, Scale, Download } from 'lucide-react';

export default function MirreTerms() {
  return (
    <div className="container" style={{ paddingBottom: '96px', paddingTop: '40px' }}>
      {/* Page Title */}
      <section className="mission-hero">
        <span className="hero-subtitle">Legal Documentation</span>
        <h1>Mirre Terms</h1>
        <p>
          Access and download official documentation detailing the privacy practices, data security guidelines, and user agreements for the Mirre App.
        </p>
      </section>

      {/* Documents Grid / Layout */}
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Document 1: Privacy Policy */}
        <div className="glass-panel" style={{ padding: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '280px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <Shield size={24} style={{ color: 'var(--accent-cyan)' }} />
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-title)' }}>Mirre Privacy Policy</h3>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              Outlines how we handle personal styling profiles, neural try-on parameters, and client-side storage policies to ensure user privacy.
            </p>
          </div>
          <div>
            <a 
              href="/documents/Mirre_Privacy_Policy.docx" 
              className="btn btn-outline-cyan" 
              download="Mirre_Privacy_Policy.docx"
              style={{ minWidth: '180px' }}
            >
              <Download size={16} /> Download DOCX
            </a>
          </div>
        </div>

        {/* Document 2: Terms and Conditions */}
        <div className="glass-panel" style={{ padding: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '280px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <Scale size={24} style={{ color: 'var(--accent-violet)' }} />
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-title)' }}>Mirre Terms and Conditions</h3>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              Defines user agreements, usage licenses, virtual try-on catalog permissions, and the boundary parameters of our AI styling engine.
            </p>
          </div>
          <div>
            <a 
              href="/documents/Mirre_Terms_and_Conditions.docx" 
              className="btn btn-secondary" 
              download="Mirre_Terms_and_Conditions.docx"
              style={{ minWidth: '180px', borderColor: 'var(--accent-violet)' }}
            >
              <Download size={16} style={{ color: 'var(--accent-violet)' }} /> Download DOCX
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
