
import { useEffect } from 'react';
import './PlanetsGrid.css';

const PlanetsGrid = () => {
  const planets = [
    { id: 1, name: 'Mercury Web', desc: 'Master React & Modern Web Development', color: '#a855f7', img: 'https://i.ytimg.com/vi/kEuH17cqtUc/hqdefault.jpg' },
    { id: 2, name: 'Venus AI', desc: 'Explore Neural Networks & Deep Learning', color: '#00f7ff', img: 'https://www.popsci.com/wp-content/uploads/2023/02/16/Neural_network.jpg?quality=85&w=2000' },
    { id: 3, name: 'Earth Design', desc: 'UI/UX Cosmic Visual Experience', color: '#f472b6', img: 'https://miro.medium.com/1*zvZ5Wpro7WRyoGF6bACtCw.jpeg' },
    { id: 4, name: 'Mars Code', desc: 'Advanced Python & Logic Exploration', color: '#8cf472', img: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210917204112/Top-10-Advance-Python-Concepts-That-You-Must-Know.png' },
    { id: 5, name: 'Jupiter Data', desc: 'Big Data & Cloud Systems Analysis', color: '#72e5f4', img: 'https://media.licdn.com/dms/image/v2/D4D12AQH3uX6Yew7T6w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1694288073387?e=2147483647&v=beta&t=hMlRnfbsEB_upPXH2Xk_36LSN4w8yW382Kf_OVyGWSs' },
    { id: 6, name: 'Saturn Cyber', desc: 'Defensive Security & Network Rings', color: '#f4a472', img: 'https://www.opensight.nl/content/cyber-resilience--1024x574.jpg' },
    { id: 7, name: 'Uranus Mobile', desc: 'Cross-Platform App Development', color: '#f47272', img: 'https://vrdapps.com/wp-content/uploads/2025/02/ui-ux-representations-with-smartphone_23-2150201874.jpg' },
    { id: 8, name: 'Neptune Game', desc: '3D Physics & Immersive Engine Rendering', color: '#7278f4', img: 'https://nbyit.com/wp-content/uploads/2025/10/The-Rise-of-AI-in-3D-Modeling-1024x559.webp' },
    { id: 9, name: 'Pluto Labs', desc: 'Emerging Tech & Experimental Research', color: '#c072f4', img: 'https://media.licdn.com/dms/image/v2/D4E12AQG92Re6ERetww/article-cover_image-shrink_600_2000/B4EZXTcPWXHgAQ-/0/1743009150813?e=2147483647&v=beta&t=8KMeslMoIdkBzuXTHVeeKuAMKhCy0nHY15wkrbfTdwE' },
  ];

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll('.planet-card');
    cards.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="planets-section" id="planets">
      <div className="section-header">
        <h2 className="section-title">CHOOSE YOUR <span className="accent">DESTINATION</span></h2>
        <p className="section-subtitle">Every planet is a complete learning path waiting for your arrival.</p>
      </div>

      <div className="planets-container">
        {planets.map((planet, index) => (
          <div 
            key={planet.id} 
            className="planet-card" 
            style={{ 
              '--accent-color': planet.color,
              '--delay': `${index * 0.1}s` 
            }}
          >
            <div className="planet-visual">
               <img src={planet.img} alt={planet.name} className="planet-img" />
               <div className="planet-halo"></div>
            </div>
            
            <div className="planet-info">
              <h3 className="planet-name">{planet.name}</h3>
              <p className="planet-desc">{planet.desc}</p>
              <button className="btn-land">Land Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlanetsGrid;