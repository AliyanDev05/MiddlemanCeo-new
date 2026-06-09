export default function FinalCTA() {
  return (
    <section style={{
      padding: '120px 48px',
      background: '#0F0F0F',
      textAlign: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <h2 className="fi white-to-gold-text" style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(3rem, 6vw, 6rem)',
        letterSpacing: '0.04em',
        marginBottom: '16px',
        position: 'relative',
      }}>
        Ready To Launch?
      </h2>

      <p className="fi" style={{
        fontSize: '1rem', fontWeight: 300, color: '#777',
        marginBottom: '48px', position: 'relative',
      }}>
        Watch the walkthrough. Choose your program. Build your business.
      </p>

      <a
        href="#pricing"
        className="fi"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '12px',
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: '0.95rem', fontWeight: 700, letterSpacing: '0.2em',
          textTransform: 'uppercase', color: '#080808',
          background: 'linear-gradient(135deg, #E8C96A, #C9A84C)',
          padding: '17px 36px', textDecoration: 'none',
          transition: 'transform 0.2s, box-shadow 0.2s',
          position: 'relative',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 40px rgba(201,168,76,0.35)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
      >
        <span style={{ width: 0, height: 0, borderLeft: '12px solid #080808', borderTop: '7px solid transparent', borderBottom: '7px solid transparent', flexShrink: 0 }} />
        Launch My Business Now
      </a>
    </section>
  )
}
