'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

const services = [
  {
    tag: 'Signature Collection',
    name: 'Wedding\nCakes',
    desc: 'Couture-crafted wedding cakes designed to become the centrepiece of your most precious day.',
    bg: 'linear-gradient(160deg, #F5EBD9 0%, #EDD5BF 40%, #E2C8A8 100%)',
    image: '/images/Wedding Collection.png'
  },
  {
    tag: 'Lifestyle Series',
    name: 'Custom\nCakes',
    desc: 'From birthdays to brand moments — bespoke cakes that tell your unique story.',
    bg: 'linear-gradient(135deg, #E8D4C0 0%, #D4C0A8 100%)',
  },
  {
    tag: 'Celebration Spread',
    name: 'Dessert\nTables',
    desc: 'Curated dessert installations that transform any event into an edible art exhibition.',
    bg: 'linear-gradient(135deg, #EDD5C0 0%, #DFCAAC 100%)',
  },
];

function ServiceCard({ service, height }: { service: typeof services[0]; height: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <motion.div
        style={{ width: '100%', minHeight: height, background: service.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        animate={{ scale: hovered ? 1.04 : 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Rendering image if present, otherwise fallback to SVG */}
        {service.image ? (
          <img 
            src={service.image} 
            alt={service.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        ) : (
          <svg width={160} height={200} viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg" opacity={0.7}>
            {service.tag.includes('Signature') ? (
              <>
                <rect x="10" y="130" width="140" height="50" rx="4" fill="#F0E4D0" stroke="#C9A84C" strokeWidth="0.5" />
                <rect x="6" y="118" width="148" height="18" rx="3" fill="#FFFDF9" opacity="0.9" />
                <rect x="25" y="75" width="110" height="48" rx="4" fill="#EDE0CC" stroke="#C9A84C" strokeWidth="0.5" />
                <rect x="20" y="64" width="120" height="16" rx="3" fill="#FFFDF9" opacity="0.9" />
                <line x1="80" y1="62" x2="80" y2="38" stroke="#C9A84C" strokeWidth="0.8" />
                <path d="M80 34 C78 28 71 24 71 30 C71 36 80 40 80 40 C80 40 89 36 89 30 C89 24 82 28 80 34Z" fill="#C9A84C" opacity="0.7" />
                <circle cx="30" cy="52" r="10" fill="#F2D9D0" opacity="0.8" />
                <circle cx="120" cy="55" r="8" fill="#E8C5BA" opacity="0.7" />
              </>
            ) : service.tag.includes('Lifestyle') ? (
              <>
                <rect x="10" y="130" width="140" height="50" rx="4" fill="#F0E4D0" stroke="#C9A84C" strokeWidth="0.5" />
                <rect x="6" y="118" width="148" height="18" rx="3" fill="#FFFDF9" opacity="0.9" />
                <rect x="25" y="75" width="110" height="48" rx="4" fill="#EDE0CC" stroke="#C9A84C" strokeWidth="0.5" />
                <rect x="20" y="64" width="120" height="16" rx="3" fill="#FFFDF9" opacity="0.9" />
                <circle cx="80" cy="100" r="20" stroke="#C9A84C" strokeWidth="0.4" fill="rgba(201,168,76,0.05)" strokeDasharray="3 3" />
                <circle cx="30" cy="52" r="10" fill="#F2D9D0" opacity="0.8" />
                <circle cx="105" cy="35" r="10" fill="#E8C5BA" opacity="0.7" />
              </>
            ) : (
              <>
                <rect x="10" y="160" width="140" height="32" rx="4" fill="#F0E4D0" stroke="#C9A84C" strokeWidth="0.5" />
                <rect x="6" y="150" width="148" height="14" rx="3" fill="#FFFDF9" opacity="0.9" />
                <rect x="20" y="115" width="50" height="42" rx="3" fill="#EDE0CC" stroke="#C9A84C" strokeWidth="0.5" />
                <rect x="75" y="120" width="40" height="35" rx="3" fill="#F0E4D0" stroke="#C9A84C" strokeWidth="0.5" />
                <rect x="118" y="112" width="30" height="42" rx="3" fill="#EDE0CC" stroke="#C9A84C" strokeWidth="0.5" />
                <circle cx="38" cy="90" r="12" fill="#F2D9D0" opacity="0.8" />
                <circle cx="70" cy="88" r="10" fill="#E8C5BA" opacity="0.7" />
                <circle cx="100" cy="85" r="11" fill="#F2D9D0" opacity="0.75" />
                <circle cx="135" cy="90" r="9" fill="#E8C5BA" opacity="0.65" />
              </>
            )}
          </svg>
        )}
      </motion.div>

      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,23,20,0.85) 0%, transparent 50%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 36 }}>
        <div style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 10 }}>{service.tag}</div>
        <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(24px,2.5vw,36px)', fontWeight: 400, color: 'var(--white)', lineHeight: 1.1, marginBottom: 10 }}>
          {service.name.split('\n').map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}
        </h3>
        <motion.p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: 280 }} animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }} transition={{ duration: 0.4 }}>
          {service.desc}
        </motion.p>
        <motion.span style={{ width: 40, height: 40, border: '1px solid rgba(201,168,76,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20, color: 'var(--gold)', fontSize: 18 }} animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.4 }}>→</motion.span>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" style={{ padding: '140px 60px', background: 'var(--cream)' }}>
      <SectionHeading label="Our Collections" title="Every occasion," titleItalic="perfectly crafted" center />
      <Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 2, maxWidth: 1200, margin: '0 auto' }}>
          {services.map((s, i) => <ServiceCard key={i} service={s} height={520} />)}
        </div>
      </Reveal>
    </section>
  );
}
