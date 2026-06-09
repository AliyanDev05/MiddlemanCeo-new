const steps = [
  { n: '01', text: 'Customer Books Online' },
  { n: '02', text: 'Deposit Is Collected' },
  { n: '03', text: 'Work Is Dispatched' },
  { n: '04', text: 'Business Continues Operating' },
]

export default function HowItWorks() {
  return (
    <section style={{ padding: '100px 48px', background: '#0F0F0F' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <div className="fi" style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.35em',
          textTransform: 'uppercase', color: '#C9A84C',
          marginBottom: '14px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
        }}>
          The Model
          <span style={{ width: '28px', height: '1px', background: '#C9A84C', opacity: 0.4 }} />
        </div>

        <h2 className="fi" style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
          letterSpacing: '0.04em', color: '#FAFAFA',
          marginBottom: '56px',
        }}>
          How It Works
        </h2>

        <div className="fi" style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '48px' }}>
          {steps.map(s => (
            <div key={s.n} style={{
              background: '#161616',
              borderLeft: '3px solid #C9A84C',
              padding: '22px 32px',
              display: 'flex', alignItems: 'center', gap: '20px',
              textAlign: 'left',
            }}>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '2.2rem', color: 'rgba(201,168,76,0.2)', flexShrink: 0, lineHeight: 1,
              }}>
                {s.n}
              </div>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: '#FAFAFA',
              }}>
                {s.text}
              </div>
            </div>
          ))}
        </div>

        {/* Connect · Collect · Repeat */}
        <div className="fi" style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          gap: '8px', flexWrap: 'wrap',
        }}>
          {['Connect', 'Collect', 'Repeat'].map((word, i) => (
            <span key={word} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="gold-gradient-text" style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '2.5rem', letterSpacing: '0.1em',
              }}>
                {word}
              </span>
              {i < 2 && (
                <span style={{
                  color: 'rgba(201,168,76,0.25)', fontSize: '2.5rem',
                  fontFamily: "'Bebas Neue', sans-serif",
                }}>·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
