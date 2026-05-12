/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './SpaceDashboard.css';

const analytics = [
  { id: 1, title: 'QUANTUM_SYNC',   value: '99',     unit: '%',      desc: 'Real-time database synchronization status.',       color: '#00f7ff', pct: '99%'  },
  { id: 2, title: 'NEURAL_LOAD',    value: '1.2',    unit: 'ms',     desc: 'Average processing latency across nodes.',         color: '#a855f7', pct: '30%'  },
  { id: 3, title: 'SHIELD_STATUS',  value: 'SEC',    unit: 'URE',    desc: 'Current encryption and firewall integrity.',       color: '#8cf472', pct: '100%' },
  { id: 4, title: 'UPTIME_SIGNAL',  value: '24/7',   unit: 'Live',   desc: 'Continuous system availability monitoring.',      color: '#f472b6', pct: '100%' },
];

const termLines = [
  { text: 'HUB_STATUS:',  val: 'OPTIMAL',    ok: true  },
  { text: 'ENCRYPTION:',  val: 'AES_256',    ok: true  },
  { text: 'NEURAL_NET:',  val: 'CONNECTED',  ok: true  },
  { text: 'FIREWALL:',    val: 'ACTIVE',     ok: true  },
  { text: 'UPTIME:',      val: '99.97%',     ok: true, cursor: true },
];

const barHeights = [35, 60, 45, 80, 55, 90, 70, 95];

export default function SpaceDashboard() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('hub-active')),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.hub-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hub hub-reveal">

      {/* decorations */}
      <div className="hub-grid" />
      <div className="hub-beam" />
      <div className="hub-bracket tl" /><div className="hub-bracket tr" />
      <div className="hub-bracket bl" /><div className="hub-bracket br" />

      {/* header */}
      <div className="hub-head">
        <h2 className="hub-title">CENTRAL_INTELLIGENCE_HUB</h2>
        <div className="hub-status">
          <span className="status-dot" />
          ALL SYSTEMS NOMINAL
        </div>
      </div>

      {/* cards */}
      <div className="hub-cards">
        {analytics.map((item, i) => (
          <div
            key={item.id}
            className="hcard"
            style={{ '--ac': item.color, '--i': i, '--pct': item.pct }}
          >
            <span className="hcard-pulse" />
            <span className="hcard-idx">0{i + 1}</span>

            <div className="hcard-val">
              <span className="hcard-num">{item.value}</span>
              <span className="hcard-unit">{item.unit}</span>
            </div>

            <div className="hcard-title">{item.title}</div>
            <p className="hcard-desc">{item.desc}</p>

            <div className="hcard-bar">
              <div className="hcard-bar-fill" />
            </div>
          </div>
        ))}
      </div>

      {/* bottom row */}
      <div className="hub-bottom">

        {/* terminal */}
        <div className="hub-terminal">
          <div className="term-header">&gt;&gt; SYSTEM_TERMINAL v2.4.1</div>
          {termLines.map((l, i) => (
            <div className="term-line" key={i} style={{ '--td': `${i * 0.3}s` }}>
              <span className="term-prompt">&gt;&gt;</span>
              {l.text}
              <span className={l.ok ? 'term-ok' : 'term-warn'}>{l.val}</span>
              {l.cursor && <span className="term-cursor" />}
            </div>
          ))}
        </div>

        {/* bar chart */}
        <div className="hub-chart">
          <div className="chart-header">&gt;&gt; NEURAL_LOAD / TIMELINE</div>
          <div className="chart-bars">
            {barHeights.map((h, i) => (
              <div
                key={i}
                className="chart-bar"
                style={{ '--h': `${h}%`, '--td': `${i * 0.1}s` }}
              />
            ))}
          </div>
          <div className="chart-label">PROCESSING LOAD — LAST 8 CYCLES</div>
        </div>

      </div>
    </section>
  );
}