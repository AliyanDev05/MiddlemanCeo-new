const cards = [
  { bookings: 10, deposit: 150, weekly: 1500, monthly: 6000, isMid: false },
  { bookings: 20, deposit: 150, weekly: 3000, monthly: 12000, isMid: true },
  { bookings: 30, deposit: 150, weekly: 4500, monthly: 18000, isMid: false },
]

export default function Numbers() {
  return (
    <section className="numbers-section" style={{ padding: '100px 48px', background: '#080808' }}>
      <style>{`
        @media (max-width: 768px) {
          .numbers-section { padding: 64px 20px !important; }
          .numbers-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div className="fi" style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.35em',
          textTransform: 'uppercase', color: '#C9A84C',
          marginBottom: '14px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
          textAlign: 'center',
        }}>
          The Numbers
          <span style={{ width: '28px', height: '1px', background: '#C9A84C', opacity: 0.4 }} />
        </div>

        <h2 className="fi" style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
          letterSpacing: '0.04em', color: '#FAFAFA',
          marginBottom: '56px', textAlign: 'center',
        }}>
          The Power Of Small Numbers
        </h2>

        <div className="fi numbers-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
          {cards.map((c, i) => (
            <NumCard key={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}

function NumCard({ bookings, deposit, weekly, monthly, isMid }) {
  return (
    <div
      style={{
        background: '#161616',
        padding: '44px 36px',
        position: 'relative', overflow: 'hidden',
        transition: 'background 0.3s',
        cursor: 'default',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = '#1E1E1E' }}
      onMouseLeave={e => { e.currentTarget.style.background = '#161616' }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: isMid
          ? 'linear-gradient(90deg, #E8C96A, #C9A84C)'
          : 'rgba(201,168,76,0.15)',
      }} />

      <div style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '3.5rem', lineHeight: 1, color: '#FAFAFA', marginBottom: '4px',
      }}>
        {bookings}{' '}
        <span style={{ fontSize: '1rem', letterSpacing: '0.08em', color: '#777' }}>bookings/week</span>
      </div>

      <div style={{
        fontSize: '0.82rem', color: '#777', lineHeight: 2.1,
        margin: '18px 0', fontWeight: 300,
      }}>
        {bookings} <span style={{ color: '#C9A84C', margin: '0 6px' }}>×</span> ${deposit} deposit<br />
        = ${weekly.toLocaleString()} per week
      </div>

      <div style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '2.6rem', letterSpacing: '0.03em', color: '#C9A84C',
        borderTop: '1px solid rgba(201,168,76,0.15)', paddingTop: '18px',
      }}>
        ${monthly.toLocaleString()}
        <small style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.8rem', color: '#777', display: 'block', fontWeight: 300 }}>
          per month
        </small>
      </div>
    </div>
  )
}
