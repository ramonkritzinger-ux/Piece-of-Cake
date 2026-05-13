'use client';

import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import { WeddingCakeSVG } from '../ui/CakeSVGs';

const features = [
  'Complimentary Design Consultation',
  'Bespoke Flavour Tasting Session',
  'On-site Delivery & Installation',
  'Handcrafted Sugar Florals',
];

export default function WeddingSection() {
  return (
    <section id="wedding" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:'100vh', alignItems:'stretch', background:'var(--charcoal)' }}>
      {/* Visual */}
      <div style={{ position:'relative', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center', padding:80, background:'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, transparent 60%)' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 30% 70%, rgba(201,168,76,0.1) 0%, transparent 60%)' }}/>
        <Reveal direction="left">
          <WeddingCakeSVG width={320} height={480}/>
        </Reveal>
      </div>

      {/* Content */}
      <div style={{ padding:'100px 80px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
        <Reveal>
          <span style={{ fontSize:10, letterSpacing:'0.4em', textTransform:'uppercase', color:'var(--gold)', display:'block', marginBottom:32 }}>The Wedding Edit</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(48px,5vw,80px)', fontWeight:300, lineHeight:1, color:'var(--cream)', marginBottom:32 }}>
            Your wedding cake<br/>
            <em style={{ fontStyle:'italic', color:'var(--gold)' }}>reimagined</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p style={{ fontSize:14, color:'rgba(250,247,242,0.5)', lineHeight:1.9, maxWidth:420, marginBottom:48 }}>
            Your wedding cake isn&apos;t just a cake — it&apos;s a sculpture, a memory, and a declaration of your love story. Our master bakers and sugar artists work with you from first sketch to final flourish, ensuring every tier, petal, and pearl is exactly as you imagined.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{ display:'flex', flexDirection:'column', gap:20, marginBottom:48 }}>
            {features.map((f, i) => (
              <div key={i} style={{ display:'flex', alignItems:'center', gap:20 }}>
                <div style={{ width:6, height:6, borderRadius:'50%', background:'var(--gold)', flexShrink:0 }}/>
                <span style={{ fontSize:12, letterSpacing:'0.1em', color:'rgba(250,247,242,0.6)', textTransform:'uppercase' }}>{f}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p style={{ fontFamily:'Cormorant Garamond,serif', fontSize:18, fontStyle:'italic', color:'rgba(250,247,242,0.3)', marginBottom:40 }}>
            &ldquo;From the first sketch to the last crumb — pure artistry.&rdquo;
          </p>
          <Button href="#contact" variant="primary">Plan My Wedding Cake</Button>
        </Reveal>
      </div>
    </section>
  );
}
