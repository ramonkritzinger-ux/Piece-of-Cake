'use client';
import { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  className?: string;
}

export default function Reveal({ children, delay = 0, direction = 'up', className = '' }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const controls = useAnimation();

  const initial = {
    up:    { opacity: 0, y: 40 },
    left:  { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
  }[direction];

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0, x: 0, transition: { duration: 0.9, delay, ease: [0.25,0.46,0.45,0.94] } });
  }, [inView, controls, delay]);

  return (
    <motion.div ref={ref} className={className} initial={initial} animate={controls}>
      {children}
    </motion.div>
  );
}
