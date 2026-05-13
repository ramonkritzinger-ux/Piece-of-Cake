'use client';

import Reveal from './Reveal';

interface Props {
  label?: string;
  title: string;
  titleItalic?: string;
  dark?: boolean;
  center?: boolean;
}

export default function SectionHeading({ label, title, titleItalic, dark, center }: Props) {
  const textColor = dark ? 'var(--cream)' : 'var(--charcoal)';
  const align = center ? 'center' : 'left';
  return (
    <div style={{ textAlign: align, marginBottom: 80 }}>
      {label && (
        <Reveal>
          <span style={{ fontSize:10, letterSpacing:'0.4em', textTransform:'uppercase', color:'var(--gold)', display:'block', marginBottom:24 }}>{label}</span>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(40px,4vw,64px)', fontWeight:300, lineHeight:1.1, color:textColor }}>
          {title}{titleItalic && <><br/><em style={{ fontStyle:'italic', color:'var(--gold)' }}>{titleItalic}</em></>}
        </h2>
      </Reveal>
    </div>
  );
}
