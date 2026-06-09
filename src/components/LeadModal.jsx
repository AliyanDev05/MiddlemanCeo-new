import { useEffect } from 'react'
import LeadForm from './LeadForm'

const COPY = {
  video_gate:    {
    eyebrow: 'One Quick Step',
    headline: 'Watch The Free\nWalkthrough',
    subtext: 'Enter your info below and get instant access to the full video presentation.',
    submitLabel: 'WATCH THE VIDEO →',
    successMessage: 'Opening the video now...',
  },
  package_click: {
    eyebrow: 'Almost There',
    headline: "Let's Get You\nStarted",
    subtext: 'Enter your details below and our team will reach out within 24 hours to get your business launched.',
    submitLabel: 'GET STARTED →',
    successMessage: "We've received your info. Someone will reach out within 24 hours!",
  },
  payment_gate:  {
    eyebrow: 'One Quick Step',
    headline: "Almost\nThere",
    subtext: "Enter your details below and you'll be taken directly to complete your payment securely.",
    submitLabel: 'PROCEED TO PAYMENT →',
    successMessage: 'Taking you to payment now...',
  },
  floating_cta:  {
    eyebrow: 'Got Questions?',
    headline: "We'll Reach\nOut To You",
    subtext: 'Drop your info below and someone from our team will personally reach out to answer all your questions.',
    submitLabel: 'REACH OUT TO ME →',
    successMessage: "We've received your info. Someone will reach out within 24 hours!",
  },
}

export default function LeadModal({ isOpen, source, packageName, onClose, onSuccess }) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const copy = COPY[source] || COPY.floating_cta

  if (!isOpen) return null

  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9000,
        background: 'rgba(0,0,0,0.88)',
        backdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
        animation: 'lm-fadeIn 0.25s ease',
      }}
    >
      <style>{`
        @keyframes lm-fadeIn    { from { opacity: 0 } to { opacity: 1 } }
        @keyframes lm-slideUp   { from { opacity: 0; transform: translateY(30px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>

      <div style={{
        background: '#0F0F0F',
        border: '1px solid rgba(201,168,76,0.35)',
        maxWidth: '480px', width: '100%',
        padding: '48px 40px',
        position: 'relative',
        animation: 'lm-slideUp 0.3s ease',
      }}>
        {/* Gold corner accents */}
        <div style={{ position:'absolute', top:'-8px', left:'-8px', width:'36%', height:'36%', borderTop:'2px solid #C9A84C', borderLeft:'2px solid #C9A84C', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'-8px', right:'-8px', width:'36%', height:'36%', borderBottom:'2px solid #C9A84C', borderRight:'2px solid #C9A84C', pointerEvents:'none' }} />

        {/* Close button */}
        <button
          onClick={onClose}
          style={{ position:'absolute', top:'16px', right:'18px', background:'none', border:'none', cursor:'pointer', color:'#555', fontSize:'1.3rem', lineHeight:1, transition:'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
          onMouseLeave={e => e.currentTarget.style.color = '#555'}
        >
          ✕
        </button>

        <LeadForm
          resetKey={isOpen}
          source={source}
          packageName={packageName}
          eyebrow={copy.eyebrow}
          headline={copy.headline}
          subtext={copy.subtext}
          submitLabel={copy.submitLabel}
          successHeadline="You're All Set!"
          successMessage={copy.successMessage}
          onSuccess={onSuccess}
        />
      </div>
    </div>
  )
}
