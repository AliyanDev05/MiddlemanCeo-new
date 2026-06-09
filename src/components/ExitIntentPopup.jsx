import { useState, useEffect } from 'react'
import LeadForm from './LeadForm'

export default function ExitIntentPopup({ onLeadCaptured, blockWhileOpen = false }) {
  const [isOpen,    setIsOpen]    = useState(false)
  const [dismissed, setDismissed] = useState(false)

  // Exit-intent detection
  useEffect(() => {
    if (sessionStorage.getItem('mmceo_lead_captured')) return

    const handleMouseLeave = e => {
      if (e.clientY < 60 && !dismissed && !isOpen && !blockWhileOpen) {
        setIsOpen(true)
      }
    }

    // Mobile fallback: show after 50 seconds
    const mobileTimer = setTimeout(() => {
      if (!dismissed && !isOpen && !blockWhileOpen) setIsOpen(true)
    }, 50000)

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(mobileTimer)
    }
  }, [dismissed, isOpen, blockWhileOpen])

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  function close() {
    setDismissed(true)
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) close() }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9100,
        background: 'rgba(0,0,0,0.9)',
        backdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
        animation: 'ei-fadeIn 0.3s ease',
      }}
    >
      <style>{`
        @keyframes ei-fadeIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes ei-slideUp { from { opacity: 0; transform: translateY(30px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>

      <div style={{
        background: '#0F0F0F',
        border: '1px solid rgba(201,168,76,0.45)',
        maxWidth: '500px', width: '100%',
        padding: '52px 44px',
        position: 'relative',
        animation: 'ei-slideUp 0.35s ease',
        boxShadow: '0 0 80px rgba(201,168,76,0.12)',
      }}>
        {/* Gold corner accents */}
        <div style={{ position:'absolute', top:'-8px', left:'-8px', width:'38%', height:'38%', borderTop:'2px solid #C9A84C', borderLeft:'2px solid #C9A84C', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'-8px', right:'-8px', width:'38%', height:'38%', borderBottom:'2px solid #C9A84C', borderRight:'2px solid #C9A84C', pointerEvents:'none' }} />

        {/* Close button */}
        <button
          onClick={close}
          style={{ position:'absolute', top:'16px', right:'20px', background:'none', border:'none', cursor:'pointer', color:'#555', fontSize:'1.3rem', transition:'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
          onMouseLeave={e => e.currentTarget.style.color = '#555'}
        >
          ✕
        </button>

        <LeadForm
          source="exit_intent"
          eyebrow="Wait — Before You Go"
          headline={<>Don't Leave<br /><span style={{ color: '#C9A84C' }}>Empty Handed.</span></>}
          subtext="Drop your info and we'll personally reach out to answer your questions and show you exactly how this works — no pressure."
          submitLabel="REACH OUT TO ME →"
          successHeadline="Got It!"
          successMessage="We'll be reaching out soon. Keep an eye on your phone and email."
          privacyText="🔒 We'll never spam you. Promise."
          onSuccess={() => { onLeadCaptured?.(); close() }}
          footer={
            <button
              onClick={close}
              style={{
                width: '100%', marginTop: '10px', padding: '13px',
                background: 'transparent', border: '1px solid rgba(255,255,255,0.12)',
                color: '#555', fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em',
                cursor: 'pointer', transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(201,168,76,0.3)'; e.currentTarget.style.color='#888' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.12)'; e.currentTarget.style.color='#555' }}
            >
              No thanks, I'll figure it out myself
            </button>
          }
        />
      </div>
    </div>
  )
}
