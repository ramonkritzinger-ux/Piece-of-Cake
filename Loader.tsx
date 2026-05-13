'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2300);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center gap-6"
          style={{ background: 'var(--charcoal)' }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <motion.p
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, color: 'var(--cream)', fontSize: 36, letterSpacing: '0.1em' }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Piece <span style={{ color: 'var(--gold)' }}>of</span> Cake
          </motion.p>
          <div style={{ width: 120, height: 1, background: 'rgba(201,168,76,0.2)', position: 'relative', overflow: 'hidden' }}>
            <motion.div
              style={{ position: 'absolute', inset: 0, background: 'var(--gold)', originX: 0 }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.8, ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
