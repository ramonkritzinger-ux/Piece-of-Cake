'use client';

import Reveal from '../ui/Reveal';

export default function IntroSection() {
  return (
    <section id="intro" style={{ padding: '140px 60px', textAlign: 'center', background: 'var(--charcoal)' }}>
      <Reveal>
        <span style={{ fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: 32 }}>Our Philosophy</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(42px,5vw,72px)', fontWeight: 300, lineHeight: 1.1, color: 'var(--cream)', maxWidth: 800, margin: '0 auto 40px' }}>
          We don&apos;t just bake cakes.<br />
          We craft <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>heirlooms</em>.
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p style={{ fontSize: 15, color: 'rgba(250,247,242,0.5)', maxWidth: 520, margin: '0 auto', lineHeight: 1.9, letterSpacing: '0.03em' }}>
          Every cake that leaves our atelier is a conversation between art and emotion. We believe that the most extraordinary moments in life deserve extraordinary cakes — designed with couture precision and baked with devotion.
        </p>
      </Reveal>
      <Reveal delay={0.3}>
        <div style={{ width: 60, height: 1, background: 'var(--gold)', margin: '48px auto 0' }} />
      </Reveal>
    </section>
  );
}
