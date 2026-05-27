import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sparkles, ArrowRight, Eye, Shirt, Sun, Home as HomeIcon, Clock, ToggleLeft } from 'lucide-react';

export default function Home() {
  // 1. Mirre VTO State
  const [selectedGarment, setSelectedGarment] = useState<'jacket' | 'blazer' | 'vest'>('jacket');
  const garments = {
    jacket: {
      name: 'Cyberpunk Shell',
      color: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
      style: { border: '2px solid var(--accent-cyan)' },
      label: 'Neon wind-resistant athletic shell'
    },
    blazer: {
      name: 'Minimalist Tech Blazer',
      color: 'linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)',
      style: { border: '2px solid var(--accent-violet)' },
      label: 'Unstructured double-weave thermal blazer'
    },
    vest: {
      name: 'Cargo Utility Vest',
      color: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
      style: { border: '2px solid #f59e0b' },
      label: 'Multi-pocket tactical overlay'
    }
  };

  // 2. Loomin State
  const [mood, setMood] = useState<'focused' | 'relaxed' | 'vibrant'>('focused');
  const [weather, setWeather] = useState<'rainy' | 'cold' | 'sunny'>('rainy');
  const loominOutfits = {
    'focused-rainy': { title: 'Waterproof Commuter Shell', desc: 'Heavyweight Charcoal Tech-Shell + Tapered Dry-FIT Trousers (Matte Black)' },
    'focused-cold': { title: 'Thermal Tailored Layering', desc: 'Merino Wool Mockneck + Unstructured Wool Blazer (Navy)' },
    'focused-sunny': { title: 'Aerated Office Chinos', desc: 'Breathable Bamboo Pique Polo + Tailored Slim Chinos (Sand)' },
    'relaxed-rainy': { title: 'French Terry Loungewear', desc: 'Oversized Loopback Hoodie + Premium Heavy Fleece Joggers (Sage)' },
    'relaxed-cold': { title: 'Soft Cashmere Uniform', desc: 'Cozy Cashmere Crewneck + Relaxed Selvedge Denim (Indigo)' },
    'relaxed-sunny': { title: 'Boxy Cotton Essentials', desc: 'Pima Cotton Heavyweight Tee + Linen Drawstring Shorts (Oatmeal)' },
    'vibrant-rainy': { title: 'High-Visibility Utility', desc: 'Cyber-Yellow Windbreaker + Textured Cordura Utility Pants (Slate)' },
    'vibrant-cold': { title: 'Neon Down Puffer Outfit', desc: 'Colorblock Goose Down Jacket + Knitted Beanie (Electric Violet)' },
    'vibrant-sunny': { title: 'Resort Camp-Collar Style', desc: 'Linen Floral Camp-Collar Shirt + Pleated Trousers (Sage)' },
  };

  // 3. Cura State
  const [spaceStyled, setSpaceStyled] = useState(false);

  // 4. Kairos State
  const [circadianType, setCircadianType] = useState<'bear' | 'lion' | 'wolf'>('bear');
  const schedulerData = {
    bear: [
      { time: '09:00 - 12:00', label: 'Primary Creative Focus', type: 'focus', energy: 'High (100%)' },
      { time: '12:00 - 13:00', label: 'Cognitive Recovery (Lunch & Walk)', type: 'rest', energy: 'Medium (60%)' },
      { time: '14:00 - 17:00', label: 'Collaborative / Secondary Work', type: 'focus', energy: 'Medium-High (75%)' },
    ],
    lion: [
      { time: '08:00 - 11:00', label: 'Primary Creative Focus', type: 'focus', energy: 'Peak (100%)' },
      { time: '11:00 - 12:00', label: 'Strategic Decompression', type: 'rest', energy: 'Medium (50%)' },
      { time: '13:00 - 16:00', label: 'Collaborative Session', type: 'focus', energy: 'Medium (70%)' },
    ],
    wolf: [
      { time: '13:00 - 16:00', label: 'Deep Analytical Work', type: 'focus', energy: 'Medium (80%)' },
      { time: '16:00 - 17:00', label: 'Physical Reset (Exercise / Break)', type: 'rest', energy: 'Low (40%)' },
      { time: '19:00 - 22:00', label: 'Peak Creative Flow Block', type: 'focus', energy: 'Peak (100%)' },
    ],
  };

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-subtitle">Elevating Everyday Life By Design</div>
        <h1>
          Aesthetic AI Solutions For Your <span>Personal Day-to-Day</span>
        </h1>
        <p className="hero-desc">
          Dailytech designs custom utilities and human-centric AI models to organize, express, and elevate your personal environment.
        </p>
        <div className="hero-cta">
          <NavLink to="/mission" className="btn btn-primary">
            Explore Our Mission <ArrowRight size={16} />
          </NavLink>
          <NavLink to="/contact" className="btn btn-secondary">
            Get In Touch
          </NavLink>
        </div>
      </section>

      {/* Featured VTO Showcase */}
      <section className="featured-showcase glass-panel">
        <div className="showcase-content">
          <span className="product-tag tag-launched" style={{ marginBottom: '16px', display: 'inline-block' }}>Featured Experience</span>
          <h2>Experience Mirre Neural Try-On</h2>
          <p>
            Transform your styling choices with real-time neural rendering. See fabrics drape, colors interact, and garments fit your physical profile instantly. Mirre brings global catalogs directly onto your digital likeness.
          </p>
          <ul className="showcase-features">
            <li>
              <Sparkles size={16} />
              <span>Real-time fabric rendering & drape mapping</span>
            </li>
            <li>
              <Sparkles size={16} />
              <span>Dual-mirror spatial context projection</span>
            </li>
            <li>
              <Sparkles size={16} />
              <span>Live mobile recording & design catalog matching</span>
            </li>
          </ul>
          <NavLink to="/contact" className="btn btn-primary">
            Request Demo Access <ArrowRight size={16} />
          </NavLink>
        </div>
        <div className="showcase-image-container">
          <img 
            src="/images/mirre_vto_showcase.jpg" 
            alt="Mirre Virtual Try-On Spatial Mirror Simulation" 
            className="showcase-image"
          />
        </div>
      </section>

      {/* Ecosystem Section Header */}
      <section style={{ padding: '40px 0 80px 0' }}>
        <div className="section-header">
          <h2>Our Core AI Companions</h2>
          <p>
            Explore our suite of launched and upcoming products crafted to streamline your lifestyle.
          </p>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          
          {/* Product 1: Mirre */}
          <div className="product-card glass-panel">
            <div className="product-header">
              <div className="product-title-row">
                <div className="product-icon">
                  <Shirt size={22} />
                </div>
                <div>
                  <h3>Mirre App</h3>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Virtual Styling & Fits</p>
                </div>
              </div>
              <span className="product-tag tag-launched">Launched</span>
            </div>
            
            <p className="product-desc">
              A premium mobile application for picking clothes from global design catalogs and virtually trying them on. Neural rendering maps dimensions instantly.
            </p>

            {/* Interactive Demo: Mirre */}
            <div className="demo-container">
              <div className="demo-title">
                <Eye size={12} /> Live Try-On Simulator
              </div>
              <div className="mirre-demo">
                <div className="vto-avatar-box">
                  <div className="vto-canvas">
                    <div className="avatar-head"></div>
                    <div className="avatar-body"></div>
                    <div 
                      className="garment-overlay" 
                      style={{ 
                        background: garments[selectedGarment].color,
                        ...garments[selectedGarment].style
                      }}
                    >
                      <Shirt size={28} style={{ opacity: 0.2, color: '#fff' }} />
                    </div>
                  </div>
                  <div style={{ position: 'absolute', bottom: 4, fontSize: '9px', color: 'var(--text-muted)' }}>
                    vto_model_v1.2
                  </div>
                </div>
                
                <div className="vto-selector">
                  {Object.keys(garments).map((key) => {
                    const k = key as 'jacket' | 'blazer' | 'vest';
                    return (
                      <button
                        key={k}
                        className={`vto-option-btn ${selectedGarment === k ? 'active' : ''}`}
                        onClick={() => setSelectedGarment(k)}
                      >
                        {garments[k].name}
                      </button>
                    );
                  })}
                  <p style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '4px' }}>
                    {garments[selectedGarment].label}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Product 2: Loomin */}
          <div className="product-card glass-panel">
            <div className="product-header">
              <div className="product-title-row">
                <div className="product-icon">
                  <Sparkles size={22} />
                </div>
                <div>
                  <h3>Loomin</h3>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>AI Wardrobe Curator</p>
                </div>
              </div>
              <span className="product-tag tag-upcoming">Upcoming</span>
            </div>

            <p className="product-desc">
              Your digital wardrobe manager. Connects to your local schedule, forecast APIs, and mood descriptors to curate your optimal aesthetic for the day.
            </p>

            {/* Interactive Demo: Loomin */}
            <div className="demo-container">
              <div className="demo-title">
                <Sun size={12} /> Loomin Daily Curator
              </div>
              <div className="loomin-demo">
                <div className="loomin-inputs">
                  <select 
                    className="loomin-select"
                    value={mood} 
                    onChange={(e) => setMood(e.target.value as any)}
                  >
                    <option value="focused">Mood: Focus Mode</option>
                    <option value="relaxed">Mood: Relaxed Mode</option>
                    <option value="vibrant">Mood: High-Energy</option>
                  </select>
                  
                  <select 
                    className="loomin-select"
                    value={weather} 
                    onChange={(e) => setWeather(e.target.value as any)}
                  >
                    <option value="rainy">Forecast: Overcast / Rainy</option>
                    <option value="cold">Forecast: Crisp / Cold</option>
                    <option value="sunny">Forecast: Warm / Sunny</option>
                  </select>
                </div>

                <div className="loomin-result">
                  <div className="loomin-result-title">
                    {loominOutfits[`${mood}-${weather}`].title}
                  </div>
                  <div className="loomin-result-details">
                    {loominOutfits[`${mood}-${weather}`].desc}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product 3: Cura */}
          <div className="product-card glass-panel">
            <div className="product-header">
              <div className="product-title-row">
                <div className="product-icon">
                  <HomeIcon size={22} />
                </div>
                <div>
                  <h3>Cura</h3>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Spatial Design Companion</p>
                </div>
              </div>
              <span className="product-tag tag-upcoming">Upcoming</span>
            </div>

            <p className="product-desc">
              AI spatial visualizer. Snap a picture of any corner or room, select an aesthetic theme, and explore instant redesign suggestions with item details.
            </p>

            {/* Interactive Demo: Cura */}
            <div className="demo-container">
              <div className="demo-title">
                <ToggleLeft size={12} /> Space Stylizer
              </div>
              <div className="cura-demo">
                <div className="cura-slider-container">
                  <div className={`cura-image-pane empty-space ${!spaceStyled ? 'active' : ''}`} style={{ opacity: spaceStyled ? 0 : 1 }}>
                    <div className="cura-badge">Base Layout</div>
                    <div className="cura-furniture text-muted" style={{ padding: '0 20px' }}>
                      <p style={{ fontSize: '12px', fontStyle: 'italic' }}>Standard empty corner, white drywalls, plain floorboards</p>
                    </div>
                  </div>
                  
                  <div className={`cura-image-pane styled-space ${spaceStyled ? 'active' : ''}`} style={{ opacity: spaceStyled ? 1 : 0 }}>
                    <div className="cura-badge" style={{ borderColor: 'var(--accent-violet)', color: 'var(--accent-violet)' }}>Styled Room</div>
                    <div className="cura-furniture" style={{ padding: '0 20px' }}>
                      <h4 style={{ color: 'var(--accent-cyan)', fontSize: '14px', marginBottom: '4px' }}>Warm Minimalist Japandi</h4>
                      <p style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                        Oak vertical wall slats + Biophilic olive potted plant + Soft textured boucle accent chair + Accent ring lighting
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="cura-toggle-row">
                  <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                    Current View: {spaceStyled ? 'Japandi styled' : 'Raw Empty Room'}
                  </span>
                  <button 
                    className="btn btn-outline-cyan" 
                    style={{ padding: '6px 12px', fontSize: '11px' }}
                    onClick={() => setSpaceStyled(!spaceStyled)}
                  >
                    {spaceStyled ? 'Reset Corner' : 'Apply AI Style'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product 4: Kairos */}
          <div className="product-card glass-panel">
            <div className="product-header">
              <div className="product-title-row">
                <div className="product-icon">
                  <Clock size={22} />
                </div>
                <div>
                  <h3>Kairos</h3>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Circadian Intentional Engine</p>
                </div>
              </div>
              <span className="product-tag tag-upcoming">Upcoming</span>
            </div>

            <p className="product-desc">
              Organize your days around focus capacity rather than fixed meetings. Matches workload to energy curves based on your cognitive profile.
            </p>

            {/* Interactive Demo: Kairos */}
            <div className="demo-container">
              <div className="demo-title">
                <Clock size={12} /> Circadian Schedule Mapper
              </div>
              <div className="kairos-demo">
                <div className="kairos-controls">
                  <button 
                    className={`kairos-control-btn ${circadianType === 'bear' ? 'active' : ''}`}
                    onClick={() => setCircadianType('bear')}
                  >
                    Bear (Standard)
                  </button>
                  <button 
                    className={`kairos-control-btn ${circadianType === 'lion' ? 'active' : ''}`}
                    onClick={() => setCircadianType('lion')}
                  >
                    Lion (Morning)
                  </button>
                  <button 
                    className={`kairos-control-btn ${circadianType === 'wolf' ? 'active' : ''}`}
                    onClick={() => setCircadianType('wolf')}
                  >
                    Wolf (Evening)
                  </button>
                </div>

                <div className="kairos-timeline">
                  {schedulerData[circadianType].map((slot, idx) => (
                    <div 
                      key={idx} 
                      className={`kairos-slot ${slot.type === 'focus' ? 'focus-block' : 'rest-block'}`}
                    >
                      <div className="kairos-time">{slot.time}</div>
                      <div className="kairos-label">{slot.label}</div>
                      <div 
                        className="kairos-energy"
                        style={{ color: slot.type === 'focus' ? 'var(--accent-violet)' : 'var(--accent-cyan)' }}
                      >
                        {slot.energy}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
