import React, { useEffect, useRef } from 'react';

export default function Cursor() {
  const dot  = useRef(null);
  const ring = useRef(null);
  const pos  = useRef({ x: -200, y: -200 });
  const cur  = useRef({ x: -200, y: -200 });
  const raf  = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(hover:none)').matches) return;

    const onMove = e => { pos.current = { x: e.clientX, y: e.clientY }; };
    const onOver = e => {
      ring.current?.classList.toggle('on', !!e.target.closest('a,button,[data-hover]'));
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver);

    const loop = () => {
      cur.current.x += (pos.current.x - cur.current.x) * .14;
      cur.current.y += (pos.current.y - cur.current.y) * .14;
      if (dot.current) {
        dot.current.style.left = pos.current.x + 'px';
        dot.current.style.top  = pos.current.y + 'px';
      }
      if (ring.current) {
        ring.current.style.left = cur.current.x + 'px';
        ring.current.style.top  = cur.current.y + 'px';
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div ref={dot}  className="cur-dot"  />
      <div ref={ring} className="cur-ring" />
    </>
  );
}
