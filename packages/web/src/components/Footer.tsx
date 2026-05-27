import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Layers, Github, Twitter, Shield, Heart } from 'lucide-react';

export default function Footer() {
  const privacyDialogRef = useRef<HTMLDialogElement>(null);

  const openPrivacy = (e: React.MouseEvent) => {
    e.preventDefault();
    privacyDialogRef.current?.showModal();
  };

  const closePrivacy = () => {
    privacyDialogRef.current?.close();
  };

  return (
    <>
      <footer className="main-footer">
        <div className="container footer-container">
          <div className="footer-brand">
            <div className="logo-container">
              <Layers className="logo-icon" />
              <span className="logo-text">
                daily<span>tech</span>
              </span>
            </div>
            <p className="footer-tagline">Elevating everyday life by design.</p>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-links-col">
              <h4>AI Companions</h4>
              <ul>
                <li><NavLink to="/">Mirre (VTO)</NavLink></li>
                <li><NavLink to="/">Loomin (Wardrobe)</NavLink></li>
                <li><NavLink to="/">Cura (Spaces)</NavLink></li>
                <li><NavLink to="/">Kairos (Scheduler)</NavLink></li>
              </ul>
            </div>
            
            <div className="footer-links-col">
              <h4>Platform</h4>
              <ul>
                <li><NavLink to="/mission">Our Mission</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h4>Legal</h4>
              <ul>
                <li><NavLink to="/mirre-terms">Mirre Terms</NavLink></li>
                <li><a href="#privacy" onClick={openPrivacy}>Privacy Policy</a></li>
                <li><a href="#terms" onClick={(e) => { e.preventDefault(); alert('Terms of Service: All algorithms are prototype-only. Use intentionally!'); }}>Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container footer-bottom-container">
            <p>&copy; {new Date().getFullYear()} Dailytech. All rights reserved.</p>
            <p className="made-with">
              Made with <Heart size={14} className="heart-icon" /> for a modern lifestyle.
            </p>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Dialog */}
      <dialog ref={privacyDialogRef} className="privacy-dialog">
        <div className="dialog-header">
          <div className="dialog-title">
            <Shield size={18} style={{ color: 'var(--accent-violet)' }} />
            <h3>Privacy Policy & Data Security</h3>
          </div>
          <button className="dialog-close" onClick={closePrivacy}>&times;</button>
        </div>
        <div className="dialog-body" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
          <h4>1. Local-First Architecture</h4>
          <p>
            At Dailytech, we believe your personal data belongs to you. Since our platform features no backend databases at this stage, all items, logs, scheduling configurations, and form submissions remain inside your browser's local storage. No data is processed, sold, or synced with external servers.
          </p>
          
          <h4>2. AI Processing Principles</h4>
          <p>
            For tools like Mirre (Virtual Try-On), image rendering and styling predictions run client-side whenever possible or utilize transient GPU instances that delete input images immediately after generating outputs.
          </p>
          
          <h4>3. Future Authentication & Cloud Features</h4>
          <p>
            When registration and cloud sync are introduced, we will maintain a strict zero-knowledge default. You will always have the option to keep your profile stored 100% locally on your device.
          </p>
          
          <div className="console-actions" style={{ marginTop: '24px' }}>
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={closePrivacy}>Acknowledge & Close</button>
          </div>
        </div>
      </dialog>
    </>
  );
}
