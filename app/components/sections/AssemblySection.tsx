'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { TierOneSVG, TierTwoSVG, TierThreeSVG, BrideGroomSVG } from '../ui/CakeSVGs';

const steps = [
  { num: '01', title: 'The Foundation', desc: 'Every masterpiece begins with our signature hand-crafted sponge, made fresh each morning with the finest ingredients sourced from artisan producers.' },
  { num: '02', title: 'The Architecture', desc: 'Each tier is structured with precision — height, proportion and balance are architectural decisions as much as culinary ones.' },
  { num: '03', title: 'The Crown', desc: 'The top tier is the crescendo of the cake — smaller, more delicate, and deserving of the most intricate decoration.' },
];

function LayerWrapper({ progress, bottom, children }: { progress: MotionValue<number>; bottom: number; children: React.ReactNode }) {
  const opacity = useTransform(progress, [0, 1], [0, 1]);
  const y = useTransform(progress, [0, 1], [60, 0]);
  return (
    <motion.div style={{ position: 'absolute', bottom, left: '50%', x: '-50%', opacity, y }}>
      {children}
    </motion.div>
  );
}

function AnimatedStepLabel({ index, scrollYProgress }: { index: number; scrollYProgress: MotionValue<number> }) {
  const s = steps[index];
  if (!s) return null;

  // Define ranges for each step to appear and disappear
  const ranges = [
    { in: [0.0, 0.05], out: [0.2, 0.4] },   // Step 0
    { in: [0.2, 0.4],  out: [0.5, 0.7] },   // Step 1
    { in: [0.5, 0.7],  out: [0.8, 1.0] },   // Step 2
  ];

  const range = ranges[index];
  
  const opacity = useTransform(
    scrollYProgress,
    [range.in[0], range.in[1], range.out[0], range.out[1], 1.0],
    [0, 1, 1, 0, 0]
  );

  const x = useTransform(
    scrollYProgress,
    [range.in[0], range.in[1], range.out[0], range.out[1], 1.0],
    [-100, 0, 0, -50, -50]
  );

  return (
    <motion.div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      x, 
      opacity,
      pointerEvents: 'none' 
    }}>
      <div style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 80,
        fontWeight: 300,
        color: 'rgba(232,213,163,0.5)',
        lineHeight: 1,
        marginBottom: 8
      }}>
        {s.num}
      </div>

      <div style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 26,
        color: 'var(--charcoal)',
        marginBottom: 12
      }}>
        {s.title}
      </div>

      <div style={{
        fontSize: 13,
        color: 'var(--warm-gray)',
        lineHeight: 1.8
      }}>
        {s.desc}
      </div>
    </motion.div>
  );
}

function DotIndicator({ scrollYProgress, threshold }: { scrollYProgress: MotionValue<number>; threshold: number }) {
  const bg = useTransform(scrollYProgress,
    [threshold - 0.05, threshold + 0.05],
    ['rgba(201,168,76,0.3)', 'var(--gold)']
  );
  return <motion.div style={{ width: 6, height: 6, borderRadius: '50%', background: bg }} />;
}

function RightPanel({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const opacity = useTransform(scrollYProgress, [0.45, 0.65], [0, 1]);
  const x = useTransform(scrollYProgress, [0.45, 0.65], [20, 0]);
  return (
    <motion.div style={{ position: 'absolute', left: 'calc(50% + 220px)', top: '42%', y: '-50%', width: 260, opacity, x }}>
      <div style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>The Process</div>
      <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 22, fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.3, marginBottom: 16 }}>
        Crafted with<br />intention &amp; love
      </div>
      <div style={{ fontSize: 13, color: 'var(--warm-gray)', lineHeight: 1.8 }}>
        Each layer is a story. Each flower is placed by hand. Each detail is considered with the care of a true artisan.
      </div>
    </motion.div>
  );
}

export default function AssemblySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });


  const make = (from: number, to: number) =>
    useTransform(scrollYProgress as MotionValue<number>, [from, to], [0, 1]);

  const l1 = make(0.0, 0.1); 
  const l2 = make(0.2, 0.35);
  const l3 = make(0.5, 0.65);
  const l4 = make(0.8, 0.95);

  const thresholds = [0.12, 0.4, 0.7];

  return (
    <section ref={ref} id="assembly" style={{ minHeight: '350vh', position: 'relative', background: 'var(--cream)' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(242,217,208,0.3) 0%, transparent 70%)' }} />

        {/* Left step labels — now animated to slide in from left */}
        <div style={{ position: 'absolute', left: 'calc(50% - 460px)', top: '32%', transform: 'translateY(-50%)', width: 280, height: 260 }}>
          {[0, 1, 2].map((i) => (
            <AnimatedStepLabel key={i} index={i} scrollYProgress={scrollYProgress as MotionValue<number>} />
          ))}
        </div>

        {/* Cake stage */}
        <div style={{ position: 'relative', width: 340, height: 480, marginTop: -100 }}>
          <LayerWrapper progress={l1} bottom={0}><TierOneSVG /></LayerWrapper>
          <LayerWrapper progress={l2} bottom={100}><TierTwoSVG /></LayerWrapper>
          <LayerWrapper progress={l3} bottom={185}><TierThreeSVG /></LayerWrapper>
          <LayerWrapper progress={l4} bottom={250}><BrideGroomSVG /></LayerWrapper>
        </div>

        {/* Right panel */}
        <RightPanel scrollYProgress={scrollYProgress as MotionValue<number>} />

        {/* Progress dots */}
        <div style={{ position: 'absolute', bottom: 60, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8 }}>
          {thresholds.map((t, i) => (
            <DotIndicator key={i} scrollYProgress={scrollYProgress as MotionValue<number>} threshold={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
