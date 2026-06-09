// ─── DATA ──────────────────────────────────────────────────────────────────

const LAUNCH_PROGRAMS = [
  {
    id: 'pro',
    tier: 'Pro',
    name: 'Pro Launch Program',
    price: '$497',
    priceNote: 'One-Time',
    tagline: 'Best for people who want training, guidance, and support while building their own business.',
    buildTime: null,
    membershipPrice: '$97/month',
    highlight: false,
    badge: null,
    includes: [
      'Business niche selection guidance',
      'Business name assistance',
      'Domain setup assistance',
      'CEO Vault training access',
      'Monthly group coaching',
      'Community access',
      'Business launch checklist',
      'Marketing guides and templates',
      'Startup resources',
      'Access to all program training',
    ],
    excludes: [
      'Website build',
      'Logo design',
      'Automation setup',
      'Done-for-you services',
    ],
    payments: [
      { label: 'Pay in Full — $497', url: 'https://square.link/u/OCKNYBcr', primary: true },
    ],
  },
  {
    id: 'elite',
    tier: 'Elite',
    name: 'Elite Launch Program',
    price: '$2,500',
    priceNote: 'One-Time',
    tagline: 'Best for people who want a complete done-for-you Middleman business.',
    buildTime: '7–10 Business Days',
    membershipPrice: '$197/month',
    highlight: true,
    badge: 'Most Popular',
    includes: [
      'Everything in Pro, Plus:',
      'Custom booking website',
      'Mobile-friendly design',
      'Custom logo and branding',
      'Homepage, About, Services, Booking & Contact Pages',
      'Lead capture forms',
      'Automated booking system',
      'Deposit collection system',
      'Customer notification emails',
      'ISP notification system',
      'Domain connection',
      'Basic SEO setup',
      'Launch support',
    ],
    excludes: null,
    payments: [
      { label: 'Pay in Full — $2,500', url: 'https://square.link/u/7s1IWdwl', primary: true },
      { label: '2 Payments — $1,250/ea', url: 'https://square.link/u/MnKCkVcm', primary: false },
      { label: '3 Payments — $833/ea', url: 'https://square.link/u/4P7StJgl', primary: false },
    ],
  },
  {
    id: 'vip',
    tier: 'VIP',
    name: 'VIP Launch Program',
    price: '$5,000',
    priceNote: 'One-Time',
    tagline: 'Best for people who want the fastest launch and highest level of support.',
    buildTime: '3–5 Business Days',
    membershipPrice: '$297/month',
    highlight: false,
    badge: null,
    includes: [
      'Everything in Elite, Plus:',
      'Priority build queue',
      'VIP onboarding call',
      'Advanced automations',
      'Additional custom pages',
      'Priority support',
      'Personalized growth strategy',
      'Direct access during launch',
      'Faster implementation',
      'Priority updates',
      'Monthly 30-minute strategy session',
    ],
    excludes: null,
    payments: [
      { label: 'Pay in Full — $5,000', url: 'https://square.link/u/I42NTueM', primary: true },
      { label: '2 Payments — $2,500/ea', url: 'https://square.link/u/HnMOEXTI', primary: false },
      { label: '3 Payments — $1,667/ea', url: 'https://square.link/u/YFT6wwXU', primary: false },
    ],
  },
]

const MEMBERSHIPS = [
  {
    tier: 'Pro Membership',
    price: '$97',
    period: '/month',
    highlight: false,
    features: [
      'CEO Vault access',
      'Monthly group coaching call',
      'Community access',
      'Training updates',
      'Marketing templates',
      'Email support',
    ],
  },
  {
    tier: 'Elite Membership',
    price: '$197',
    period: '/month',
    highlight: true,
    features: [
      'Everything in Pro, Plus:',
      'Website hosting',
      'Website maintenance',
      'Software updates',
      'Technical support',
      'Priority email support',
    ],
  },
  {
    tier: 'VIP Membership',
    price: '$297',
    period: '/month',
    highlight: false,
    features: [
      'Everything in Elite, Plus:',
      'Priority support',
      'Monthly 30-min strategy session',
      'Website update requests',
      'Priority platform updates',
      'Direct business growth support',
      'Faster response times',
    ],
  },
]

