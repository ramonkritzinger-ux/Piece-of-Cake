'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

const items = [
  { name: 'Ivory Romance', image: '/images/Cake 1.png', h: 320 },
  { name: 'Garden Party', image: '/images/Cake 2.png', h: 320 },
  { name: 'Noir Elegance', image: '/images/Cake 3.png', h: 320, dark: true },
  { name: 'Blossom Dreams', image: '/images/Cake 4.png', h: 320 },
  { name: 'Blush Couture', image: '/images/Cake 5.jpg', h: 320 },
  { name: 'Golden Hour', image: '/images/Cake 6.jpg', h: 320 },
  { name: 'Dark Romance', image: '/images/Cake 7.jpg', h: 320, dark: true },
  { name: 'Floral Fantasy', image: '/images/Cake 8.jpg', h: 320 },
];

function GalleryItem({ item, index, onOpen }: { item: typeof items[0]; index: number; onOpen: (i: number) => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      style={{ marginBottom: 12, position: 'relative', overflow: 'hidden', cursor: 'pointer', breakInside: 'avoid' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => onOpen(index)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.06 }}
    >
      <motion.div
        style={{ width: '100%', height: item.h, background: item.image || 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
        animate={{ scale: hovered ? 1.04 : 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <span style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 32, fontWeight: 300, color: item.dark ? 'rgba(201,168,76,0.2)' : 'rgba(26,23,20,0.1)', fontStyle: 'italic' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
      </motion.div>
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ position: 'absolute', inset: 0, background: 'rgba(26,23,20,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <span style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 18, fontStyle: 'italic', color: 'var(--white)' }}>{item.name}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" style={{ padding: '140px 60px', background: 'var(--cream2)' }}>
      <SectionHeading label="Portfolio" title="A gallery of" titleItalic="sweet masterpieces" center />

      <Reveal delay={0.2}>
        <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--warm-gray)', marginBottom: 64, letterSpacing: '0.05em' }}>
          Click any piece to view in full
        </p>
      </Reveal>

      <div style={{ columns: 4, gap: 12, maxWidth: 1200, margin: '0 auto' }}>
        {items.map((item, i) => (
          <GalleryItem key={i} item={item} index={i} onOpen={setLightbox} />
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(26,23,20,0.95)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)' }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ width: '60vw', height: '70vh', background: items[lightbox].image || 'var(--charcoal)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}
              onClick={e => e.stopPropagation()}
            >
              {items[lightbox].image ? (
                <img
                  src={items[lightbox].image}
                  alt={items[lightbox].name}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              ) : (
                <span style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 80, fontWeight: 300, color: items[lightbox].dark ? 'rgba(201,168,76,0.2)' : 'rgba(26,23,20,0.08)', fontStyle: 'italic' }}>
                  {String(lightbox + 1).padStart(2, '0')}
                </span>
              )}
            </motion.div>
            <button
              onClick={() => setLightbox(null)}
              style={{ position: 'absolute', top: 32, right: 40, background: 'none', border: 'none', color: 'var(--cream)', fontSize: 32, cursor: 'pointer', opacity: 0.6, fontFamily: 'Cormorant Garamond,serif' }}
            >×</button>
            <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', fontFamily: 'Cormorant Garamond,serif', fontSize: 18, fontStyle: 'italic', color: 'rgba(250,247,242,0.5)', whiteSpace: 'nowrap' }}>
              {items[lightbox].name}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
