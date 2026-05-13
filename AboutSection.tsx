'use client';

import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

const stats = [
  { num:'500', sup:'+', label:'Cakes crafted' },
  { num:'7',   sup:'',  label:'Years of mastery' },
  { num:'98',  sup:'%', label:'Client satisfaction' },
  { num:'12',  sup:'+', label:'Industry awards' },
];

export default function AboutSection() {
  return (
    <section id="about" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:'80vh', alignItems:'stretch', background:'var(--cream)' }}>
      {/* Visual panel */}
      <div style={{ background:'var(--charcoal)', display:'flex', alignItems:'center', justifyContent:'center', padding:80, position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 30% 70%, rgba(201,168,76,0.1) 0%, transparent 60%)' }}/>
        <div style={{ fontFamily:'Cormorant Garamond,serif', fontSize:240, fontWeight:300, color:'rgba(201,168,76,0.06)', position:'absolute', lineHeight:1, userSelect:'none' }}>P</div>
        <Reveal direction="left">
          <blockquote style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(28px,3vw,44px)', fontStyle:'italic', fontWeight:300, color:'var(--cream)', textAlign:'center', position:'relative', zIndex:1, lineHeight:1.3 }}>
            &ldquo;We believe beauty<br/>is something you<br/>taste first.&rdquo;
            <span style={{ display:'block', fontFamily:'Jost,sans-serif', fontStyle:'normal', fontSize:12, letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)', marginTop:24 }}>— The Atelier</span>
          </blockquote>
        </Reveal>
      </div>

      {/* Content panel */}
      <div style={{ padding:'100px 80px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
        <SectionHeading label="Our Story" title="Born from a love" titleItalic="of art and flavour"/>
        <Reveal delay={0.2}>
          <p style={{ fontSize:15, color:'var(--warm-gray)', lineHeight:1.9, marginBottom:24, maxWidth:480 }}>
            Piece of Cake was founded on a simple belief: that a cake should be as extraordinary as the moment it celebrates. What began as a small creative studio has grown into one of South Africa&apos;s most sought-after luxury cake ateliers, with a waiting list that stretches months and a portfolio that spans continents.
          </p>
          <p style={{ fontSize:15, color:'var(--warm-gray)', lineHeight:1.9, maxWidth:480 }}>
            Each cake is designed in close collaboration with our clients — a deeply personal creative process that results in something utterly unique to them, and completely unlike anything else.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32, marginTop:48 }}>
            {stats.map((s,i) => (
              <div key={i} style={{ borderTop:'1px solid rgba(201,168,76,0.3)', paddingTop:20 }}>
                <div style={{ fontFamily:'Cormorant Garamond,serif', fontSize:48, fontWeight:300, color:'var(--charcoal)', lineHeight:1 }}>
                  {s.num}<sup style={{ fontSize:20, verticalAlign:'super' }}>{s.sup}</sup>
                </div>
                <div style={{ fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--warm-gray)', marginTop:6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
