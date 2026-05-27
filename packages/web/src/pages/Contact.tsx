import { useState, useEffect } from 'react';
import { Mail, MapPin, Send, Database, Terminal, Trash2 } from 'lucide-react';

interface Submission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [showInspector, setShowInspector] = useState(false);

  // Load existing submissions from localStorage on mount
  useEffect(() => {
    const raw = localStorage.getItem('dailytech_contact_submissions');
    if (raw) {
      try {
        setSubmissions(JSON.parse(raw));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required.';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address.';
    }
    
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required.';
    
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters long.';
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate network delay
    setTimeout(() => {
      const newSubmission: Submission = {
        id: Math.random().toString(36).substring(2, 9),
        ...formData,
        timestamp: new Date().toLocaleString(),
      };

      const updated = [newSubmission, ...submissions];
      setSubmissions(updated);
      localStorage.setItem('dailytech_contact_submissions', JSON.stringify(updated));

      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Hide success message after 5s
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1200);
  };

  const clearSubmissions = () => {
    localStorage.removeItem('dailytech_contact_submissions');
    setSubmissions([]);
  };

  return (
    <div className="container" style={{ paddingBottom: '96px' }}>
      <div className="contact-layout">
        
        {/* Left Column: Info */}
        <div className="contact-info">
          <h1>Let's Connect</h1>
          <p>
            Have questions about the Mirre mobile app? Want to preview Loomin, Cura, or Kairos? We'd love to hear from you.
          </p>

          <div className="info-cards-stack">
            <div className="info-card glass-panel">
              <div className="info-card-icon">
                <Mail size={20} />
              </div>
              <div className="info-card-details">
                <h3>Studio Communications</h3>
                <p>hello@dailytech.co</p>
              </div>
            </div>

            <div className="info-card glass-panel">
              <div className="info-card-icon">
                <MapPin size={20} />
              </div>
              <div className="info-card-details">
                <h3>Design & AI Lab</h3>
                <p>San Francisco, California</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div>
          <div className="contact-form-panel glass-panel">
            <h2>Send Message</h2>
            <p>Your transmission will be logged directly to the local telemetry monitor below.</p>
            
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter name"
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@email.com"
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group form-group-full">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="How can we help?"
                  />
                  {errors.subject && <span className="error-text">{errors.subject}</span>}
                </div>

                <div className="form-group form-group-full">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write details..."
                  />
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>
              </div>

              <div className="form-submit-row">
                {submitStatus === 'success' ? (
                  <span className="form-status-msg status-success">✓ Message logged to client local db!</span>
                ) : (
                  <span></span>
                )}
                
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  <Send size={16} />
                  {isSubmitting ? 'Transmitting...' : 'Transmit Telemetry'}
                </button>
              </div>
            </form>
          </div>

          {/* Submissions Local Inspector */}
          <div style={{ textAlign: 'right' }}>
            <button 
              className="submission-logger-btn"
              onClick={() => setShowInspector(!showInspector)}
            >
              <Database size={10} style={{ marginRight: '4px' }} />
              {showInspector ? 'Hide' : 'Show'} Client Database Inspector ({submissions.length})
            </button>
          </div>

          {showInspector && (
            <div className="submission-logger-panel glass-panel">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Terminal size={14} /> telemetry_contact_database
                </h3>
                {submissions.length > 0 && (
                  <button 
                    className="btn" 
                    style={{ background: 'transparent', color: '#ef4444', padding: '4px', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '4px' }}
                    onClick={clearSubmissions}
                  >
                    <Trash2 size={12} /> Clear DB
                  </button>
                )}
              </div>

              <div className="logged-submissions">
                {submissions.length === 0 ? (
                  <p style={{ fontStyle: 'italic', fontSize: '12px', color: 'var(--text-muted)' }}>
                    No telemetry submissions detected in local storage.
                  </p>
                ) : (
                  submissions.map((sub) => (
                    <div key={sub.id} className="logged-item">
                      <div className="logged-meta">
                        <span>ID: {sub.id}</span>
                        <span>{sub.timestamp}</span>
                      </div>
                      <div style={{ fontWeight: 600, color: 'var(--accent-cyan)' }}>{sub.name} &lt;{sub.email}&gt;</div>
                      <div style={{ fontWeight: 500, margin: '4px 0' }}>Subj: {sub.subject}</div>
                      <p style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{sub.message}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
