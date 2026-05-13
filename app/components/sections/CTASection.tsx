'use client';

import Reveal from '../ui/Reveal';
import Button from '../ui/Button';

export default function CTASection() {
  return (
    <section id="cta" style={{ padding:'160px 60px', background:'var(--charcoal)', textAlign:'center', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.12) 0%, transparent 70%)', pointerEvents:'none' }}/>
      <Reveal>
        <h2 style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(52px,6vw,100px)', fontWeight:300, lineHeight:0.95, color:'var(--cream)', marginBottom:40, position:'relative', zIndex:1 }}>
          Ready to order<br/>
          your <em style={{ fontStyle:'italic', color:'var(--gold)' }}>dream</em><br/>
          cake?
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p style={{ fontSize:14, color:'rgba(250,247,242,0.4)', letterSpacing:'0.05em', maxWidth:480, margin:'0 auto 56px', lineHeight:1.8, position:'relative', zIndex:1 }}>
          Every great cake begins with a conversation. Tell us about your occasion and we&apos;ll craft something extraordinary, together.
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <div style={{ display:'flex', gap:20, justifyContent:'center', position:'relative', zIndex:1 }}>
          <Button href="#contact" variant="primary">Start Your Journey</Button>
          <Button href="#gallery" variant="ghost">View Gallery</Button>
        </div>
      </Reveal>
    </section>
  );
}
