/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './GalaxyRoadmap.css';

const GalaxyRoadmap = () => {
  const journey = [
    { id: 1, title: 'Ignition', phase: 'Phase 01', task: 'Core Logic & Algorithms' },
    { id: 2, title: 'Atmosphere', phase: 'Phase 02', task: 'Frontend Architecture' },
    { id: 3, title: 'Deep Space', phase: 'Phase 03', task: 'Backend Constellations' },
    { id: 4, title: 'Supernova', phase: 'Phase 04', task: 'Full-Stack Mastery' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ignite');
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.star-node').forEach(node => observer.observe(node));
  }, []);

  return (
    <section className="star-path-section">
      <div className="star-background"></div>
      
      <div className="path-header">
        <h2 className="path-main-title">STELLAR_JOURNEY</h2>
        <div className="scanner-line"></div>
      </div>

      <div className="star-path-container">
        {journey.map((point, index) => (
          <div key={point.id} className="star-node" style={{ '--delay': index }}>
            <div className="node-visual-group">
              <div className="core-star">
                <div className="star-inner-glow"></div>
              </div>
              <div className="connection-beam"></div>
            </div>

            <div className="node-data-card">
              <span className="phase-label">{point.phase}</span>
              <h3 className="node-name">{point.title}</h3>
              <p className="node-task">{point.task}</p>
              
              <div className="data-bits">
                <span>0101</span>
                <span>SYNC</span>
                <span>LIVE</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalaxyRoadmap;