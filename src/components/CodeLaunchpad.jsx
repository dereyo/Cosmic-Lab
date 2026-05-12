/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Code, Cpu, Zap, Globe } from 'lucide-react';
import './CodeLaunchpad.css';

const missionCards = [
  {
    id: 1,
    icon: <Code size={22} />,
    title: 'BINARY_FOUNDATION',
    desc: 'Programming is the art of telling a computer what to do. Start with HTML/CSS and witness your vision come alive on screen.',
    status: 'STABLE',
    color: '#06b6d4',
    pct: '95%',
  },
  {
    id: 2,
    icon: <Cpu size={22} />,
    title: 'LOGIC_ARCHITECTURE',
    desc: 'Logic is the language of the future. Master JavaScript to build smarter, faster, and cooler systems beyond the ordinary.',
    status: 'OPTIMIZING',
    color: '#a855f7',
    pct: '72%',
  },
  {
    id: 3,
    icon: <Zap size={22} />,
    title: 'REACT_ENGINES',
    desc: 'Move to React and React Native. Build full-scale apps and conquer the coding galaxy — one component at a time.',
    status: 'IGNITED',
    color: '#06b6d4',
    pct: '88%',
  },
  {
    id: 4,
    icon: <Globe size={22} />,
    title: 'GLOBAL_IMPACT',
    desc: 'Your code has no borders. Learn, build, and deploy apps that solve real problems. The world awaits your digital signature.',
    status: 'LIVE',
    color: '#a855f7',
    pct: '100%',
  },
];

const tickerItems = [
  { emoji: '🚀', label: 'RYO_STATUS',     val: 'CODING',  color: '#06b6d4' },
  { emoji: '⚡', label: 'NEURAL_NET',     val: 'ONLINE',  color: '#8cf472' },
  { emoji: '🛡️', label: 'ENCRYPTION',    val: 'AES_256', color: '#8cf472' },
  { emoji: '📡', label: 'UPTIME',         val: '99.97%',  color: '#a855f7' },
  { emoji: '🔥', label: 'COMMITS_TODAY', val: '+47',      color: '#f472b6' },
  { emoji: '🌍', label: 'DEPLOY_STATUS', val: 'LIVE',     color: '#06b6d4' },
  { emoji: '⚛️', label: 'REACT_VERSION', val: '19.0',    color: '#a855f7' },
  { emoji: '🧠', label: 'BUGS_CRUSHED',  val: '1,337',   color: '#8cf472' },
];

export default function CodeLaunchpad() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('lp-active')),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.lp-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="lp lp-reveal">

      {/* ── bg decorations ── */}
      <div className="lp-bg" />
      <div className="lp-grid" />
      <div className="lp-beam" />

      {/* ── header ── */}
      <div className="lp-head">
        <div className="head-left">
          <div className="lp-eyebrow">
            <span className="ey-dot" />
            SYSTEM_ENCOURAGEMENT_ACTIVE
          </div>
          <h2 className="lp-title">
            IGNITE_YOUR_<span>PASSION</span>
          </h2>
          <p className="lp-sub">
            The transition from an IT student to a professional developer is a journey
            of a thousand bugs. Embrace the challenge and build your legacy. 🛰️
          </p>
        </div>

        {/* progress ring */}
        <div className="head-ring">
          <svg className="ring-svg" viewBox="0 0 80 80">
            <defs>
              <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <circle className="ring-track" cx="40" cy="40" r="35" />
            <circle
              className="ring-fill"
              cx="40" cy="40" r="35"
              transform="rotate(-90 40 40)"
            />
            <text
              x="40" y="40"
              fontFamily="Orbitron" fontSize="13" fontWeight="900"
              fill="#f9fafb" dominantBaseline="middle" textAnchor="middle"
            >
              90%
            </text>
          </svg>
          <div className="ring-label">MISSION<br />PROGRESS</div>
        </div>
      </div>

      {/* ── cards ── */}
      <div className="lp-cards">
        {missionCards.map((card, i) => (
          <div
            key={card.id}
            className="lp-card"
            style={{ '--ac': card.color, '--pct': card.pct, '--i': i }}
          >
            {/* top accent line via CSS ::before */}
            <div className="lp-card-top">
              <div className="lp-icon-box" style={{ color: card.color }}>
                {card.icon}
              </div>
              <span className="lp-card-num">0{card.id}</span>
            </div>

            <div className="lp-card-body">
              <div className="lp-card-status">
                <span className="lp-sdot" />
                {card.status}
              </div>
              <h3 className="lp-card-title">{card.title}</h3>
              <p className="lp-card-text">{card.desc}</p>
              <div className="lp-bar">
                <div className="lp-bar-fill" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── live ticker ── */}
      <div className="lp-ticker">
        <div className="ticker-label">
          <span className="ticker-dot" />
          LIVE_FEED
        </div>
        <div className="ticker-track">
          <div className="ticker-inner">
            {/* doubled for seamless loop */}
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <div className="ticker-item" key={i}>
                {item.emoji}&nbsp;{item.label}&nbsp;
                <span style={{ color: item.color }}>{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

