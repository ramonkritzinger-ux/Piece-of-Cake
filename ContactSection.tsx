'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ firstName:'', lastName:'', email:'', occasion:'', message:'' });

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width:'100%', padding:'40px 24px 16px',
    background:'transparent', border:'none', outline:'none',
    fontFamily:'Jost,sans-serif', fontSize:14, color:'var(--charcoal)',
    resize:'none' as const,
  };
  const groupStyle = { position:'relative' as const, border:'1px solid rgba(201,168,76,0.25)', marginTop:-1 };
  const labelStyle = { fontSize:9, letterSpacing:'0.25em', textTransform:'uppercase' as const, color:'var(--gold)', position:'absolute' as const, top:20, left:24, pointerEvents:'none' as const };

  return (
    <section id="contact" style={{ padding:'140px 60px', background:'var(--cream2)' }}>
      <div style={{ maxWidth:600, margin:'0 auto', textAlign:'center' }}>
        <SectionHeading label="Get In Touch" title="Let's create" titleItalic="something beautiful" center/>
        <Reveal delay={0.2}>
          <p style={{ fontSize:13, color:'var(--warm-gray)', marginBottom:64, letterSpacing:'0.05em', lineHeight:1.8 }}>
            Consultations are held by appointment. We take on a limited number of commissions each month to ensure every cake receives the attention it deserves.
          </p>
        </Reveal>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form key="form" onSubmit={handle} initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} style={{ textAlign:'left' }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr' }}>
                <div style={groupStyle}>
                  <label style={labelStyle}>First Name</label>
                  <input type="text" required value={form.firstName} onChange={e=>setForm({...form,firstName:e.target.value})} style={inputStyle}/>
                </div>
                <div style={groupStyle}>
                  <label style={labelStyle}>Last Name</label>
                  <input type="text" required value={form.lastName} onChange={e=>setForm({...form,lastName:e.target.value})} style={inputStyle}/>
                </div>
                <div style={groupStyle}>
                  <label style={labelStyle}>Email Address</label>
                  <input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={inputStyle}/>
                </div>
                <div style={groupStyle}>
                  <label style={labelStyle}>Occasion</label>
                  <input type="text" value={form.occasion} onChange={e=>setForm({...form,occasion:e.target.value})} style={inputStyle}/>
                </div>
              </div>
              <div style={groupStyle}>
                <label style={labelStyle}>Tell us about your dream cake</label>
                <textarea rows={4} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} style={inputStyle}/>
              </div>
              <motion.button
                type="submit"
                style={{ width:'100%', background:'var(--gold)', color:'var(--white)', border:'1px solid var(--gold)', padding:'22px 48px', fontFamily:'Jost,sans-serif', fontSize:11, letterSpacing:'0.25em', textTransform:'uppercase', cursor:'pointer', fontWeight:500 }}
                whileHover={{ background:'var(--charcoal)', borderColor:'var(--charcoal)' }}
                transition={{ duration:0.3 }}
              >
                Send Enquiry
              </motion.button>
            </motion.form>
          ) : (
            <motion.div key="success" initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }} style={{ padding:'60px 0', textAlign:'center' }}>
              <div style={{ fontFamily:'Cormorant Garamond,serif', fontSize:48, fontWeight:300, color:'var(--gold)', marginBottom:16 }}>✓</div>
              <h3 style={{ fontFamily:'Cormorant Garamond,serif', fontSize:28, fontWeight:300, color:'var(--charcoal)', marginBottom:12 }}>Thank you, darling.</h3>
              <p style={{ fontSize:13, color:'var(--warm-gray)', lineHeight:1.8 }}>
                We&apos;ve received your enquiry and will be in touch within 24 hours to begin creating your masterpiece.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
