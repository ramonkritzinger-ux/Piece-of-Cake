'use client';

const footerLinks = {
  Collections: ['Wedding Cakes', 'Custom Cakes', 'Dessert Tables', 'Gallery'],
  Atelier: ['Our Story', 'Book a Tasting', 'Consultations', 'Press'],
};

export default function Footer() {
  return (
    <footer style={{ background: 'var(--charcoal)', padding: '80px 60px 40px', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: 80, marginBottom: 80 }}>
        {/* Brand */}
        <div>
          <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 32, fontWeight: 300, color: 'var(--cream)', marginBottom: 16 }}>
            Piece <span style={{ color: 'var(--gold)' }}>of</span> Cake
          </div>
          <p style={{ fontSize: 13, color: 'rgba(250,247,242,0.4)', lineHeight: 1.8, maxWidth: 280 }}>
            A luxury cake atelier crafting bespoke confections for life&apos;s most precious moments. Every creation is one of a kind, just like you.
          </p>
          <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
            {['IG', 'PT', 'FB'].map(s => (
              <a key={s} href="#"
                style={{ width: 36, height: 36, border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(250,247,242,0.5)', fontSize: 12, textDecoration: 'none', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; e.currentTarget.style.color = 'rgba(250,247,242,0.5)'; }}
              >{s}</a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <div style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 24 }}>{title}</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {links.map(l => (
                <li key={l}>
                  <a href="#" style={{ fontSize: 13, color: 'rgba(250,247,242,0.5)', textDecoration: 'none', letterSpacing: '0.05em', transition: 'color 0.3s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(250,247,242,0.5)')}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <div style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 24 }}>Contact</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <li><a href="mailto:hello@pieceofcake.co.za" style={{ fontSize: 13, color: 'rgba(250,247,242,0.4)', textDecoration: 'none' }}>hello@pieceofcake.co.za</a></li>
            <li><a href="tel:0722177829" style={{ fontSize: 13, color: 'rgba(250,247,242,0.4)', textDecoration: 'none' }}>072 217 7829</a></li>
            <li><span style={{ fontSize: 13, color: 'rgba(250,247,242,0.4)', lineHeight: 1.7, display: 'block' }}>Randfontein, Johannesburg<br />South Africa</span></li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 11, color: 'rgba(250,247,242,0.3)', letterSpacing: '0.1em' }}>© 2025 Piece of Cake Atelier. All rights reserved.</span>
        <span style={{ fontSize: 11, color: 'rgba(250,247,242,0.3)', letterSpacing: '0.1em' }}>Crafted with love &amp; precision</span>
      </div>
    </footer>
  );
}
