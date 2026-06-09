// Pre-defined particles — fixed positions avoid re-render randomness
const PARTICLES = [
  { id: 1,  x: 8,  y: 15, s: 5, d: 0,   dur: 4.2 },
  { id: 2,  x: 20, y: 8,  s: 4, d: 0.6, dur: 3.8 },
  { id: 3,  x: 35, y: 5,  s: 7, d: 1.2, dur: 5.0 },
  { id: 4,  x: 50, y: 10, s: 5, d: 0.3, dur: 3.5 },
  { id: 5,  x: 65, y: 4,  s: 6, d: 1.8, dur: 4.6 },
  { id: 6,  x: 80, y: 12, s: 4, d: 0.9, dur: 4.1 },
  { id: 7,  x: 92, y: 20, s: 6, d: 2.1, dur: 3.7 },
  { id: 8,  x: 96, y: 40, s: 5, d: 0.4, dur: 5.2 },
  { id: 9,  x: 93, y: 60, s: 7, d: 1.5, dur: 4.0 },
  { id: 10, x: 88, y: 80, s: 4, d: 2.7, dur: 3.6 },
  { id: 11, x: 75, y: 92, s: 6, d: 0.8, dur: 4.8 },
  { id: 12, x: 58, y: 96, s: 5, d: 1.9, dur: 3.3 },
  { id: 13, x: 42, y: 94, s: 7, d: 0.1, dur: 5.4 },
  { id: 14, x: 28, y: 90, s: 4, d: 2.3, dur: 4.3 },
  { id: 15, x: 12, y: 82, s: 6, d: 1.1, dur: 3.9 },
  { id: 16, x: 4,  y: 65, s: 5, d: 2.6, dur: 4.7 },
  { id: 17, x: 5,  y: 45, s: 7, d: 0.5, dur: 3.4 },
  { id: 18, x: 3,  y: 28, s: 4, d: 1.7, dur: 5.1 },
  { id: 19, x: 22, y: 50, s: 5, d: 2.9, dur: 4.4 },
  { id: 20, x: 70, y: 48, s: 6, d: 2.0, dur: 4.9 },
  { id: 21, x: 82, y: 30, s: 7, d: 1.3, dur: 3.6 },
  { id: 22, x: 55, y: 30, s: 5, d: 0.7, dur: 5.3 },
  { id: 23, x: 14, y: 95, s: 4, d: 2.2, dur: 4.0 },
  { id: 24, x: 45, y: 55, s: 6, d: 0.2, dur: 3.2 },
]

