const testimonials = [
  { quote: "I finally stopped thinking about starting a business and actually launched one.", name: "Jose" },
  { quote: "The system made it simple to get started and focus on growth.", name: "Joseph" },
  { quote: "I wanted something of my own. This gave me a path forward.", name: "Carl" },
]

export default function Testimonials() {
  return (
    <section className="testi-section" style={{ padding: '100px 48px', background: '#0F0F0F' }}>
      <style>{`
        @media (max-width: 768px) {
          .testi-section { padding: 64px 20px !important; }
          .testi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div className="fi" style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.35em',
          textTransform: 'uppercase', color: '#C9A84C',
          marginBottom: '14px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
        }}>
          Real People. Real Businesses.
          <span style={{ width: '28px', height: '1px', background: '#C9A84C', opacity: 0.4 }} />
        </div>

        <h2 className="fi" style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
          letterSpacing: '0.04em', color: '#FAFAFA',
          marginBottom: '48px', textAlign: 'center',
        }}>
          What People Are Saying
        </h2>

        <div className="fi testi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
          {testimonials.map((t, i) => (
            <TestiCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestiCard({ quote, name }) {
  return (
    <div
      style={{
        background: '#161616',
        padding: '40px 32px',
        borderBottom: '2px solid transparent',
        transition: 'border-color 0.3s, background 0.3s',
        cursor: 'default',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderBottomColor = '#C9A84C'; e.currentTarget.style.background = '#1E1E1E' }}
      onMouseLeave={e => { e.currentTarget.style.borderBottomColor = 'transparent'; e.currentTarget.style.background = '#161616' }}
    >
      <div style={{
        fontSize: '2.8rem', color: '#C9A84C', opacity: 0.25,
        fontFamily: 'Georgia, serif', lineHeight: 1, marginBottom: '14px',
      }}>"</div>
      <p style={{
        fontSize: '0.95rem', fontStyle: 'italic', fontWeight: 300,
        lineHeight: 1.75, color: '#E8E8E8', marginBottom: '24px',
      }}>
        {quote}
      </p>
      <div style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.22em',
        textTransform: 'uppercase', color: '#C9A84C',
      }}>
        — {name}
      </div>
    </div>
  )
}
