import { useState, useEffect } from 'react'

export default function FloatingCTA({ onOpen, blockWhileOpen = false }) {
  const [visible, setVisible] = useState(false)
  const [pulse, setPulse] = useState(false)

  // Show after user scrolls 400px
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Pulse attention grab every 8 seconds
  useEffect(() => {
    if (!visible) return
    const interval = setInterval(() => {
      setPulse(true)
      setTimeout(() => setPulse(false), 1000)
    }, 8000)
    return () => clearInterval(interval)
  }, [visible])

  if (!visible) return null

  return (
    <>
      <style>{`
        @keyframes floatPulse {
          0%   { box-shadow: 0 4px 24px rgba(201,168,76,0.35); }
          50%  { box-shadow: 0 4px 50px rgba(201,168,76,0.65), 0 0 80px rgba(201,168,76,0.2); }
          100% { box-shadow: 0 4px 24px rgba(201,168,76,0.35); }
        }
        @keyframes slideInFloat {
          from { opacity:0; transform:translateY(20px) }
          to   { opacity:1; transform:translateY(0) }
        }
        .float-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #E8C96A, #C9A84C);
          color: #000;
          border: none;
          cursor: pointer;
          padding: 14px 22px;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: 0.88rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          box-shadow: 0 4px 24px rgba(201,168,76,0.35);
          transition: transform 0.2s, box-shadow 0.2s;
          animation: slideInFloat 0.4s ease;
        }
        .float-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 40px rgba(201,168,76,0.5);
        }
        .float-btn.pulse {
          animation: floatPulse 1s ease;
        }
        .float-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #000;
          flex-shrink: 0;
        }
      `}</style>

      <div style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 8000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '8px',
      }}>
        {/* Tooltip label */}
        <div style={{
          background: '#161616',
          border: '1px solid rgba(201,168,76,0.2)',
          color: '#888',
          fontSize: '0.72rem',
          padding: '6px 12px',
          letterSpacing: '0.05em',
          whiteSpace: 'nowrap',
          fontFamily: "'Barlow', sans-serif",
        }}>
          We're here to help
        </div>

        <button
          className={`float-btn${pulse ? ' pulse' : ''}`}
          onClick={() => { if (!blockWhileOpen) onOpen('floating_cta') }}
          style={{ opacity: blockWhileOpen ? 0.5 : 1 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          Got Questions? Talk To Us
        </button>
      </div>
    </>
  )
}
