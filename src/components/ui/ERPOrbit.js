import React from 'react';

const NODES = [
  { id: 'bc',         x: 50, y: 50, r: 26, label: 'BC',         full: 'Business Central', color: '#0099FF', main: true },
  { id: 'finance',    x: 18, y: 18, r: 15, label: 'Finance',    color: '#0099FF' },
  { id: 'sales',      x: 80, y: 16, r: 13, label: 'Sales',      color: '#00C2FF' },
  { id: 'purchase',   x: 85, y: 54, r: 13, label: 'Purchase',   color: '#FF7A00' },
  { id: 'inventory',  x: 70, y: 82, r: 15, label: 'Inventory',  color: '#FF5500' },
  { id: 'production', x: 28, y: 83, r: 13, label: 'Production', color: '#00D9FF' },
  { id: 'warehouse',  x: 12, y: 60, r: 12, label: 'Warehouse',  color: '#00C2FF' },
  { id: 'crm',        x: 50, y: 8,  r: 12, label: 'CRM',        color: '#0099FF' },
];
const LINKS = NODES.slice(1).map(n => ['bc', n.id]);
const VB = 400;
const cx = n => (n.x / 100) * VB;
const cy = n => (n.y / 100) * VB;

export default function ERPOrbit({ size = 420 }) {
  return (
    <svg viewBox={`0 0 ${VB} ${VB}`} width={size} height={size} style={{ maxWidth: '100%', display: 'block' }}>
      <defs>
        {NODES.map(n => (
          <radialGradient key={n.id} id={`g_${n.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor={n.color} stopOpacity=".88" />
            <stop offset="100%" stopColor={n.color} stopOpacity=".22" />
          </radialGradient>
        ))}
        <filter id="glow">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* subtle grid */}
      <g opacity=".04">
        {[0,1,2,3,4,5].map(i => (
          <React.Fragment key={i}>
            <line x1={i*80} y1={0} x2={i*80} y2={VB} stroke="#0099FF" strokeWidth=".5" />
            <line x1={0} y1={i*80} x2={VB} y2={i*80} stroke="#0099FF" strokeWidth=".5" />
          </React.Fragment>
        ))}
      </g>

      {/* orbit ring */}
      <circle cx={cx(NODES[0])} cy={cy(NODES[0])} r="140"
        fill="none" stroke="#0099FF" strokeWidth=".8" strokeOpacity=".14" strokeDasharray="5 4" />

      {/* connection lines */}
      {LINKS.map(([a, b]) => {
        const na = NODES.find(n => n.id === a);
        const nb = NODES.find(n => n.id === b);
        return <line key={b} x1={cx(na)} y1={cy(na)} x2={cx(nb)} y2={cy(nb)}
          stroke={nb.color} strokeWidth=".9" strokeOpacity=".22" />;
      })}

      {/* animated data dots */}
      {LINKS.slice(0, 5).map(([a, b], i) => {
        const na = NODES.find(n => n.id === a);
        const nb = NODES.find(n => n.id === b);
        return (
          <circle key={`dot_${b}`} r="3.5" fill={nb.color} filter="url(#glow)">
            <animateMotion dur={`${2.2 + i * .55}s`} repeatCount="indefinite" begin={`${i * .7}s`}
              path={`M${cx(na)},${cy(na)} L${cx(nb)},${cy(nb)}`} />
            <animate attributeName="opacity" values="0;1;1;0"
              dur={`${2.2 + i * .55}s`} repeatCount="indefinite" begin={`${i * .7}s`} />
          </circle>
        );
      })}

      {/* satellite nodes */}
      {NODES.map((n, idx) => (
        <g key={n.id}>
          <circle cx={cx(n)} cy={cy(n)} r={n.r + 7}
            fill="none" stroke={n.color} strokeWidth=".7" strokeOpacity=".2">
            <animate attributeName="r" values={`${n.r+5};${n.r+9};${n.r+5}`}
              dur="3s" repeatCount="indefinite" begin={`${idx * .4}s`} />
          </circle>
          <circle cx={cx(n)} cy={cy(n)} r={n.r}
            fill={`url(#g_${n.id})`} stroke={n.color}
            strokeWidth={n.main ? 1.8 : 1} strokeOpacity=".82"
            filter="url(#glow)" />
          <text x={cx(n)} y={cy(n) + 4.5} textAnchor="middle"
            fill="white" fontSize={n.main ? 9.5 : 8} fontWeight={n.main ? '700' : '500'}
            fontFamily="Inter,sans-serif">
            {n.main ? n.label : n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
