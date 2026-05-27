import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Layers, Menu, X, Terminal } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const consoleDialogRef = useRef<HTMLDialogElement>(null);

  const openConsole = () => {
    consoleDialogRef.current?.showModal();
    setMobileMenuOpen(false);
  };

  const closeConsole = () => {
    consoleDialogRef.current?.close();
  };

  return (
    <>
      <header className="main-header glass-panel">
        <div className="container header-container">
          <NavLink to="/" className="logo-container" onClick={() => setMobileMenuOpen(false)}>
            <Layers className="logo-icon" />
            <span className="logo-text">
              daily<span>tech</span>
            </span>
          </NavLink>

          <nav className={`desktop-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/mission" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
              onClick={() => setMobileMenuOpen(false)}
            >
              Mission
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
            <button className="btn btn-outline-cyan console-btn" onClick={openConsole}>
              <Terminal size={16} />
              Launch Console
            </button>
          </nav>

          <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Console Dialog */}
      <dialog ref={consoleDialogRef} className="console-dialog">
        <div className="dialog-header">
          <div className="dialog-title">
            <Terminal size={18} style={{ color: 'var(--accent-cyan)' }} />
            <h3>dailytech.sys // main_console</h3>
          </div>
          <button className="dialog-close" onClick={closeConsole}>&times;</button>
        </div>
        <div className="dialog-body">
          <p className="terminal-line" style={{ color: 'var(--accent-cyan)' }}>&gt; INITIALIZING PERSONAL AI KERNEL...</p>
          <p className="terminal-line">&gt; Loading modules: Mirre (v1.2.0-prod), Loomin (v0.8.1-alpha), Cura (v0.5.0-alpha), Kairos (v0.9.0-beta)</p>
          <p className="terminal-line">&gt; Status: All frontend stubs operational. Awaiting registration layer for secure DB synchronization.</p>
          
          <div className="console-stats">
            <div className="stat-card">
              <span className="stat-label">Active Core</span>
              <span className="stat-val" style={{ color: 'var(--accent-violet)' }}>Gemini 3.5 Flash</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">Connection</span>
              <span className="stat-val" style={{ color: 'var(--accent-cyan)' }}>Secure (HTTPS)</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">DB Hook</span>
              <span className="stat-val" style={{ color: 'var(--text-muted)' }}>Offline (Local-first)</span>
            </div>
          </div>
          
          <div className="console-actions">
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={closeConsole}>Access Web App</button>
            <button className="btn btn-secondary" style={{ width: '100%' }} onClick={() => alert('Registration and Cloud Sync will be enabled in our next release!')}>Sign In / Register</button>
          </div>
        </div>
      </dialog>
    </>
  );
}
