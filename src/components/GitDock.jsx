import { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react';
import { Player } from '@lordicon/react';
import server from '../assets/lottie/server.json';
import externalLink from '../assets/lottie/externalLink.json';
import repo from '../assets/lottie/repo.json';
import clock from '../assets/lottie/clock.json';
import star from '../assets/lottie/star.json';
import retry from '../assets/lottie/retry.json';
import analytics from '../assets/lottie/analytics.json';

/**
 * use lordicon animated icons everywhere
 * github
 * server
 * time
 * star
 * repos
 * analytics
 */

// ---- config ----
const USERNAME = 'Pritamx4';

const C = {
  bg: '#050505',
  glass: 'rgba(244,241,234,0.03)',
  hairline: 'rgba(244,241,234,0.12)',
  accent: '#F4F1EA',
  accent2: '#DDD7CC',
  ring: 'rgba(244,241,234,0.18)',
  text: '#F4F1EA',
  muted: 'rgba(244,241,234,0.70)',
  faint: 'rgba(244,241,234,0.42)',
  danger: '#F66F61',
};

const LANG_COLORS = {
  JavaScript: '#F1E05A',
  TypeScript: '#3178C6',
  Python: '#3572A5',
  Java: '#B07219',
  'C++': '#F34B7D',
  C: '#8A8A8A',
  'C#': '#3FA34D',
  HTML: '#E34C26',
  CSS: '#7C4DBE',
  Shell: '#89E051',
  Go: '#00ADD8',
  Rust: '#DEA584',
  PHP: '#7A86B8',
  Ruby: '#C0392B',
  Kotlin: '#A97BFF',
  Swift: '#F05138',
  Dart: '#00B4AB',
  Vue: '#41B883',
  Jupyter: '#DA5B0B',
  default: '#8B93A1',
};
const langColor = (l) => LANG_COLORS[l] || LANG_COLORS.default;

// ---------- helpers ----------
function formatNumber(n) {
  if (n == null) return '—';
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  return String(Math.round(n));
}
function formatSize(kb) {
  if (kb == null) return '—';
  const mb = kb / 1024;
  if (mb >= 1024) return (mb / 1024).toFixed(2) + ' GB';
  if (mb >= 1) return mb.toFixed(1) + ' MB';
  return Math.round(kb) + ' KB';
}
function timeAgo(dateStr) {
  if (!dateStr) return '—';
  const diffMs = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 60) return `${Math.max(mins, 0)}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}
async function safeJson(url) {
  const res = await fetch(url, { headers: { Accept: 'application/vnd.github+json' } });
  if (!res.ok) throw new Error(`${res.status}`);
  return res.json();
}
function useCountUp(target, duration = 800) {
  const [value, setValue] = useState(0);
  const prev = useRef(0);
  useEffect(() => {
    if (target == null) return;
    const start = prev.current;
    const t0 = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(start + (target - start) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
      else prev.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

// ---------- inject fonts / keyframes once ----------
function useDockStyles() {
  useEffect(() => {
    if (document.getElementById('gh-dock-style')) return;
    const style = document.createElement('style');
    style.id = 'gh-dock-style';
    style.textContent = `
      @keyframes gh-dock-pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(244,241,234,0.18); } 50% { box-shadow: 0 0 0 9px rgba(244,241,234,0); } }
      @keyframes gh-dock-ping { 0% { transform: scale(1); opacity: 0.8; } 70%, 100% { transform: scale(2.2); opacity: 0; } }
      @keyframes gh-dock-shimmer { 0% { background-position: -300% 0; } 100% { background-position: 300% 0; } }
      @keyframes gh-dock-spin { to { transform: rotate(360deg); } }
      .gh-dock-orb { animation: gh-dock-pulse 2.8s ease-in-out infinite; }
      .gh-dock-ping-node { animation: gh-dock-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite; transform-origin: center; }
      .gh-dock-skel {
        background: linear-gradient(90deg, rgba(244,241,234,0.03) 25%, rgba(244,241,234,0.09) 37%, rgba(244,241,234,0.03) 63%);
        background-size: 400% 100%;
        animation: gh-dock-shimmer 1.5s ease infinite;
        border-radius: 8px;
      }
      .gh-dock-bar { transition: filter 0.15s ease, transform 0.15s ease; transform-origin: bottom; }
      .gh-dock-bar:hover { filter: brightness(1.35); transform: scaleY(1.04); }
      .gh-dock-cell { transition: transform 0.12s ease, filter 0.12s ease; }
      .gh-dock-cell:hover { transform: scale(1.35); filter: brightness(1.3); }
      .gh-dock-retry:hover { filter: brightness(1.15); }
      .gh-dock-scroll::-webkit-scrollbar { width: 6px; height: 6px; }
      .gh-dock-scroll::-webkit-scrollbar-thumb { background: rgba(244,241,234,0.30); border-radius: 4px; }
      .gh-dock-scroll::-webkit-scrollbar-track { background: transparent; }
    `;
    document.head.appendChild(style);
  }, []);
}

// ---------- small ui atoms ----------
const GradientRing = ({ children, radius, thickness = 1.4, gradient }) => (
  <div
    style={{
      padding: thickness,
      borderRadius: radius,
      background: gradient || `linear-gradient(135deg, ${C.accent}88, ${C.accent}10 45%, rgba(255,255,255,0.10) 100%)`,
      flexShrink: 0,
    }}
  >
    {children}
  </div>
);

function HoverLordicon({ icon, size = 16, colorize = C.text, style, ariaLabel }) {
  const playerRef = useRef(null);

  const play = () => playerRef.current?.playFromBeginning();
  const reset = () => {
    playerRef.current?.goToFirstFrame();
    playerRef.current?.pause();
  };

  return (
    <span
      aria-label={ariaLabel}
      role={ariaLabel ? 'img' : undefined}
      onPointerEnter={play}
      onPointerLeave={reset}
      onFocus={play}
      onBlur={reset}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', lineHeight: 0, ...style }}
    >
      <Player ref={playerRef} icon={icon} size={size} colorize={colorize} />
    </span>
  );
}

function Skel({ w, h, r = 8 }) {
  return <div className="gh-dock-skel" style={{ width: w, height: h, borderRadius: r }} />;
}

function StatTile({ icon, label, value, sub }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: 10,
          background: 'rgba(242,179,61,0.10)',
          border: `1px solid ${C.hairline}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 0 }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 15,
            color: C.text,
            fontWeight: 700,
            letterSpacing: '-0.01em',
            whiteSpace: 'nowrap',
          }}
        >
          {value}
        </span>
        <span style={{ fontSize: 10, color: C.faint, textTransform: 'uppercase', letterSpacing: '0.09em', whiteSpace: 'nowrap', fontFamily: 'var(--font-ui)' }}>
          {sub || label}
        </span>
      </div>
    </div>
  );
}

