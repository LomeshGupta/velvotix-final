import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../lib/ThemeContext';

export default function Particles() {
  const cv  = useRef(null);
  const raf = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const c = cv.current;
    if (!c) return;
    const ctx = c.getContext('2d');

    const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const N = Math.min(55, Math.floor(window.innerWidth / 22));
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * c.width,  y: Math.random() * c.height,
      vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3,
      r: Math.random() * 1.2 + .4,
      a: Math.random() * .42 + .07,
      col: Math.random() > .72 ? '#FF7A00' : '#0099FF',
    }));

    const dark = theme === 'dark';
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      pts.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = c.width;   if (p.x > c.width)  p.x = 0;
        if (p.y < 0) p.y = c.height;  if (p.y > c.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.col;
        ctx.globalAlpha = dark ? p.a : p.a * .28;
        ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 100) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = '#0099FF';
            ctx.globalAlpha = (dark ? .08 : .04) * (1 - d / 100);
            ctx.lineWidth = .5; ctx.stroke();
          }
        }
      });
      ctx.globalAlpha = 1;
      raf.current = requestAnimationFrame(draw);
    };
    draw();

    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(raf.current); };
  }, [theme]);

  return (
    <canvas ref={cv} style={{
      position: 'fixed', inset: 0, zIndex: 0,
      pointerEvents: 'none', opacity: .8,
    }} />
  );
}
