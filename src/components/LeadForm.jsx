import { useState, useEffect } from 'react'
import { post } from '../api'

export default function LeadForm({
  source,
  packageName    = '',
  eyebrow,
  headline,
  subtext,
  submitLabel    = 'GET STARTED →',
  successHeadline = "You're All Set!",
  successMessage,
  onSuccess,
  privacyText    = '🔒 100% Private. No spam. We only reach out to help you launch.',
  footer         = null,
  resetKey,
}) {
  const [name,    setName]    = useState('')
  const [phone,   setPhone]   = useState('')
  const [email,   setEmail]   = useState('')
  const [loading, setLoading] = useState(false)
  const [done,    setDone]    = useState(false)
  const [error,   setError]   = useState('')

  // Reset form state whenever the parent signals (e.g. modal reopens)
  useEffect(() => {
    if (resetKey === undefined) return
    const t = setTimeout(() => {
      setName(''); setPhone(''); setEmail('')
      setDone(false); setError('')
    }, 300)
    return () => clearTimeout(t)
  }, [resetKey])

  async function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim() || !phone.trim() || !email.trim()) {
      setError('Please fill in all fields.')
      return
    }
    setError('')
    setLoading(true)
    try {
      const data = await post('/api/lead', {
        name: name.trim(), phone: phone.trim(), email: email.trim(),
        source, package: packageName,
      })
      if (data.success) {
        sessionStorage.setItem('mmceo_lead_captured', '1')
        sessionStorage.setItem('mmceo_lead_info', JSON.stringify({
          name: name.trim(), email: email.trim(), phone: phone.trim(),
        }))
        setDone(true)
        setTimeout(() => onSuccess?.(), 1800)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // ── Success state ────────────────────────────────────────────────────────
  if (done) {
    return (
      <div style={{ textAlign: 'center', padding: '20px 0' }}>
        <div style={{
          width: '64px', height: '64px', borderRadius: '50%',
          background: 'rgba(201,168,76,0.12)', border: '2px solid #C9A84C',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 20px', fontSize: '1.6rem', color: '#C9A84C',
        }}>
          ✔
        </div>
        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 700,
          fontSize: '1.8rem', color: '#C9A84C', marginBottom: '10px',
        }}>
          {successHeadline}
        </h3>
        <p style={{ color: '#888', fontSize: '0.88rem', lineHeight: 1.7 }}>
          {successMessage}
        </p>
      </div>
    )
  }

  // ── Form state ───────────────────────────────────────────────────────────
  return (
    <>
      <style>{`
        .lf-input {
          background: #0D0D0D;
          border: 1px solid rgba(201,168,76,0.28);
          color: #fff;
          font-family: 'Barlow', sans-serif;
          font-size: 0.95rem;
          padding: 14px 16px;
          outline: none;
          width: 100%;
          box-sizing: border-box;
          transition: border-color 0.2s;
        }
        .lf-input::placeholder { color: #666; }
        .lf-input:focus { border-color: #C9A84C; }
        .lf-submit {
          width: 100%; padding: 16px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1rem; font-weight: 800;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #000; cursor: pointer; border: none;
          background: linear-gradient(135deg, #E8C96A, #C9A84C);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .lf-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(201,168,76,0.35);
        }
        .lf-submit:disabled { opacity: 0.6; cursor: not-allowed; }
      `}</style>

      {/* Eyebrow */}
      {eyebrow && (
        <div style={{
          fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
          fontSize: '0.7rem', letterSpacing: '0.32em', textTransform: 'uppercase',
          color: '#C9A84C', marginBottom: '12px',
          display: 'flex', alignItems: 'center', gap: '10px',
        }}>
          <span style={{ width: '22px', height: '1px', background: '#C9A84C' }} />
          {eyebrow}
        </div>
      )}

      {/* Headline */}
      {headline && (
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 700,
          fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', lineHeight: 1.1,
          color: '#fff', marginBottom: '12px', whiteSpace: 'pre-line',
        }}>
          {headline}
        </h2>
      )}

      {/* Gold rule */}
      <div style={{
        width: '40px', height: '2px',
        background: 'linear-gradient(90deg, #C9A84C, transparent)',
        margin: '14px 0 18px',
      }} />

      {/* Subtext */}
      {subtext && (
        <p style={{ color: '#888', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '28px' }}>
          {subtext}
        </p>
      )}

      {/* Selected package badge */}
      {packageName && (
        <div style={{
          background: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.2)',
          padding: '10px 14px', marginBottom: '20px',
          fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
          fontSize: '0.75rem', letterSpacing: '0.12em', color: '#C9A84C',
        }}>
          SELECTED: {packageName}
        </div>
      )}

      {/* Fields + submit */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          className="lf-input" type="text"
          placeholder="Your Full Name"
          value={name} onChange={e => setName(e.target.value)}
          autoComplete="name"
        />
        <input
          className="lf-input" type="tel"
          placeholder="Phone Number"
          value={phone} onChange={e => setPhone(e.target.value)}
          autoComplete="tel"
        />
        <input
          className="lf-input" type="email"
          placeholder="Email Address"
          value={email} onChange={e => setEmail(e.target.value)}
          autoComplete="email"
        />
        {error && (
          <p style={{ color: '#e05', fontSize: '0.8rem', margin: '2px 0' }}>{error}</p>
        )}
        <button type="submit" className="lf-submit" disabled={loading}>
          {loading ? 'SENDING...' : submitLabel}
        </button>
      </form>

      {/* Privacy note */}
      {privacyText && (
        <p style={{ color: '#444', fontSize: '0.72rem', textAlign: 'center', marginTop: '12px' }}>
          {privacyText}
        </p>
      )}

      {/* Optional footer slot (e.g. "No thanks" dismiss button) */}
      {footer}
    </>
  )
}
