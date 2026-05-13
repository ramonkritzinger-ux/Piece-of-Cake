'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  onClick?: () => void;
}

const styles = {
  primary: { background:'var(--gold)', color:'var(--white)', border:'1px solid var(--gold)' },
  outline: { background:'transparent', color:'var(--charcoal)', border:'1px solid var(--charcoal)' },
  ghost:   { background:'transparent', color:'var(--cream)', border:'1px solid rgba(250,247,242,0.3)' },
};
const hover = {
  primary: { background:'var(--charcoal)', border:'1px solid var(--charcoal)' },
  outline: { background:'var(--charcoal)', color:'var(--white)', border:'1px solid var(--charcoal)' },
  ghost:   { background:'var(--charcoal)', border:'1px solid var(--charcoal)' },
};

export default function Button({ children, href, variant = 'primary', onClick }: Props) {
  const base = { fontSize:11, letterSpacing:'0.25em', textTransform:'uppercase' as const, padding:'18px 44px', fontWeight:500, display:'inline-block', textDecoration:'none', cursor:'pointer', ...styles[variant] };
  const hov  = hover[variant];

  const el = (
    <motion.span
      style={base}
      whileHover={{ ...hov, y: -2, transition:{ duration:0.3 } } as any}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.span>
  );

  if (href) return <a href={href} style={{ textDecoration:'none' }}>{el}</a>;
  return <button onClick={onClick} style={{ background:'none', border:'none', padding:0, cursor:'pointer' }}>{el}</button>;
}
