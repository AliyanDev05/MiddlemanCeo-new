const items = [
  "What if your income wasn't tied to a paycheck?",
  "What if you had full control over your time?",
  "What if you owned a business that grew city after city?",
  "What if you could build more freedom for your family?",
]

export default function WhatIf() {
  return (
    <section style={{ padding: '100px 48px', background: '#0F0F0F' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div className="fi" style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.35em',
          textTransform: 'uppercase', color: '#C9A84C',
          marginBottom: '20px',
          display: 'flex', alignItems: 'center', gap: '12px',
        }}>
          The Opportunity
          <span style={{ width: '28px', height: '1px', background: '#C9A84C', opacity: 0.4 }} />
        </div>

        <h2 className="fi" style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(2.8rem, 5vw, 5rem)',
          lineHeight: 0.95, letterSpacing: '0.03em', color: '#FAFAFA',
          marginBottom: '56px',
        }}>
          What If <span style={{ color: '#C9A84C' }}>One Decision</span><br />
          Changed Everything?
        </h2>

        <div className="fi" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '2px', marginBottom: '60px',
        }}>
          {items.map((text, i) => (
            <WiCard key={i} text={text} />
          ))}
        </div>

        <p className="fi" style={{
          fontSize: '1.05rem', fontWeight: 300, color: '#777',
          lineHeight: 1.8, maxWidth: '640px',
        }}>
          The Middleman CEO Business Model was built for people who want{' '}
          <strong style={{ color: '#FAFAFA' }}>more out of life</strong> — more freedom, more opportunity, and more control. This is how you get there.
        </p>
      </div>
    </section>
  )
}

function WiCard({ text }) {
  return (
    <div
      style={{
        padding: '30px 34px',
        background: '#161616',
        fontSize: '1rem', fontWeight: 300, lineHeight: 1.65, color: '#777',
        borderLeft: '2px solid transparent',
        transition: 'border-color 0.3s, color 0.3s, background 0.3s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderLeftColor = '#C9A84C'
        e.currentTarget.style.color = '#E8E8E8'
        e.currentTarget.style.background = '#1E1E1E'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderLeftColor = 'transparent'
        e.currentTarget.style.color = '#777'
        e.currentTarget.style.background = '#161616'
      }}
    >
      {text}
    </div>
  )
}