const WEBSITE_INCLUSIONS = [
  'Homepage',
  'About Page',
  'Services Page',
  'Booking Page',
  'Contact Page',
  'Privacy Policy Page',
  'Terms & Conditions Page',
  'Mobile Optimization',
  'Deposit Collection System',
  'Customer Confirmation Emails',
  'ISP Notification System',
]

// ─── MAIN EXPORT ────────────────────────────────────────────────────────────

export default function Pricing({ onPaymentSelect }) {
  return (
    <section id="pricing" style={{ padding: '100px 48px', background: '#080808' }}>
      <style>{`
        .pricing-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
        .pricing-inclusions-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px 20px; }
        @media (max-width: 960px) {
          .pricing-grid-3 { grid-template-columns: 1fr !important; }
          .pricing-inclusions-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .pricing-inclusions-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>

        {/* ── Section Header ──────────────────────────────────────── */}
        <div className="fi" style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.35em',
          textTransform: 'uppercase', color: '#C9A84C',
          marginBottom: '14px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
        }}>
          Launch Options
          <span style={{ width: '28px', height: '1px', background: '#C9A84C', opacity: 0.4 }} />
        </div>

        <h2 className="fi" style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
          letterSpacing: '0.04em', color: '#FAFAFA',
          marginBottom: '56px', textAlign: 'center',
        }}>
          Choose Your Program
        </h2>

        {/* ── Launch Program Cards ─────────────────────────────────── */}
        <div className="fi pricing-grid-3" style={{ marginBottom: '72px' }}>
          {LAUNCH_PROGRAMS.map(prog => (
            <LaunchCard key={prog.id} program={prog} onPaymentSelect={onPaymentSelect} />
          ))}
        </div>

        {/* ── Elite & VIP Website Inclusions ───────────────────────── */}
        <div className="fi" style={{
          background: '#111111',
          border: '1px solid rgba(201,168,76,0.15)',
          padding: '44px 48px',
          marginBottom: '80px',
        }}>
          <div style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.32em',
            textTransform: 'uppercase', color: '#C9A84C', marginBottom: '6px',
          }}>
            Included With All Elite & VIP Websites
          </div>
          <h3 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
            letterSpacing: '0.06em', color: '#FAFAFA',
            marginBottom: '28px',
          }}>
            Every Site Ships With These Pages & Features
          </h3>
          <div className="pricing-inclusions-grid">
            {WEBSITE_INCLUSIONS.map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                fontSize: '0.85rem', fontWeight: 300, color: '#E0E0E0',
              }}>
                <span style={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.75rem', flexShrink: 0 }}>✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ── Monthly Memberships Header ────────────────────────────── */}
        <div className="fi" style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.35em',
          textTransform: 'uppercase', color: '#C9A84C',
          marginBottom: '14px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
        }}>
          Monthly Plans
          <span style={{ width: '28px', height: '1px', background: '#C9A84C', opacity: 0.4 }} />
        </div>

        <h2 className="fi" style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
          letterSpacing: '0.04em', color: '#FAFAFA',
          marginBottom: '40px', textAlign: 'center',
        }}>
          Required Monthly Membership
        </h2>

        {/* ── Membership Cards ─────────────────────────────────────── */}
        <div className="fi pricing-grid-3" style={{ marginBottom: '52px' }}>
          {MEMBERSHIPS.map((mem, i) => (
            <MembershipCard key={i} membership={mem} />
          ))}
        </div>

        {/* ── Important Notice ─────────────────────────────────────── */}
        <div className="fi" style={{
          background: 'rgba(201,168,76,0.04)',
          border: '1px solid rgba(201,168,76,0.18)',
          padding: '32px 40px',
        }}>
          <div style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.3em',
            textTransform: 'uppercase', color: '#C9A84C', marginBottom: '12px',
          }}>
            Important
          </div>
          <p style={{ fontSize: '0.88rem', color: '#BBB', lineHeight: 1.9, marginBottom: '12px' }}>
            A monthly membership is required to keep the platform active. Membership includes
            hosting, maintenance, software updates, training, coaching, support, and community access.
          </p>
          <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.8, margin: 0 }}>
            If membership is canceled, platform services, coaching access, support, and software
            access are suspended until membership is reactivated.
          </p>
        </div>

      </div>
    </section>
  )
}

// ─── LAUNCH CARD ────────────────────────────────────────────────────────────

function LaunchCard({ program, onPaymentSelect }) {
  const {
    tier, name, price, priceNote, tagline,
    buildTime, membershipPrice, highlight, badge,
    includes, excludes, payments,
  } = program

  return (
    <div style={{
      background: highlight
        ? 'linear-gradient(160deg, #1a150000 0%, #1a1500 30%, #161616 100%)'
        : '#161616',
      padding: '44px 36px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Top accent bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: highlight
          ? 'linear-gradient(90deg, #E8C96A, #C9A84C)'
          : 'rgba(201,168,76,0.18)',
      }} />

      {badge && (
        <div style={{
          position: 'absolute', top: 0, right: 0,
          background: '#C9A84C', color: '#080808',
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.18em',
          textTransform: 'uppercase', padding: '6px 14px',
        }}>
          {badge}
        </div>
      )}

      {/* Tier label */}
      <div style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.3em',
        textTransform: 'uppercase', color: '#C9A84C', marginBottom: '6px',
      }}>
        {tier}
      </div>

      {/* Program name */}
      <div style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '1.75rem', letterSpacing: '0.05em', color: '#FAFAFA',
        marginBottom: '4px',
      }}>
        {name}
      </div>

      {/* Price */}
      <div className="gold-gradient-text" style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '3.2rem', letterSpacing: '0.02em', lineHeight: 1,
        marginBottom: '2px',
      }}>
        {price}
      </div>


      {/* Tagline */}
      <p style={{
        fontSize: '0.82rem', color: '#999', lineHeight: 1.65,
        marginBottom: '22px',
        borderLeft: '2px solid rgba(201,168,76,0.25)',
        paddingLeft: '12px',
      }}>
        {tagline}
      </p>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '18px' }} />

      {/* Includes header */}
      <div style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.28em',
        textTransform: 'uppercase', color: '#C9A84C', marginBottom: '10px',
      }}>
        Includes
      </div>

      {/* Includes list */}
      <ul style={{ listStyle: 'none', flexGrow: 1 }}>
        {includes.map((item, i) => (
          <li key={i} style={{
            padding: '7px 0',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
            fontSize: '0.82rem',
            fontWeight: item.startsWith('Everything') ? 500 : 300,
            color: item.startsWith('Everything') ? '#F0DFA0' : '#E0E0E0',
            display: 'flex', alignItems: 'flex-start', gap: '8px',
          }}>
            <span style={{ color: '#C9A84C', fontWeight: 700, flexShrink: 0, fontSize: '0.72rem', marginTop: '3px' }}>✓</span>
            {item}
          </li>
        ))}
      </ul>

      {/* Does NOT Include */}
      {excludes && (
        <>
          <div style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.28em',
            textTransform: 'uppercase', color: '#555',
            marginTop: '18px', marginBottom: '10px',
          }}>
            Does Not Include
          </div>
          <ul style={{ listStyle: 'none' }}>
            {excludes.map((item, i) => (
              <li key={i} style={{
                padding: '6px 0',
                borderBottom: '1px solid rgba(255,255,255,0.03)',
                fontSize: '0.8rem', fontWeight: 300, color: '#555',
                display: 'flex', alignItems: 'flex-start', gap: '8px',
              }}>
                <span style={{ color: '#444', flexShrink: 0, fontSize: '0.75rem', marginTop: '2px' }}>✗</span>
                {item}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Build Time */}
      {buildTime && (
        <div style={{
          marginTop: '20px',
          background: 'rgba(201,168,76,0.05)',
          border: '1px solid rgba(201,168,76,0.15)',
          padding: '10px 14px',
          display: 'flex', alignItems: 'center', gap: '10px',
        }}>
          <span style={{ color: '#C9A84C', fontSize: '0.95rem' }}>⏱</span>
          <div>
            <div style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: '#888',
            }}>
              Build Time
            </div>
            <div style={{ fontSize: '0.84rem', color: '#E0E0E0', fontWeight: 400 }}>
              {buildTime}
            </div>
          </div>
        </div>
      )}

      {/* Payment Options */}
      <div style={{ marginTop: '24px' }}>
        <div style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.28em',
          textTransform: 'uppercase', color: '#888', marginBottom: '10px',
        }}>
          {payments.length > 1 ? 'Payment Options' : 'Get Started'}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {payments.map((pmt, i) => (
            <PaymentButton
              key={i}
              payment={pmt}
              highlight={highlight}
              isPrimary={i === 0}
              label={`${name} — ${pmt.label}`}
              onPaymentSelect={onPaymentSelect}
            />
          ))}
        </div>
      </div>

      {/* Required Membership */}
      <div style={{
        marginTop: '14px',
        padding: '10px 14px',
        background: 'rgba(255,255,255,0.025)',
        borderLeft: '2px solid rgba(201,168,76,0.2)',
        fontSize: '0.78rem', color: '#666', lineHeight: 1.5,
      }}>
        <span style={{ color: '#C9A84C', fontWeight: 600 }}>Required Membership:</span>{' '}
        {membershipPrice} to keep platform active
      </div>
    </div>
  )
}

// ─── PAYMENT BUTTON ─────────────────────────────────────────────────────────

function PaymentButton({ payment, highlight, isPrimary, label, onPaymentSelect }) {
  const isGoldFill = isPrimary && highlight

  function handleClick() {
    if (onPaymentSelect) {
      onPaymentSelect(label, payment.url)
    } else {
      window.location.href = payment.url
    }
  }

  return (
    <button
      onClick={handleClick}
      style={{
        display: 'block',
        width: '100%',
        padding: isPrimary ? '15px 12px' : '11px 12px',
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: isPrimary ? '1.05rem' : '0.9rem',
        letterSpacing: '0.1em',
        textAlign: 'center',
        cursor: 'pointer',
        border: isGoldFill
          ? 'none'
          : isPrimary
            ? '1px solid rgba(201,168,76,0.45)'
            : '1px solid rgba(201,168,76,0.2)',
        background: isGoldFill ? 'linear-gradient(135deg, #E8C96A, #C9A84C)' : 'transparent',
        color: isGoldFill ? '#080808' : '#C9A84C',
        transition: 'transform 0.18s, box-shadow 0.18s, background 0.18s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = '0 6px 24px rgba(201,168,76,0.2)'
        if (!isGoldFill) e.currentTarget.style.background = 'rgba(201,168,76,0.07)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
        if (!isGoldFill) e.currentTarget.style.background = 'transparent'
      }}
    >
      {payment.label}
    </button>
  )
}

// ─── MEMBERSHIP CARD ────────────────────────────────────────────────────────

function MembershipCard({ membership }) {
  const { tier, price, period, highlight, features } = membership

  return (
    <div style={{
      background: '#161616',
      padding: '36px 32px',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: highlight
          ? 'linear-gradient(90deg, #E8C96A, #C9A84C)'
          : 'rgba(201,168,76,0.15)',
      }} />

      <div style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.3em',
        textTransform: 'uppercase', color: '#C9A84C', marginBottom: '8px',
      }}>
        {tier}
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px', marginBottom: '24px' }}>
        <span className="gold-gradient-text" style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '2.6rem', letterSpacing: '0.02em',
        }}>
          {price}
        </span>
        <span style={{ fontSize: '0.85rem', color: '#777', marginLeft: '2px' }}>{period}</span>
      </div>

      <ul style={{ listStyle: 'none' }}>
        {features.map((f, i) => (
          <li key={i} style={{
            padding: '7px 0',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            fontSize: '0.82rem',
            fontWeight: f.startsWith('Everything') ? 500 : 300,
            color: f.startsWith('Everything') ? '#F0DFA0' : '#E0E0E0',
            display: 'flex', alignItems: 'flex-start', gap: '8px',
          }}>
            <span style={{ color: '#C9A84C', fontWeight: 700, flexShrink: 0, fontSize: '0.72rem', marginTop: '3px' }}>✓</span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  )
}
