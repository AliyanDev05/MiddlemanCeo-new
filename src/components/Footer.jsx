export default function Footer() {
  return (
    <footer style={{
      padding: '28px 48px',
      background: '#161616',
      borderTop: '1px solid rgba(201,168,76,0.08)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '12px',
    }}>
      <div style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '1.2rem', letterSpacing: '0.18em', color: '#C9A84C',
      }}>
        Middleman CEO
      </div>
      <p style={{ fontSize: '0.72rem', color: '#777' }}>
        © 2026 Middleman CEO Program. All rights reserved.
      </p>
    </footer>
  )
}