function SectionLabel({ children, right }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
      <span style={{ fontSize: 10, color: C.faint, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, fontFamily: 'var(--font-ui)' }}>
        {children}
      </span>
      {right && (
        <span style={{ fontSize: 10, color: C.accent, fontFamily: 'var(--font-mono)', letterSpacing: '0.02em' }}>
          {right}
        </span>
      )}
    </div>
  );
}

function Divider() {
  return (
    <div
      style={{
        height: 1,
        margin: '16px 0',
        background: `linear-gradient(90deg, transparent, ${C.hairline}, transparent)`,
      }}
    />
  );
}

function Heatmap({ days }) {
  const scrollRef = useRef(null);

  const weeks = [];
  for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));
  const stops = [
    'rgba(244,241,234,0.04)',
    'rgba(242,179,61,0.25)',
    'rgba(242,179,61,0.50)',
    'rgba(242,179,61,0.75)',
    '#F2B33D',
  ];
  const levelColor = (l) => stops[Math.min(l, 4)];

  // Scroll to far right (most recent weeks) on initial load/render
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [days]);

  // Convert mouse wheel vertical scroll to horizontal scroll
  const handleWheel = (e) => {
    if (scrollRef.current && e.deltaY !== 0) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  // Generate Month headers for columns
  const monthLabels = [];
  let lastMonth = '';
  weeks.forEach((w, wi) => {
    if (w.length > 0 && w[0].date) {
      const dateObj = new Date(w[0].date);
      const monthName = dateObj.toLocaleString('en-US', { month: 'short' });
      if (monthName !== lastMonth) {
        monthLabels.push({ colIndex: wi, label: monthName });
        lastMonth = monthName;
      }
    }
  });

  return (
    <div style={{ width: '100%' }}>
      {/* Grid Container with Day Labels on Left */}
      <div style={{ display: 'flex', width: '100%', alignItems: 'flex-start' }}>
        {/* Day Labels Column with breathing space */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2.5,
            paddingTop: 15,
            paddingRight: 6,
            flexShrink: 0,
            fontSize: 8.5,
            color: C.faint,
            fontFamily: 'var(--font-mono)',
            lineHeight: '10px',
            userSelect: 'none',
          }}
        >
          <span style={{ height: 10, visibility: 'hidden' }}>Sun</span>
          <span style={{ height: 10 }}>Mon</span>
          <span style={{ height: 10, visibility: 'hidden' }}>Tue</span>
          <span style={{ height: 10 }}>Wed</span>
          <span style={{ height: 10, visibility: 'hidden' }}>Thu</span>
          <span style={{ height: 10 }}>Fri</span>
          <span style={{ height: 10, visibility: 'hidden' }}>Sat</span>
        </div>

        {/* Heatmap Grid Wrapper */}
        <div
          ref={scrollRef}
          onWheel={handleWheel}
          className="gh-dock-scroll"
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            minWidth: 0,
            overflowX: 'auto',
            paddingBottom: 4,
            touchAction: 'pan-x',
          }}
        >
          {/* Top Month Labels Row */}
          <div
            style={{
              position: 'relative',
              height: 12,
              marginBottom: 3,
              fontSize: 8.5,
              color: C.faint,
              fontFamily: 'var(--font-mono)',
              width: 'max-content',
            }}
          >
            {monthLabels.map((m, i) => (
              <span
                key={i}
                style={{
                  position: 'absolute',
                  left: m.colIndex * 13.5,
                  whiteSpace: 'nowrap',
                }}
              >
                {m.label}
              </span>
            ))}
          </div>

          {/* 7-Row Weeks Grid */}
          <div style={{ display: 'flex', gap: 3.5, width: 'max-content' }}>
            {weeks.map((w, wi) => (
              <div key={wi} style={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                {w.map((d, di) => (
                  <div
                    key={di}
                    className="gh-dock-cell"
                    title={`${d.date}: ${d.count} contribution${d.count === 1 ? '' : 's'}`}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 2,
                      background: levelColor(d.level),
                      boxShadow: d.level === 0 ? `inset 0 0 0 1px ${C.hairline}` : 'none',
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend Footer */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 8, justifyContent: 'flex-end' }}>
        <span style={{ fontSize: 8.5, color: C.faint, fontFamily: 'var(--font-ui)' }}>Less</span>
        {stops.map((s, i) => (
          <div
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: 2,
              background: s,
              boxShadow: i === 0 ? `inset 0 0 0 1px ${C.hairline}` : 'none',
            }}
          />
        ))}
        <span style={{ fontSize: 8.5, color: C.faint, fontFamily: 'var(--font-ui)' }}>More</span>
      </div>
    </div>
  );
}

function CommitSparklineChart({ values }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const data = values && values.length === 8 ? values : [0, 0, 0, 0, 0, 0, 0, 0];
  const total = data.reduce((a, b) => a + b, 0);

  const maxVal = Math.max(1, ...data);
  const avgVal = Math.round(total / 8);

  const width = 310;
  const height = 95;
  const padX = 14;
  const padTop = 12;
  const padBottom = 18;
  const chartH = height - padTop - padBottom;

  const points = data.map((v, i) => {
    const x = padX + i * ((width - 2 * padX) / 7);
    const y = padTop + chartH - (v / maxVal) * chartH;
    return { x, y, v, label: `W${i + 1}` };
  });

  let linePath = '';
  if (points.length > 0) {
    linePath = `M ${points[0].x.toFixed(1)},${points[0].y.toFixed(1)}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i === 0 ? i : i - 1];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[i + 2 < points.length ? i + 2 : i + 1];

      const cp1x = (p1.x + (p2.x - p0.x) / 6).toFixed(1);
      const cp1y = Math.min(height - padBottom, Math.max(padTop, p1.y + (p2.y - p0.y) / 6)).toFixed(1);
      const cp2x = (p2.x - (p3.x - p1.x) / 6).toFixed(1);
      const cp2y = Math.min(height - padBottom, Math.max(padTop, p2.y - (p3.y - p1.y) / 6)).toFixed(1);

      linePath += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
    }
  }

  const areaPath = linePath
    ? `${linePath} L ${points[points.length - 1].x.toFixed(1)},${(height - padBottom).toFixed(1)} L ${points[0].x.toFixed(1)},${(height - padBottom).toFixed(1)} Z`
    : '';

  const activePoint = hoveredIdx !== null ? points[hoveredIdx] : null;

  return (
    <div>
      {/* Top Left Stats (Peak & Avg) below Heading */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
        <span style={{ fontSize: 9.5, color: C.faint, fontFamily: 'var(--font-mono)' }}>
          Peak: <strong style={{ color: C.text }}>{maxVal}</strong>
        </span>
        <span style={{ fontSize: 9.5, color: C.faint, fontFamily: 'var(--font-mono)' }}>
          Avg: <strong style={{ color: C.text }}>{avgVal}</strong>/wk
        </span>
      </div>

      {/* SVG Chart Area (No Outer Border / Card) */}
      <div style={{ position: 'relative', width: '100%' }}>
        {/* Floating Tooltip */}
        {activePoint && (
          <div
            style={{
              position: 'absolute',
              top: -4,
              left: `${(activePoint.x / width) * 100}%`,
              transform: 'translate(-50%, -100%)',
              pointerEvents: 'none',
              zIndex: 10,
              background: 'rgba(16, 16, 16, 0.94)',
              border: '1px solid rgba(242,179,61,0.3)',
              borderRadius: 6,
              padding: '3px 7px',
              fontSize: 9.5,
              fontFamily: 'var(--font-mono)',
              color: C.text,
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <span style={{ color: '#F2B33D', fontWeight: 700 }}>{activePoint.label}:</span>
            <span>{activePoint.v} commits</span>
          </div>
        )}

        <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
          <defs>
            <linearGradient id="commitSparkGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F2B33D" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#F2B33D" stopOpacity="0.0" />
            </linearGradient>

            <filter id="commitNodeGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background Pillar Bars */}
          {points.map((pt, i) => {
            const isHovered = hoveredIdx === i;
            const barW = 12;
            const barH = height - padBottom - pt.y;
            return (
              <rect
                key={`bar-${i}`}
                x={pt.x - barW / 2}
                y={pt.y}
                width={barW}
                height={Math.max(2, barH)}
                rx="3"
                fill={isHovered ? 'rgba(242,179,61,0.18)' : 'rgba(244,241,234,0.025)'}
                style={{ transition: 'fill 0.15s ease' }}
              />
            );
          })}

          {/* Baseline */}
          <line
            x1={padX - 4}
            y1={height - padBottom}
            x2={width - padX + 4}
            y2={height - padBottom}
            stroke={C.hairline}
            strokeWidth="0.8"
            strokeDasharray="2 3"
          />

          {/* Vertical Scanline/Crosshair on Hover */}
          {activePoint && (
            <line
              x1={activePoint.x}
              y1={padTop - 4}
              x2={activePoint.x}
              y2={height - padBottom}
              stroke="#F2B33D"
              strokeWidth="0.8"
              strokeDasharray="2 2"
              opacity="0.6"
            />
          )}

          {/* Area Path */}
          {areaPath && <path d={areaPath} fill="url(#commitSparkGrad)" />}

          {/* Bezier Line */}
          {linePath && (
            <path
              d={linePath}
              fill="none"
              stroke="#F2B33D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#commitNodeGlow)"
            />
          )}

          {/* Data Points */}
          {points.map((pt, i) => {
            const isHovered = hoveredIdx === i;
            return (
              <g key={i}>
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r="12"
                  fill="transparent"
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                />

                {isHovered && (
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r="6"
                    fill="rgba(242,179,61,0.2)"
                    stroke="#F2B33D"
                    strokeWidth="1"
                  />
                )}

                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={isHovered ? 3.8 : 2.5}
                  fill="#111111"
                  stroke="#F2B33D"
                  strokeWidth={isHovered ? 2 : 1.5}
                  style={{ transition: 'all 0.15s ease', cursor: 'pointer' }}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                />

                <text
                  x={pt.x}
                  y={height - 5}
                  textAnchor="middle"
                  fill={isHovered ? '#F2B33D' : C.faint}
                  fontSize="8.5"
                  fontFamily="var(--font-mono)"
                  fontWeight={isHovered ? '700' : '400'}
                  style={{ transition: 'fill 0.15s ease' }}
                >
                  {pt.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

function LanguageBar({ languages }) {
  const total = languages.reduce((s, l) => s + l.count, 0) || 1;
  return (
    <div>
      <div style={{ display: 'flex', width: '100%', height: 7, borderRadius: 5, overflow: 'hidden', marginBottom: 12, gap: 2 }}>
        {languages.map((l) => (
          <div key={l.name} style={{ width: `${(l.count / total) * 100}%`, background: langColor(l.name), borderRadius: 3 }} />
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px 16px' }}>
        {languages.map((l) => (
          <div key={l.name} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: langColor(l.name), display: 'inline-block' }} />
            <span style={{ fontSize: 11.5, color: C.muted, fontWeight: 500, fontFamily: 'var(--font-body)' }}>{l.name}</span>
            <span style={{ fontSize: 11, color: C.faint, fontFamily: 'var(--font-mono)' }}>
              {Math.round((l.count / total) * 100)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const CIRCLE = 56;
const PANEL_W = 352;
const EDGE_MARGIN = 24;
const GAP = 14;

/**
 * Drop inside the section it should live in (e.g. your Contact section, which
 * needs position:relative). Fills it with an absolutely-positioned,
 * pointer-events-none layer so it never affects layout elsewhere.
 */
const GitDock = () => {
  useDockStyles();

  const wrapperRef = useRef(null);
  const circleRef = useRef(null);
  const panelRef = useRef(null);
  const dragInfo = useRef({ startX: 0, startY: 0, originX: 0, originY: 0, moved: false });

  const [bounds, setBounds] = useState({ w: 0, h: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [wantOpen, setWantOpen] = useState(false);
  const [rendered, setRendered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [expandDir, setExpandDir] = useState('up');
  const [isBubbleHovered, setIsBubbleHovered] = useState(false);

  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const el = wrapperRef.current;
    const update = () => {
      const r = el.getBoundingClientRect();
      setBounds({ w: r.width, h: r.height });
      setPos((p) => (p.x === 0 && p.y === 0 ? { x: r.width - CIRCLE - EDGE_MARGIN, y: r.height - CIRCLE - EDGE_MARGIN } : p));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const clamp = useCallback(
    (x, y) => ({
      x: Math.min(Math.max(x, EDGE_MARGIN), Math.max(EDGE_MARGIN, bounds.w - CIRCLE - EDGE_MARGIN)),
      y: Math.min(Math.max(y, EDGE_MARGIN), Math.max(EDGE_MARGIN, bounds.h - CIRCLE - EDGE_MARGIN)),
    }),
    [bounds]
  );

  const onPointerDown = (e) => {
    if (wantOpen) return;
    circleRef.current?.setPointerCapture?.(e.pointerId);
    dragInfo.current = { startX: e.clientX, startY: e.clientY, originX: pos.x, originY: pos.y, moved: false };
    setDragging(true);
  };
  const onPointerMove = (e) => {
    if (!dragging) return;
    const dx = e.clientX - dragInfo.current.startX;
    const dy = e.clientY - dragInfo.current.startY;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) dragInfo.current.moved = true;
    setPos(clamp(dragInfo.current.originX + dx, dragInfo.current.originY + dy));
  };
  const onPointerUp = () => {
    if (!dragging) return;
    setDragging(false);
    if (!dragInfo.current.moved) {
      setWantOpen((v) => !v);
      return;
    }
    setPos((p) => {
      const center = p.x + CIRCLE / 2;
      const snapX = center < bounds.w / 2 ? EDGE_MARGIN : Math.max(EDGE_MARGIN, bounds.w - CIRCLE - EDGE_MARGIN);
      return clamp(snapX, p.y);
    });
  };

  const loadData = useCallback(async () => {
    setStatus('loading');
    setErrorMsg('');
    try {
      const profile = await safeJson(`https://api.github.com/users/${USERNAME}`);
      let repos = [];
      for (let page = 1; page <= 3; page++) {
        const batch = await safeJson(`https://api.github.com/users/${USERNAME}/repos?per_page=100&page=${page}&sort=pushed`);
        repos = repos.concat(batch);
        if (batch.length < 100) break;
      }
      const totalStars = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);
      const totalSizeKb = repos.reduce((s, r) => s + (r.size || 0), 0);
      const lastUpdated = repos.reduce((latest, r) => (!latest || new Date(r.pushed_at) > new Date(latest) ? r.pushed_at : latest), null);

      const langCounts = {};
      repos.forEach((r) => {
        if (r.language) langCounts[r.language] = (langCounts[r.language] || 0) + 1;
      });
      const languages = Object.entries(langCounts)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 6);

      let heatDays = [];
      let totalContributions = null;
      let weeklyCommits = [0, 0, 0, 0, 0, 0, 0, 0];

      try {
        const contrib = await safeJson(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`);
        const all = contrib.contributions || [];
        heatDays = all.slice(-182);
        totalContributions = contrib.total?.lastYear ?? all.slice(-365).reduce((s, d) => s + d.count, 0);

        if (all.length > 0) {
          for (let i = 7; i >= 0; i--) {
            const end = all.length - i * 7;
            const start = Math.max(0, end - 7);
            const weekSlice = all.slice(start, end);
            weeklyCommits[7 - i] = weekSlice.reduce((sum, day) => sum + (day.count || 0), 0);
          }
        }
      } catch (e) {
        console.error('Error fetching contributions:', e);
      }

      if (weeklyCommits.every((c) => c === 0)) {
        try {
          const events = await safeJson(`https://api.github.com/users/${USERNAME}/events/public?per_page=100`);
          const now = Date.now();
          events
            .filter((ev) => ev.type === 'PushEvent')
            .forEach((ev) => {
              const weeksAgo = Math.floor((now - new Date(ev.created_at).getTime()) / (7 * 24 * 3600 * 1000));
              if (weeksAgo >= 0 && weeksAgo < 8) {
                const count = ev.payload?.commits?.length || ev.payload?.size || ev.payload?.distinct_size || 1;
                weeklyCommits[7 - weeksAgo] += count;
              }
            });
        } catch (e) {
          console.error('Error fetching weekly commits:', e);
        }
      }

      setData({ profile, totalRepos: profile.public_repos ?? repos.length, totalStars, totalSizeKb, lastUpdated, languages, heatDays, totalContributions, weeklyCommits });
      setStatus('ready');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message === '404' ? 'User not found' : err.message === '403' ? 'Rate limited — try again shortly' : 'Failed to load');
    }
  }, []);

  useEffect(() => {
    if (wantOpen && status === 'idle') loadData();
  }, [wantOpen, status, loadData]);

  useEffect(() => {
    let t;
    if (wantOpen) {
      setRendered(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    } else {
      setVisible(false);
      t = setTimeout(() => setRendered(false), 240);
    }
    return () => clearTimeout(t);
  }, [wantOpen]);

  useLayoutEffect(() => {
    if (!rendered || !panelRef.current) return;
    const measure = () => {
      const h = panelRef.current.getBoundingClientRect().height;
      const spaceAbove = pos.y;
      const spaceBelow = bounds.h - pos.y - CIRCLE;
      setExpandDir(spaceAbove >= h + GAP || spaceAbove >= spaceBelow ? 'up' : 'down');
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(panelRef.current);
    return () => ro.disconnect();
  }, [rendered, pos, bounds]);

  useEffect(() => {
    if (!wantOpen) return;
    const handler = (e) => {
      if (panelRef.current?.contains(e.target) || circleRef.current?.contains(e.target)) return;
      setWantOpen(false);
    };
    document.addEventListener('pointerdown', handler);
    return () => document.removeEventListener('pointerdown', handler);
  }, [wantOpen]);

  const repoCount = useCountUp(status === 'ready' ? data.totalRepos : null);
  const starCount = useCountUp(status === 'ready' ? data.totalStars : null);
  const contribCount = useCountUp(status === 'ready' ? data.totalContributions ?? null : null);

  const isRightSide = pos.x + CIRCLE / 2 > bounds.w / 2;
  const panelLeft = isRightSide
    ? Math.min(pos.x + CIRCLE - PANEL_W, bounds.w - PANEL_W - EDGE_MARGIN)
    : Math.max(pos.x, EDGE_MARGIN);

  return (
    <div ref={wrapperRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 40, fontFamily: 'var(--font-body)' }}>
      {/* circle */}
      <div
        ref={circleRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onMouseEnter={() => setIsBubbleHovered(true)}
        onMouseLeave={() => setIsBubbleHovered(false)}
        className={!wantOpen && !dragging ? 'gh-cap-orb' : ''}
        style={{
          position: 'absolute',
          left: pos.x,
          top: pos.y,
          width: CIRCLE,
          height: CIRCLE,
          borderRadius: '50%',
          cursor: dragging ? 'grabbing' : 'grab',
          pointerEvents: 'auto',
          padding: 1.5,
          background: wantOpen
            ? `linear-gradient(135deg, ${C.accent}, ${C.accent2})`
            : `linear-gradient(135deg, rgba(244,241,234,0.34), rgba(244,241,234,0.06) 60%)`,
          boxShadow: '0 8px 22px rgba(0,0,0,0.55)',
          transition: dragging
            ? 'none'
            : 'left 0.35s cubic-bezier(0.22,1,0.36,1), top 0.35s cubic-bezier(0.22,1,0.36,1), background 0.25s ease',
          touchAction: 'none',
          userSelect: 'none',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: `radial-gradient(circle at 35% 25%, #111111, ${C.bg})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Primary GitHub launcher Lordicon */}
          <HoverLordicon icon={analytics} size={28} colorize={C.text} ariaLabel="GitHub stats launcher" />
        </div>
      </div>

      {/* Bubble Launcher Hover Tooltip Badge */}
      <div
        style={{
          position: 'absolute',
          top: pos.y + CIRCLE / 2 - 14,
          ...(pos.x > bounds.w / 2
            ? { right: bounds.w - pos.x + 10 }
            : { left: pos.x + CIRCLE + 10 }),
          pointerEvents: 'none',
          zIndex: 45,
          opacity: isBubbleHovered && !wantOpen && !dragging ? 1 : 0,
          transform: isBubbleHovered && !wantOpen && !dragging ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(2px)',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
          background: 'rgba(14, 14, 14, 0.88)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: `1px solid ${C.hairline}`,
          borderRadius: 20,
          padding: '5px 11px',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          boxShadow: '0 8px 24px rgba(0,0,0,0.5), 0 0 12px rgba(242,179,61,0.12)',
          whiteSpace: 'nowrap',
          userSelect: 'none',
        }}
      >
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#F2B33D', boxShadow: '0 0 6px #F2B33D' }} />
        <span style={{ fontSize: 11, fontWeight: 600, color: C.text, fontFamily: 'var(--font-mono)' }}>
          @{USERNAME} <span style={{ color: C.faint, fontWeight: 400 }}>· GitHub Activity</span>
        </span>
      </div>

      {/* panel */}
      {rendered && (
        <div
          ref={panelRef}
          style={{
            position: 'absolute',
            left: panelLeft,
            ...(expandDir === 'up' ? { bottom: bounds.h - pos.y + GAP } : { top: pos.y + CIRCLE + GAP }),
            width: PANEL_W,
            borderRadius: 22,
            padding: 1.3,
            background: `linear-gradient(135deg, rgba(244,241,234,0.22), rgba(244,241,234,0.05) 45%, rgba(255,255,255,0.05) 100%)`,
            pointerEvents: 'auto',
            boxShadow: '0 24px 60px rgba(0,0,0,0.55)',
            transformOrigin: expandDir === 'up' ? 'bottom center' : 'top center',
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1) translateY(0)' : `scale(0.92) translateY(${expandDir === 'up' ? 10 : -10}px)`,
            transition: 'opacity 0.22s ease, transform 0.26s cubic-bezier(0.22,1,0.36,1), left 0.3s ease',
          }}
        >
          <div
            className="gh-cap-scroll"
            style={{
              maxHeight: '72vh',
              overflowY: 'auto',
              borderRadius: 21,
              background: 'rgba(10,10,10,0.92)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '20px 20px 18px',
              border: `1px solid ${C.hairline}`,
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
              color: C.text,
            }}
          >
            {status === 'loading' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                  <Skel w={40} h={40} r={20} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <Skel w={110} h={12} />
                    <Skel w={70} h={10} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14, marginBottom: 18 }}>
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      <Skel w={30} h={30} r={10} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <Skel w={40} h={12} />
                        <Skel w={50} h={8} />
                      </div>
                    </div>
                  ))}
                </div>
                <Skel w="100%" h={7} r={5} />
                <div style={{ height: 14 }} />
                <Skel w="100%" h={64} r={10} />
              </div>
            )}

            {status === 'error' && (
              <div style={{ padding: '10px 2px' }}>
                <div style={{ fontSize: 12.5, color: C.danger, marginBottom: 12, lineHeight: 1.5 }}>{errorMsg}</div>
                <button
                  onClick={loadData}
                  className="gh-cap-retry"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 11.5,
                    fontWeight: 600,
                    color: C.bg,
                    background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`,
                    border: `1px solid ${C.accent2}`,
                    borderRadius: 10,
                    padding: '7px 12px',
                    cursor: 'pointer',
                  }}
                >
                  {/* Retry action Lordicon */}
                  <HoverLordicon icon={retry} size={12} colorize={C.bg} ariaLabel="Retry stats" /> Retry
                </button>
              </div>
            )}

            {status === 'ready' && data && (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                  <div style={{ position: 'relative' }}>
                    <GradientRing radius={999} thickness={2}>
                      {data.profile.avatar_url ? (
                        <img src={data.profile.avatar_url} alt="" style={{ width: 40, height: 40, borderRadius: '50%', display: 'block' }} />
                      ) : (
                        <div style={{ width: 40, height: 40, borderRadius: '50%', background: C.bg }} />
                      )}
                    </GradientRing>
                    {/* <div
                      style={{
                        position: 'absolute',
                        right: -2,
                        bottom: -2,
                        width: 18,
                        height: 18,
                        borderRadius: '50%',
                        background: C.bg,
                        border: `2px solid ${C.glass}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {/* External GitHub profile Lordicon */}
                    {/* <HoverLordicon icon={externalLink} size={10} colorize={C.text} ariaLabel="Open GitHub profile" />
                    </div> */}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14.5, fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {data.profile.name || data.profile.login}
                    </div>
                    <a
                      href={data.profile.html_url}
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11.5, color: C.muted, textDecoration: 'none' }}
                    >
                      @{data.profile.login}
                      {/* External profile link Lordicon */}
                      <HoverLordicon icon={externalLink} size={10} colorize={C.text} ariaLabel="Open profile in new tab" />
                    </a>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px 10px' }}>
                  {/* Repository count Lordicon */}
                  <StatTile icon={<HoverLordicon icon={repo} size={15} colorize={C.text} ariaLabel="Repositories" />} label="Repos" value={formatNumber(repoCount)} />
                  {/* Star count Lordicon */}
                  <StatTile icon={<HoverLordicon icon={star} size={15} colorize={C.text} ariaLabel="Stars" />} label="Stars" value={formatNumber(starCount)} />
                  {/* Storage size Lordicon */}
                  <StatTile icon={<HoverLordicon icon={server} size={15} colorize={C.text} ariaLabel="Disk size" />} label="Disk size" value={formatSize(data.totalSizeKb)} />
                  {/* Last updated Lordicon */}
                  <StatTile icon={<HoverLordicon icon={clock} size={15} colorize={C.text} ariaLabel="Last updated" />} label="Last updated" value={timeAgo(data.lastUpdated)} />
                </div>

                {data.languages.length > 0 && (
                  <>
                    <Divider />
                    <SectionLabel>Languages</SectionLabel>
                    <LanguageBar languages={data.languages} />
                  </>
                )}

                {data.heatDays.length > 0 && (
                  <>
                    <Divider />
                    <SectionLabel right={data.totalContributions != null ? `${formatNumber(contribCount)} / yr` : undefined}>
                      Contributions
                    </SectionLabel>
                    <Heatmap days={data.heatDays} />
                  </>
                )}

                <Divider />
                <SectionLabel right={data.weeklyCommits ? `${formatNumber(data.weeklyCommits.reduce((a, b) => a + b, 0))} / 8 wks` : undefined}>
                  Weekly Commits
                </SectionLabel>
                <CommitSparklineChart values={data.weeklyCommits} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GitDock;