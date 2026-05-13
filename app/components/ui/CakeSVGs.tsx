export function WeddingCakeSVG({ width = 320, height = 480 }: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 320 480" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ filter:'drop-shadow(0 30px 60px rgba(26,23,20,0.15))' }}>
      <defs>
        <linearGradient id="wF1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#F5EBD9"/><stop offset="100%" stopColor="#E8D4B8"/></linearGradient>
        <linearGradient id="wF2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#EEE2CC"/><stop offset="100%" stopColor="#E0D0B4"/></linearGradient>
        <linearGradient id="wF3" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#E8DAC4"/><stop offset="100%" stopColor="#DACAB0"/></linearGradient>
        <linearGradient id="wF4" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#E2D0B8"/><stop offset="100%" stopColor="#D4C4A4"/></linearGradient>
        <linearGradient id="wF5" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#DCCAA8"/><stop offset="100%" stopColor="#CEBC94"/></linearGradient>
      </defs>
      {/* Base tier */}
      <rect x="60" y="370" width="200" height="80" rx="4" fill="url(#wF1)"/>
      <rect x="45" y="353" width="230" height="26" rx="3" fill="#FFFDF9" opacity="0.95"/>
      <path d="M45 355 Q57.5 348 70 355 Q82.5 362 95 355 Q107.5 348 120 355 Q132.5 362 145 355 Q157.5 348 170 355 Q182.5 362 195 355 Q207.5 348 220 355 Q232.5 362 245 355 Q257.5 348 275 355" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.7"/>
      <rect x="45" y="393" width="230" height="2" fill="#C9A84C" opacity="0.5"/>
      {[90,110,130,150,170,190,210,230].map(x=><circle key={x} cx={x} cy={408} r="3" fill="rgba(255,253,249,0.8)"/>)}
      {/* Second tier */}
      <rect x="82" y="275" width="156" height="90" rx="4" fill="url(#wF2)"/>
      <rect x="70" y="258" width="180" height="24" rx="3" fill="#FFFDF9" opacity="0.95"/>
      <path d="M70 260 Q80 253 90 260 Q100 267 110 260 Q120 253 130 260 Q140 267 150 260 Q160 253 170 260 Q180 267 190 260 Q200 253 210 260 Q220 267 230 260 Q240 253 250 260" stroke="#C9A84C" strokeWidth="0.7" fill="none" opacity="0.6"/>
      <rect x="70" y="298" width="180" height="2" fill="#C9A84C" opacity="0.4"/>
      {/* Third tier */}
      <rect x="103" y="185" width="114" height="88" rx="4" fill="url(#wF3)"/>
      <rect x="93" y="169" width="134" height="22" rx="3" fill="#FFFDF9" opacity="0.95"/>
      <rect x="93" y="212" width="134" height="2" fill="#C9A84C" opacity="0.4"/>
      {/* Fourth tier */}
      <rect x="124" y="105" width="72" height="82" rx="4" fill="url(#wF4)"/>
      <rect x="116" y="90" width="88" height="20" rx="3" fill="#FFFDF9" opacity="0.95"/>
      <rect x="116" y="134" width="88" height="2" fill="#C9A84C" opacity="0.35"/>
      {/* Top tier */}
      <rect x="143" y="40" width="34" height="68" rx="3" fill="url(#wF5)"/>
      <rect x="136" y="26" width="48" height="18" rx="3" fill="#FFFDF9" opacity="0.95"/>
      {/* Topper */}
      <line x1="160" y1="24" x2="160" y2="6" stroke="#C9A84C" strokeWidth="1"/>
      <path d="M160 2 C157-6 148-11 148-3 C148 5 160 10 160 10 C160 10 172 5 172-3 C172-11 163-6 160 2Z" fill="#C9A84C" opacity="0.8"/>
      {/* Gold leaves */}
      {[[88,155],[220,155],[105,68],[200,68]].map(([x,y],i)=>(
        <path key={i} d={`M${x} ${y} Q${x+5} ${y+10} ${x+10} ${y}`} stroke="#C9A84C" strokeWidth="0.7" fill="rgba(201,168,76,0.2)"/>
      ))}
      {/* Cascade flowers left */}
      <circle cx="55" cy="310" r="16" fill="#F2D9D0" opacity="0.85"/>
      <circle cx="44" cy="298" r="12" fill="#E8C5BA" opacity="0.75"/>
      <circle cx="62" cy="292" r="13" fill="#F2D9D0" opacity="0.7"/>
      <circle cx="40" cy="320" r="10" fill="#E8C5BA" opacity="0.6"/>
      <path d="M52 310 Q42 335 35 360" stroke="rgba(139,126,116,0.4)" strokeWidth="1" fill="none"/>
      <path d="M62 295 Q55 320 50 350" stroke="rgba(139,126,116,0.4)" strokeWidth="1" fill="none"/>
      <path d="M42 330 Q34 325 38 334" fill="rgba(139,126,116,0.25)" stroke="rgba(139,126,116,0.3)" strokeWidth="0.5"/>
      {/* Cascade flowers right */}
      <circle cx="268" cy="230" r="14" fill="#F2D9D0" opacity="0.8"/>
      <circle cx="278" cy="220" r="11" fill="#E8C5BA" opacity="0.7"/>
      <circle cx="260" cy="218" r="12" fill="#F2D9D0" opacity="0.65"/>
      <path d="M268 230 Q275 255 270 285" stroke="rgba(139,126,116,0.4)" strokeWidth="1" fill="none"/>
    </svg>
  );
}

