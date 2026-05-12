import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Hero from './components/Hero';
import PlanetsGrid from './components/PlanetsGrid';
import GalaxyRoadmap from './components/GalaxyRoadmap';
import SpaceDashboard from "./components/SpaceDashboard";
import Footer from "./components/Footer";
import CodeLaunchpad from "./components/CodeLaunchpad";
import { Menu, X } from 'lucide-react';

function App() {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);
  

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      
      {/* 1. الخلفية المتحركة (Nebula) */}
      <div className="fixed inset-0 z-[-2] animate-space-flow">
        <div className="nebula-overlay"></div>
      </div>

      {/* 2. النجوم (Particles) */}
{/* 2. النجوم (Particles) - اجعليها في طبقة علوية ولكن شفافة للمس */}
<div className="fixed inset-0 z-[1] pointer-events-none">
  {init && (
    <Particles
      id="tsparticles"
      options={{
        fpsLimit: 120,
        particles: {
          number: { value: 160, density: { enable: true, area: 800 } },
          color: { value: ["#00f7ff", "#a855f7", "#ffffff"] }, // ألوانك المفضلة
          opacity: { value: { min: 0.2, max: 0.8 } },
          size: { value: { min: 1, max: 3 } },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.2, // الخطوط الأساسية خفيفة
            width: 1
          },
          move: { enable: true, speed: 0.6 }
        },
        interactivity: {
          events: { 
            /* السر هنا: اجعلي التفاعل يعمل حتى لو الطبقة شفافة */
            onHover: { enable: true, mode: "grab" } 
          },
          modes: {
            grab: { 
              distance: 250, 
              links: { opacity: 0.7, color: "#00f7ff" } // لون الشبكة عند الماوس
            }
          }
        },
        /* للسماح بالماوس بالمرور عبر النجوم للمكونات تحتها */
        detectRetina: true,
      }}
    />
  )}
</div>

      {/* 3. الكواكب الخلفية الثابتة */}
      <div className="fixed inset-0 z-[0] pointer-events-none">
          <div 
            className="planet-glow w-64 h-64 md:w-96 md:h-96"
            style={{ 
              position: 'absolute',
              right: '5%', 
              top: '10%', 
              '--planet-color': '#7e22ce', 
              '--planet-shadow': 'rgba(147, 51, 234, 0.4)' 
            }}
          ></div>

          <div 
            className="planet-glow w-48 h-48 md:w-72 md:h-72"
            style={{ 
              position: 'absolute',
              left: '5%', 
              bottom: '10%', 
              '--planet-color': '#06b6d4', 
              '--planet-shadow': 'rgba(6, 182, 212, 0.3)' 
            }}
          ></div>
      </div>

      {/* 4. الناف بار (Navbar) */}
<nav className="navbar-capsule">
      <div className="nav-logo">
        GALAXY<span>LAB</span>
      </div>

      {/* الروابط: ستأخذ كلاس إضافي 'mobile-active' عند النقر */}
      <ul className={`nav-links ${isMobile ? "mobile-active" : ""}`}>
        <li><a href="#home" onClick={() => setIsMobile(false)}>Home</a></li>
        <li><a href="#planets" onClick={() => setIsMobile(false)}>Planets</a></li>
        <li><a href="#galaxies" onClick={() => setIsMobile(false)}>Galaxies</a></li>
        <li><a href="#about" onClick={() => setIsMobile(false)}>About</a></li>
      </ul>

      <div className="nav-actions">
        <button className="join-btn">JOIN LAB</button>
      </div>

      {/* أيقونة الموبايل: تظهر وتختفي عبر الميديا كويري */}
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <X size={30} /> : <Menu size={30} />}
      </button>
    </nav>

      {/* 5. قسم الهيرو (Hero Section) */}
      <Hero />
      <PlanetsGrid />
      <GalaxyRoadmap />
      <CodeLaunchpad />
      <SpaceDashboard />
      <Footer />

    </div>
  );
}

export default App;