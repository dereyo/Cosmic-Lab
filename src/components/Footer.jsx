/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('gateway-active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.footer-reveal').forEach(el => observer.observe(el));
  }, []);

  return (
    <footer className="cosmic-gateway-footer footer-reveal">
      {/* طبقة النجوم الكثيفة جداً (150 نجمة) */}
      <div className="infinite-star-field">
        {[...Array(150)].map((_, i) => (
          <div 
            key={i} 
            className="stellar-dot" 
            style={{
              '--top': `${Math.random() * 100}%`,
              '--left': `${Math.random() * 100}%`,
              '--color': i % 3 === 0 ? '#00f7ff' : (i % 3 === 1 ? '#a855f7' : '#ffffff'),
              '--size': `${1 + Math.random() * 2}px`,
              '--dur': `${2 + Math.random() * 4}s`,
              '--delay': `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="footer-main-layout">
        {/* القسم الأول: الهوية الرقمية */}
        <div className="brand-outpost">
          <h2 className="brand-logo">GALAXY_<span>LAB</span></h2>
          <p className="mission-text">
            Architecting the future of software and IT solutions. 
            From Tanta University to the digital frontier.
          </p>
          <div className="operator-info">
            <span className="pulse-cyan"></span>
            SYSTEM_OPERATOR: RYO
          </div>
        </div>

        {/* القسم الثاني: أقسام الموقع (Coordinates) */}
        <div className="footer-nav-nodes">
          <h3 className="node-title">// NAV_COORDINATES</h3>
          <ul className="nav-list">
            <li><a href="#hero">ORIGIN_BASE</a></li>
            <li><a href="#planets">PLANET_INDEX</a></li>
            <li><a href="#journey">MISSION_PATH</a></li>
            <li><a href="#hub">CORE_DASHBOARD</a></li>
          </ul>
        </div>

        {/* القسم الثالث: تواصل المبرمجين (Uplink Channels) */}
        <div className="dev-channels">
          <h3 className="node-title">// DEV_UPLINK</h3>
          <div className="social-grid">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="channel-box">
              <span className="ch-icon">GH</span>
              <span className="ch-label">GITHUB</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="channel-box">
              <span className="ch-icon">LN</span>
              <span className="ch-label">LINKEDIN</span>
            </a>
            <a href="mailto:ryo@example.com" className="channel-box">
              <span className="ch-icon">@</span>
              <span className="ch-label">EMAIL</span>
            </a>
          </div>
        </div>
      </div>

      {/* شريط البيانات السفلي */}
      <div className="bottom-telemetry">
        <div className="scan-line"></div>
        <div className="telemetry-content">
          <p>© 2026 GALAXY_LAB. ALL RIGHTS RESERVED.</p>
          <div className="coded-by">
            CODED_BY <span className="highlight-name">RYO</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;