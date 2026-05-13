'use client';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';

export default function HeroSection() {
  const particleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particleRef.current;
    if (!container) return;
    for (let i = 0; i < 18; i++) {
      const p = document.createElement('div');
      const dur   = (3 + Math.random() * 4).toFixed(1) + 's';
      const delay = (Math.random() * 5).toFixed(1) + 's';
      Object.assign(p.style, {
        position:'absolute', width:'3px', height:'3px',
        background:'var(--gold)', borderRadius:'50%',
        left:`${Math.random()*100}%`, top:`${Math.random()*100}%`,
        opacity:'0',
        animation:`float-particle ${dur} ${delay} infinite ease-in-out`,
      });
      container.appendChild(p);
    }
  }, []);

  const { scrollY } = useScroll();
  const shakeX = useTransform(scrollY, [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200], [0, 2, -2, 2, -2, 2, -2, 2, -2, 2, 0]);
  const shakeRotate = useTransform(scrollY, [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200], [0, 1, -1, 1, -1, 1, -1, 1, -1, 1, 0]);

  const base = { initial:{ opacity:0, y:30 } };
  const t = (delay: number): { type: 'tween'; duration: number; delay: number } => ({ type:'tween', duration:1, delay: delay+2.4 });

  return (
    <section id="hero" style={{ height:'100vh', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', background:'var(--cream)', position:'relative' }}>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(232,213,163,0.25) 0%, transparent 70%)' }}/>
      <div ref={particleRef} style={{ position:'absolute', inset:0, pointerEvents:'none' }}/>

      {/* Floating shapes */}
      <motion.svg style={{ position:'absolute', top:'15%', left:'8%', opacity:0.25 }} width="60" height="60" viewBox="0 0 60 60" fill="none"
        animate={{ y:[0,-12,0], rotate:[0,2,0] }} transition={{ duration:5, repeat:Infinity, ease:'easeInOut' }}>
        <circle cx="30" cy="30" r="28" stroke="#C9A84C" strokeWidth="0.5"/>
        <circle cx="30" cy="30" r="20" stroke="#C9A84C" strokeWidth="0.3"/>
        <path d="M30 10 C35 20 40 25 30 30 C20 35 25 40 30 50" stroke="#C9A84C" strokeWidth="0.5" fill="none"/>
      </motion.svg>

      <motion.svg style={{ position:'absolute', bottom:'20%', right:'10%', opacity:0.2 }} width="80" height="80" viewBox="0 0 80 80" fill="none"
        animate={{ y:[0,-10,0], rotate:[0,-2,0] }} transition={{ duration:6, repeat:Infinity, ease:'easeInOut', delay:1 }}>
        <path d="M40 5 L45 30 L70 25 L50 45 L60 70 L40 55 L20 70 L30 45 L10 25 L35 30 Z" stroke="#C9A84C" strokeWidth="0.5" fill="none"/>
      </motion.svg>

      <motion.svg style={{ position:'absolute', top:'30%', right:'6%', opacity:0.15 }} width="100" height="120" viewBox="0 0 100 120" fill="none"
        animate={{ y:[0,-14,0] }} transition={{ duration:7, repeat:Infinity, ease:'easeInOut', delay:2 }}>
        <rect x="20" y="90" width="60" height="20" rx="2" stroke="#C9A84C" strokeWidth="0.5" fill="none"/>
        <rect x="28" y="65" width="44" height="28" rx="2" stroke="#C9A84C" strokeWidth="0.5" fill="none"/>
        <rect x="36" y="42" width="28" height="26" rx="2" stroke="#C9A84C" strokeWidth="0.5" fill="none"/>
        <path d="M42 42 Q50 20 58 42" stroke="#C9A84C" strokeWidth="0.5" fill="none"/>
        <circle cx="50" cy="16" r="4" stroke="#C9A84C" strokeWidth="0.5" fill="none"/>
      </motion.svg>

      {/* Hero text */}
      <div style={{ textAlign:'center', position:'relative', zIndex:2 }}>
        <motion.span
          {...base}
          animate={{ opacity:1, y:0 }}
          transition={t(0)}
          style={{ fontSize:10, letterSpacing:'0.4em', textTransform:'uppercase', color:'var(--gold)', display:'block', marginBottom:32 }}
        >
          Artisan Cake Atelier · Est. 2018
        </motion.span>

        <motion.h1
          {...base}
          animate={{ opacity:1, y:0 }}
          transition={t(0.2)}
          style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(72px,10vw,140px)', fontWeight:300, lineHeight:0.9, letterSpacing:'-0.02em', color:'var(--charcoal)' }}
        >
          Where Every<br/>
          Cake is a<br/>
          <motion.em 
            style={{ 
              fontStyle:'italic', 
              color:'var(--gold)', 
              display: 'inline-block',
              x: shakeX,
              rotate: shakeRotate
            }}
          >
            Masterpiece
          </motion.em>
        </motion.h1>

        <motion.p
          {...base}
          animate={{ opacity:1, y:0 }}
          transition={t(0.4)}
          style={{ fontSize:13, letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--warm-gray)', marginTop:40 }}
        >
          Custom · Wedding · Luxury Celebrations
        </motion.p>

        <motion.div
          {...base}
          animate={{ opacity:1, y:0 }}
          transition={t(0.6)}
          style={{ marginTop:56, display:'flex', gap:20, justifyContent:'center' }}
        >
          <Button href="#services" variant="primary">Explore Collections</Button>
          <Button href="#contact" variant="outline">Book a Tasting</Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        {...base}
        animate={{ opacity:1, y:0 }}
        transition={t(1)}
        style={{ position:'absolute', bottom:48, left:0, right:0, display:'flex', flexDirection:'column', alignItems:'center', gap:12, pointerEvents:'none' }}
      >
        <div style={{ width:1, height:60, background:'linear-gradient(to bottom, var(--gold), transparent)', animation:'scroll-anim 2s infinite' }}/>
        <span style={{ fontSize:9, letterSpacing:'0.3em', textTransform:'uppercase', color:'var(--warm-gray)', whiteSpace:'nowrap' }}>Scroll to discover</span>
      </motion.div>
    </section>
  );
}