export function TierOneSVG() {
  return (
    <svg viewBox="0 0 280 90" width="280" height="90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="b1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#F5EBD9"/><stop offset="100%" stopColor="#E8D4B8"/></linearGradient>
      </defs>
      <rect x="10" y="20" width="260" height="65" rx="3" fill="url(#b1)"/>
      <rect x="0" y="12" width="280" height="22" rx="3" fill="#FFFDF9" opacity="0.95"/>
      <path d="M0 14 Q14 8 28 14 Q42 20 56 14 Q70 8 84 14 Q98 20 112 14 Q126 8 140 14 Q154 20 168 14 Q182 8 196 14 Q210 20 224 14 Q238 8 252 14 Q266 20 280 14" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.6"/>
      <rect x="0" y="46" width="280" height="2" fill="#C9A84C" opacity="0.4"/>
      <line x1="10" y1="58" x2="270" y2="58" stroke="rgba(180,150,100,0.15)" strokeWidth="0.5"/>
      <line x1="10" y1="68" x2="270" y2="68" stroke="rgba(180,150,100,0.15)" strokeWidth="0.5"/>
    </svg>
  );
}

export function TierTwoSVG() {
  return (
    <svg viewBox="0 0 220 80" width="220" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="m1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#F0E4D0"/><stop offset="100%" stopColor="#E2CEB0"/></linearGradient>
      </defs>
      <rect x="8" y="18" width="204" height="57" rx="3" fill="url(#m1)"/>
      <rect x="0" y="10" width="220" height="22" rx="3" fill="#FFFDF9" opacity="0.95"/>
      <path d="M0 12 Q11 6 22 12 Q33 18 44 12 Q55 6 66 12 Q77 18 88 12 Q99 6 110 12 Q121 18 132 12 Q143 6 154 12 Q165 18 176 12 Q187 6 198 12 Q209 18 220 12" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.5"/>
      <rect x="0" y="40" width="220" height="1.5" fill="#C9A84C" opacity="0.35"/>
      <circle cx="110" cy="55" r="12" stroke="rgba(201,168,76,0.3)" strokeWidth="0.6" fill="none"/>
      <circle cx="110" cy="55" r="6"  stroke="rgba(201,168,76,0.2)" strokeWidth="0.5" fill="none"/>
    </svg>
  );
}

export function TierThreeSVG() {
  return (
    <svg viewBox="0 0 155 70" width="155" height="70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="t1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#EDE0CC"/><stop offset="100%" stopColor="#DDD0B8"/></linearGradient>
      </defs>
      <rect x="6" y="16" width="143" height="50" rx="3" fill="url(#t1)"/>
      <rect x="0" y="8"  width="155" height="20" rx="3" fill="#FFFDF9" opacity="0.95"/>
      <path d="M0 10 Q7.75 4 15.5 10 Q23.25 16 31 10 Q38.75 4 46.5 10 Q54.25 16 62 10 Q69.75 4 77.5 10 Q85.25 16 93 10 Q100.75 4 108.5 10 Q116.25 16 124 10 Q131.75 4 139.5 10 Q147.25 16 155 10" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.5"/>
      <rect x="0" y="33" width="155" height="1.5" fill="#C9A84C" opacity="0.3"/>
    </svg>
  );
}

