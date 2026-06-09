import { useState } from 'react'

export default function PaymentPage({ packageLabel, paymentUrl, onConfirmed }) {
  const [paid, setPaid] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleOpenPayment() {
    window.open(paymentUrl, '_blank', 'noopener,noreferrer')
    setPaid(true)
  }

  async function handleConfirm() {
    setLoading(true)
    await onConfirmed()
    setLoading(false)
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9998,
      background: '#060606',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '24px',
      overflowY: 'auto',
    }}>
      <style>{`
        @keyframes pp-fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pp-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(201,168,76,0.4); }
          50%       { box-shadow: 0 0 0 10px rgba(201,168,76,0); }
        }
      `}</style>

      {/* Corner accents */}
      <div style={{ position:'fixed', top:'20px', left:'20px', width:'52px', height:'52px', borderTop:'1px solid rgba(201,168,76,0.2)', borderLeft:'1px solid rgba(201,168,76,0.2)', pointerEvents:'none' }} />
      <div style={{ position:'fixed', top:'20px', right:'20px', width:'52px', height:'52px', borderTop:'1px solid rgba(201,168,76,0.2)', borderRight:'1px solid rgba(201,168,76,0.2)', pointerEvents:'none' }} />
      <div style={{ position:'fixed', bottom:'20px', left:'20px', width:'52px', height:'52px', borderBottom:'1px solid rgba(201,168,76,0.2)', borderLeft:'1px solid rgba(201,168,76,0.2)', pointerEvents:'none' }} />
      <div style={{ position:'fixed', bottom:'20px', right:'20px', width:'52px', height:'52px', borderBottom:'1px solid rgba(201,168,76,0.2)', borderRight:'1px solid rgba(201,168,76,0.2)', pointerEvents:'none' }} />

      <div style={{
        maxWidth: '540px', width: '100%',
        position: 'relative', zIndex: 1,
        animation: 'pp-fadeUp 0.5s ease both',
      }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.35em',
            textTransform: 'uppercase', color: '#C9A84C',
            marginBottom: '14px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
          }}>
            <span style={{ width: '28px', height: '1px', background: '#C9A84C', opacity: 0.4 }} />
            Secure Checkout
            <span style={{ width: '28px', height: '1px', background: '#C9A84C', opacity: 0.4 }} />
          </div>
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
            letterSpacing: '0.04em', color: '#FAFAFA',
            lineHeight: 1, marginBottom: '10px',
          }}>
            Complete Your Payment
          </h1>
          {packageLabel && (
            <div
              className="gold-gradient-text"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                letterSpacing: '0.06em',
              }}
            >
              {packageLabel}
            </div>
          )}
        </div>

        {/* Card */}
        <div style={{
          background: '#111',
          border: '1px solid rgba(201,168,76,0.2)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Top accent */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, #E8C96A, #C9A84C)',
          }} />

          {/* Step 1 */}
          <div style={{ padding: '36px 40px 32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: paid ? 'rgba(201,168,76,0.15)' : '#C9A84C',
                border: paid ? '1px solid rgba(201,168,76,0.4)' : 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                transition: 'all 0.3s',
              }}>
                {paid
                  ? <span style={{ color: '#C9A84C', fontSize: '0.85rem' }}>✓</span>
                  : <span style={{ color: '#080808', fontWeight: 700, fontSize: '0.85rem', fontFamily: 'sans-serif' }}>1</span>
                }
              </div>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em',
                textTransform: 'uppercase', color: paid ? '#C9A84C' : '#FAFAFA',
              }}>
                Complete Payment on Square
              </div>
            </div>

            <p style={{ fontSize: '0.85rem', color: '#777', lineHeight: 1.7, marginBottom: '20px', paddingLeft: '40px' }}>
              Click the button below to securely complete your payment through Square. It will open in a new tab — come back here once done.
            </p>

            <button
              onClick={handleOpenPayment}
              style={{
                display: 'block', width: '100%',
                padding: '17px',
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.2rem', letterSpacing: '0.15em',
                cursor: 'pointer', border: 'none',
                background: paid
                  ? 'rgba(201,168,76,0.12)'
                  : 'linear-gradient(135deg, #E8C96A, #C9A84C)',
                color: paid ? '#C9A84C' : '#080808',
                transition: 'transform 0.2s, box-shadow 0.2s, background 0.3s',
                animation: !paid ? 'pp-pulse 2s 1s infinite' : 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(201,168,76,0.3)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {paid ? '✓ Payment Tab Opened — Pay Again?' : 'Complete Payment →'}
            </button>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '0 40px' }} />

          {/* Step 2 */}
          <div style={{ padding: '32px 40px 36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: 'transparent',
                border: `1px solid ${paid ? '#C9A84C' : 'rgba(255,255,255,0.1)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                transition: 'border-color 0.3s',
              }}>
                <span style={{
                  fontWeight: 700, fontSize: '0.85rem',
                  fontFamily: 'sans-serif',
                  color: paid ? '#C9A84C' : '#555',
                  transition: 'color 0.3s',
                }}>2</span>
              </div>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: paid ? '#FAFAFA' : '#555',
                transition: 'color 0.3s',
              }}>
                Confirm Your Payment
              </div>
            </div>

            <p style={{
              fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '20px', paddingLeft: '40px',
              color: paid ? '#777' : '#444',
              transition: 'color 0.3s',
            }}>
              Once your Square payment is complete, click below to confirm and access your program.
            </p>

            <button
              onClick={handleConfirm}
              disabled={!paid || loading}
              style={{
                display: 'block', width: '100%',
                padding: '17px',
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.2rem', letterSpacing: '0.15em',
                cursor: paid && !loading ? 'pointer' : 'not-allowed',
                border: `1px solid ${paid ? '#C9A84C' : 'rgba(255,255,255,0.08)'}`,
                background: 'transparent',
                color: paid ? '#C9A84C' : '#333',
                transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.3s, color 0.3s',
                opacity: loading ? 0.7 : 1,
              }}
              onMouseEnter={e => {
                if (paid && !loading) {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(201,168,76,0.2)'
                  e.currentTarget.style.background = 'rgba(201,168,76,0.07)'
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {loading ? 'Confirming...' : '✓ I\'ve Completed My Payment'}
            </button>
          </div>
        </div>

        {/* Security note */}
        <p style={{
          textAlign: 'center', fontSize: '0.75rem', color: '#444',
          marginTop: '20px', lineHeight: 1.6,
        }}>
          🔒 Payment is processed securely by Square. We never store your card details.
        </p>
      </div>
    </div>
  )
}
