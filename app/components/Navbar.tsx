'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { label: 'Collections', href: '#services' },
  { label: 'Wedding',     href: '#wedding' },
  { label: 'Gallery',     href: '#gallery' },
  { label: 'Atelier',     href: '#about' },
  { label: 'Enquire',     href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.4, ease: [0.25,0.46,0.45,0.94] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? '18px 60px' : '28px 60px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(250,247,242,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : 'none',
        transition: 'all 0.5s ease',
      }}
    >
      <a href="#" onClick={e=>scroll(e,'#hero')} style={{ fontFamily:'Cormorant Garamond,serif', fontSize:22, fontWeight:500, letterSpacing:'0.08em', color:'var(--charcoal)', textDecoration:'none' }}>
        Piece <span style={{ color:'var(--gold)' }}>of</span> Cake
      </a>

      <ul style={{ display:'flex', gap:40, listStyle:'none' }}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={e=>scroll(e,l.href)}
              style={{ fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--charcoal)', textDecoration:'none', fontWeight:400, opacity:0.7, transition:'opacity 0.3s' }}
              onMouseEnter={e=>(e.currentTarget.style.opacity='1')}
              onMouseLeave={e=>(e.currentTarget.style.opacity='0.7')}
            >{l.label}</a>
          </li>
        ))}
      </ul>

      <a href="#contact" onClick={e=>scroll(e,'#contact')}
        style={{ fontSize:11, letterSpacing:'0.25em', textTransform:'uppercase', background:'var(--gold)', color:'var(--white)', padding:'12px 28px', textDecoration:'none', fontWeight:500, transition:'all 0.3s' }}
        onMouseEnter={e=>(e.currentTarget.style.background='var(--charcoal)')}
        onMouseLeave={e=>(e.currentTarget.style.background='var(--gold)')}
      >
        Book a Consultation
      </a>
    </motion.nav>
  );
}