export default function CongratulationsPage({ packageName }) {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#060606',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '24px',
      overflowY: 'auto',
    }}>
      <style>{`
        @keyframes cg-floatUp {
          0%   { transform: translateY(0) scale(1);    opacity: 0.8; }
          100% { transform: translateY(-130px) scale(0.5); opacity: 0; }
        }
        @keyframes cg-pulseRing {
          0%   { transform: scale(1);    opacity: 0.5; }
          50%  { transform: scale(1.18); opacity: 0.12; }
          100% { transform: scale(1);    opacity: 0.5; }
        }
        @keyframes cg-fadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cg-draw {
          to { stroke-dashoffset: 0; }
        }
      `}</style>

      {/* Floating gold particles */}
      {PARTICLES.map(p => (
        <div
          key={p.id}
          style={{
            position: 'fixed',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.s}px`,
            height: `${p.s}px`,
            borderRadius: '50%',
            background: '#C9A84C',
            animation: `cg-floatUp ${p.dur}s ${p.d}s infinite ease-in`,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Corner accents */}
      <div style={{ position:'fixed', top:'20px', left:'20px', width:'52px', height:'52px', borderTop:'1px solid rgba(201,168,76,0.25)', borderLeft:'1px solid rgba(201,168,76,0.25)', pointerEvents:'none' }} />
      <div style={{ position:'fixed', top:'20px', right:'20px', width:'52px', height:'52px', borderTop:'1px solid rgba(201,168,76,0.25)', borderRight:'1px solid rgba(201,168,76,0.25)', pointerEvents:'none' }} />
      <div style={{ position:'fixed', bottom:'20px', left:'20px', width:'52px', height:'52px', borderBottom:'1px solid rgba(201,168,76,0.25)', borderLeft:'1px solid rgba(201,168,76,0.25)', pointerEvents:'none' }} />
      <div style={{ position:'fixed', bottom:'20px', right:'20px', width:'52px', height:'52px', borderBottom:'1px solid rgba(201,168,76,0.25)', borderRight:'1px solid rgba(201,168,76,0.25)', pointerEvents:'none' }} />

      {/* Main content */}
      <div style={{ textAlign: 'center', maxWidth: '580px', width: '100%', position: 'relative', zIndex: 1 }}>

        {/* Animated SVG checkmark */}
        <div style={{
          position: 'relative',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '44px',
          animation: 'cg-fadeUp 0.5s ease both',
        }}>
          {/* Pulsing rings */}
          <div style={{
            position: 'absolute', width: '148px', height: '148px', borderRadius: '50%',
            border: '1px solid rgba(201,168,76,0.35)',
            animation: 'cg-pulseRing 2.5s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute', width: '122px', height: '122px', borderRadius: '50%',
            border: '1px solid rgba(201,168,76,0.2)',
            animation: 'cg-pulseRing 2.5s 0.6s ease-in-out infinite',
          }} />

          {/* SVG with stroke-draw animation */}
          <svg
            width="96" height="96" viewBox="0 0 52 52"
            style={{ display: 'block', filter: 'drop-shadow(0 0 18px rgba(201,168,76,0.45))' }}
          >
            {/* Circle draws in first */}
            <circle
              cx="26" cy="26" r="24"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="1.5"
              strokeDasharray="151"
              strokeDashoffset="151"
              style={{ animation: 'cg-draw 0.8s 0.2s ease forwards' }}
            />
            {/* Checkmark draws in after */}
            <path
              d="M14 27 L22 35 L38 19"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="34"
              strokeDashoffset="34"
              style={{ animation: 'cg-draw 0.45s 0.9s ease forwards' }}
            />
          </svg>
        </div>

        {/* Eyebrow */}
        <div style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.38em',
          textTransform: 'uppercase', color: '#C9A84C',
          marginBottom: '16px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px',
          animation: 'cg-fadeUp 0.6s 0.4s ease both',
        }}>
          <span style={{ width: '32px', height: '1px', background: '#C9A84C', opacity: 0.4 }} />
          Payment Confirmed
          <span style={{ width: '32px', height: '1px', background: '#C9A84C', opacity: 0.4 }} />
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(3.5rem, 9vw, 6.5rem)',
          letterSpacing: '0.04em', color: '#FAFAFA',
          lineHeight: 1, marginBottom: packageName ? '8px' : '28px',
          animation: 'cg-fadeUp 0.6s 0.5s ease both',
        }}>
          You're In!
        </h1>

        {packageName && (
          <div
            className="gold-gradient-text"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              letterSpacing: '0.06em', marginBottom: '28px',
              animation: 'cg-fadeUp 0.6s 0.58s ease both',
            }}
          >
            {packageName}
          </div>
        )}

        {/* Gold divider */}
        <div style={{
          width: '64px', height: '2px',
          background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
          margin: `${packageName ? '0' : '-12px'} auto 28px`,
          animation: 'cg-fadeUp 0.6s 0.62s ease both',
        }} />

        {/* Message */}
        <p style={{
          fontSize: '1rem', fontWeight: 300, color: '#CCCCCC', lineHeight: 1.85,
          marginBottom: '10px',
          animation: 'cg-fadeUp 0.6s 0.65s ease both',
        }}>
          Congratulations on taking the next step toward building your Middleman CEO business.
        </p>
        <p style={{
          fontSize: '0.9rem', fontWeight: 300, color: '#777', lineHeight: 1.85,
          marginBottom: '40px',
          animation: 'cg-fadeUp 0.6s 0.7s ease both',
        }}>
          Our team will be reaching out to you shortly to get everything set up and get your launch underway.
        </p>

        {/* Info cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px',
          marginBottom: '40px',
          animation: 'cg-fadeUp 0.6s 0.75s ease both',
        }}>
          <div style={{ background: '#0F0F0F', border: '1px solid rgba(201,168,76,0.2)', padding: '20px 16px' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>📧</div>
            <div style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: '#C9A84C', marginBottom: '6px',
            }}>
              Check Your Email
            </div>
            <div style={{ fontSize: '0.78rem', color: '#666', lineHeight: 1.6 }}>
              A confirmation has been sent to your inbox
            </div>
          </div>
          <div style={{ background: '#0F0F0F', border: '1px solid rgba(201,168,76,0.2)', padding: '20px 16px' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>📞</div>
            <div style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: '#C9A84C', marginBottom: '6px',
            }}>
              Expect A Call
            </div>
            <div style={{ fontSize: '0.78rem', color: '#666', lineHeight: 1.6 }}>
              Our team will reach out within 24 hours
            </div>
          </div>
        </div>

        {/* Back to home */}
        <button
          onClick={() => { window.location.href = '/' }}
          style={{
            background: 'transparent',
            border: '1px solid rgba(201,168,76,0.4)',
            color: '#C9A84C',
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.1rem', letterSpacing: '0.15em',
            padding: '14px 44px',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
            animation: 'cg-fadeUp 0.6s 0.82s ease both',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(201,168,76,0.2)'
            e.currentTarget.style.background = 'rgba(201,168,76,0.07)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
            e.currentTarget.style.background = 'transparent'
          }}
        >
          Back To Home
        </button>
      </div>
    </div>
  )
}
