export default function Nav() {
  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '20px 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'linear-gradient(to bottom, rgba(8,8,8,0.97) 0%, transparent 100%)',
      }}
    >
      <div style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '1.4rem', letterSpacing: '0.18em', color: '#C9A84C',
      }}>
        Middleman CEO
      </div>
      <a
        href="#pricing"
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em',
          textTransform: 'uppercase', color: '#080808',
          background: '#C9A84C', padding: '10px 24px',
          textDecoration: 'none', transition: 'background 0.2s, transform 0.15s',
          display: 'inline-block',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = '#E8C96A'; e.currentTarget.style.transform = 'translateY(-1px)' }}
        onMouseLeave={e => { e.currentTarget.style.background = '#C9A84C'; e.currentTarget.style.transform = 'translateY(0)' }}
      >
        Get Started
      </a>
    </nav>
  )
}