export function TopperSVG() {
  return (
    <svg viewBox="0 0 90 80" width="90" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="45" y1="70" x2="45" y2="30" stroke="#C9A84C" strokeWidth="0.8"/>
      <path d="M45 26 C43 20 36 16 36 22 C36 28 45 34 45 34 C45 34 54 28 54 22 C54 16 47 20 45 26Z" fill="#C9A84C" opacity="0.6"/>
      {[[20,20,2],[70,25,1.5],[30,50,1],[60,55,1.5]].map(([cx,cy,r],i)=>(
        <circle key={i} cx={cx} cy={cy} r={r} fill="#C9A84C" opacity="0.4"/>
      ))}
      <path d="M32 68 Q38 60 45 68 Q52 60 58 68" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.5"/>
    </svg>
  );
}

export function BrideGroomSVG() {
  return (
    <svg viewBox="0 0 120 110" width="120" height="110" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shared stem */}
      <line x1="60" y1="108" x2="60" y2="80" stroke="#C9A84C" strokeWidth="0.8" opacity="0.7"/>

      {/* Heart above */}
      <path d="M60 34 C60 34 52 27 52 22 C52 18 56 16 60 20 C64 16 68 18 68 22 C68 27 60 34 60 34Z" fill="#C9A84C" opacity="0.55"/>

      {/* — GROOM (left) — */}
      {/* Head */}
      <circle cx="44" cy="46" r="6" fill="#E8D4B8" opacity="0.9"/>
      {/* Jacket body */}
      <path d="M36 58 Q38 54 44 53 Q50 54 52 58 L54 80 L34 80 Z" fill="#3D3530" opacity="0.75"/>
      {/* Shirt & lapels */}
      <path d="M44 53 L42 60 L44 62 L46 60 L44 53" fill="#FFFDF9" opacity="0.8"/>
      <path d="M42 54 L38 58" stroke="#3D3530" strokeWidth="0.6" opacity="0.5"/>
      <path d="M46 54 L50 58" stroke="#3D3530" strokeWidth="0.6" opacity="0.5"/>
      {/* Bow-tie */}
      <path d="M42 56 L44 58 L46 56 L44 54 Z" fill="#C9A84C" opacity="0.7"/>
      {/* Trousers */}
      <path d="M36 78 L38 100 L42 100 L44 82 L46 100 L50 100 L52 78 Z" fill="#2A2522" opacity="0.75"/>
      {/* Arm toward bride */}
      <path d="M50 60 Q56 65 58 72" stroke="#3D3530" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>

      {/* — BRIDE (right) — */}
      {/* Head */}
      <circle cx="76" cy="46" r="6" fill="#E8D4B8" opacity="0.9"/>
      {/* Veil */}
      <path d="M70 42 Q76 36 82 42 Q80 50 76 52 Q72 50 70 42Z" fill="#FFFDF9" opacity="0.5"/>
      {/* Bodice */}
      <path d="M70 58 Q72 53 76 52 Q80 53 82 58 L83 68 L69 68 Z" fill="#F5EBD9" opacity="0.9"/>
      {/* Sweetheart neckline */}
      <path d="M72 54 Q74 57 76 55 Q78 57 80 54" stroke="#E8C5BA" strokeWidth="0.7" fill="none" opacity="0.6"/>
      {/* Skirt — A-line */}
      <path d="M69 68 Q62 80 60 100 L92 100 Q90 80 83 68 Z" fill="#F5EBD9" opacity="0.9"/>
      {/* Skirt lace hem */}
      <path d="M60 100 Q66 96 72 100 Q78 96 84 100 Q88 96 92 100" stroke="#C9A84C" strokeWidth="0.6" fill="none" opacity="0.5"/>
      {/* Arm toward groom */}
      <path d="M70 60 Q64 65 62 72" stroke="#E8D4B8" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
      {/* Bouquet */}
      <circle cx="60" cy="74" r="5" fill="#F2D9D0" opacity="0.8"/>
      <circle cx="57" cy="71" r="3" fill="#E8C5BA" opacity="0.7"/>
      <circle cx="63" cy="71" r="3" fill="#F2D9D0" opacity="0.65"/>
    </svg>
  );
}
