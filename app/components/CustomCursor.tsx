'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0, fx: 0, fy: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = (e.clientX - 4) + 'px';
        dotRef.current.style.top = (e.clientY - 4) + 'px';
      }
    };
    window.addEventListener('mousemove', move);

    let raf: number;
    const follow = () => {
      const p = pos.current;
      p.fx += (p.x - p.fx) * 0.12;
      p.fy += (p.y - p.fy) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = (p.fx - 16) + 'px';
        ringRef.current.style.top = (p.fy - 16) + 'px';
      }
      raf = requestAnimationFrame(follow);
    };
    follow();

    const grow = () => {
      dotRef.current && (dotRef.current.style.transform = 'scale(2)');
      ringRef.current && (ringRef.current.style.transform = 'scale(1.5)');
    };
    const shrink = () => {
      dotRef.current && (dotRef.current.style.transform = 'scale(1)');
      ringRef.current && (ringRef.current.style.transform = 'scale(1)');
    };
    document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} style={{ position: 'fixed', width: 8, height: 8, background: 'var(--gold)', borderRadius: '50%', pointerEvents: 'none', zIndex: 9999, transition: 'transform 0.1s', mixBlendMode: 'multiply' }} />
      <div ref={ringRef} style={{ position: 'fixed', width: 32, height: 32, border: '1px solid var(--gold)', borderRadius: '50%', pointerEvents: 'none', zIndex: 9998, transition: 'transform 0.15s ease', mixBlendMode: 'multiply' }} />
    </>
  );
}
