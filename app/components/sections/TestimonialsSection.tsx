'use client';

import SectionHeading from '../ui/SectionHeading';

const testimonials = [
  { text: "Our wedding cake was the most breathtaking thing I've ever seen. Guests couldn't stop talking about it — or photographing it. It tasted even better than it looked, which felt impossible.", author: "Isabelle & Marcus T.", event: "Wedding · Cape Town" },
  { text: "I asked for something that felt like a garden in bloom, and they delivered something so beautiful it moved me to tears. Every flower looked real. Every detail was perfect.", author: "Priya N.", event: "Birthday Celebration · Johannesburg" },
  { text: "The dessert table they created for our brand launch was an installation. People were posting it before we even cut anything. Pure artistry on a table.", author: "Karin M.", event: "Brand Event · Sandton" },
  { text: "From the tasting consultation to delivery, the experience was seamlessly luxurious. The cake itself? A five-tier masterpiece that tasted like a dream.", author: "Thandi & David K.", event: "Wedding · Franschhoek" },
  { text: "I've tried premium bakeries across Europe and this surpasses all of them. The champagne vanilla with salted caramel interior was transcendent. I will never celebrate another moment without Piece of Cake.", author: "Simone A.", event: "Anniversary · Pretoria" },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div style={{
      flexShrink: 0, width: 420,
      background: 'var(--white)',
      border: '1px solid rgba(201,168,76,0.2)',
      padding: 48,
      position: 'relative',
    }}>
      <div style={{ fontFamily:'Cormorant Garamond,serif', fontSize:120, color:'var(--gold2)', position:'absolute', top:-10, left:32, lineHeight:1, opacity:0.4, pointerEvents:'none' }}>&ldquo;</div>
      <div style={{ color:'var(--gold)', fontSize:12, letterSpacing:4, marginBottom:20 }}>★★★★★</div>
      <p style={{ fontFamily:'Cormorant Garamond,serif', fontSize:18, fontStyle:'italic', lineHeight:1.6, color:'var(--charcoal)', marginBottom:32, paddingTop:40, position:'relative', zIndex:1 }}>
        &ldquo;{t.text}&rdquo;
      </p>
      <div style={{ fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--warm-gray)' }}>{t.author}</div>
      <div style={{ fontSize:10, letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--gold)', marginTop:6 }}>{t.event}</div>
    </div>
  );
}

export default function TestimonialsSection() {
  const doubled = [...testimonials, ...testimonials];
  return (
    <section id="testimonials" style={{ padding:'140px 0', background:'var(--cream)', overflow:'hidden' }}>
      <div style={{ textAlign:'center', padding:'0 60px', marginBottom:80 }}>
        <SectionHeading label="Client Stories" title="Moments that last" titleItalic="a lifetime" center/>
      </div>
      <div style={{ overflow:'hidden', position:'relative' }}>
        <div className="marquee-track" style={{ display:'flex', gap:32, padding:'0 60px', width:'max-content' }}>
          {doubled.map((t,i) => <TestimonialCard key={i} t={t}/>)}
        </div>
      </div>
    </section>
  );
}
