// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-infinity">
      <div className="hero-container">
        
        {/* المحتوى النصي - يظهر بتوقيت دقيق بعد الأرض */}
        <div className="hero-content">
          <div className="reveal-wrapper">
             <h1 className="hero-title">
               <span className="line-1">BEYOND</span>
               <span className="line-2 accent">THE HORIZON</span>
             </h1>
          </div>
          
          <p className="hero-subtitle">
            Step into the next generation of space education. 
            Where high-fidelity simulations meet orbital learning.
          </p>

          <div className="hero-cta-group">
            <button className="btn-glow">Explore Galaxies</button>
            <div className="divider-line"></div>
            <button className="btn-minimal">Our Mission</button>
          </div>
        </div>

        {/* الكوكب - بدون حواف وبإضاءة مدمجة */}
        <div className="hero-visual">
          <div className="earth-sphere-wrapper">
            {/* توهج خلفي ناعم يدمج الأرض بالفضاء */}
            <div className="earth-backlight"></div>
            
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/2/22/Earth_Western_Hemisphere_transparent_background.png" 
              alt="Earth" 
              className="earth-sphere"
            />
            
            {/* طبقة إضاءة علوية لإضافة عمق نيون */}
            <div className="earth-overlay-glow"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;