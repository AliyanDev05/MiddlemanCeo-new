const checkItems = [
  'How the business model works',
  'How customers book online',
  'How income is generated',
  'How to launch your business',
  'How to scale city after city',
]

export default function VideoSection({ onWatchVideo, videoUnlocked }) {
  return (
    <section id="video" style={{ padding: '100px 48px', background: '#080808' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        {/* Header */}
        <div className="fi" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.35em',
            textTransform: 'uppercase', color: '#C9A84C',
            marginBottom: '14px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
          }}>
            Free Business Walkthrough
            <span style={{ width: '28px', height: '1px', background: '#C9A84C', opacity: 0.4 }} />
          </div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
            letterSpacing: '0.04em', color: '#FAFAFA',
            marginBottom: '10px',
          }}>
            See Exactly How It Works
          </h2>
          <p style={{ fontSize: '0.95rem', fontWeight: 300, color: '#777' }}>
            Watch the short presentation below and discover everything you need to know.
          </p>
        </div>

        {/* Video area */}
        <div
          className="fi"
          style={{
            aspectRatio: '16/9',
            background: '#161616',
            border: `1px solid ${videoUnlocked ? 'rgba(201,168,76,0.3)' : 'rgba(201,168,76,0.15)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden',
            cursor: videoUnlocked ? 'default' : 'pointer',
            marginBottom: '32px',
            transition: 'border-color 0.3s',
          }}
          onClick={!videoUnlocked ? onWatchVideo : undefined}
          onMouseEnter={e => {
            if (!videoUnlocked) {
              const btn = e.currentTarget.querySelector('.play-btn-inner')
              const overlay = e.currentTarget.querySelector('.thumb-overlay')
              if (btn) { btn.style.transform = 'scale(1.12)'; btn.style.boxShadow = '0 0 60px rgba(201,168,76,0.55)' }
              if (overlay) overlay.style.opacity = '0.45'
            }
          }}
          onMouseLeave={e => {
            const btn = e.currentTarget.querySelector('.play-btn-inner')
            const overlay = e.currentTarget.querySelector('.thumb-overlay')
            if (btn) { btn.style.transform = 'scale(1)'; btn.style.boxShadow = '0 0 30px rgba(201,168,76,0.25)' }
            if (overlay) overlay.style.opacity = '0.55'
          }}
        >
          {videoUnlocked ? (
            <iframe
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
              src="https://www.youtube.com/embed/amykiZUDO4Q?autoplay=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            /* Thumbnail + play button — click triggers lead gate */
            <>
              {/* YouTube thumbnail */}
              <img
                src="https://img.youtube.com/vi/amykiZUDO4Q/maxresdefault.jpg"
                alt="Video thumbnail"
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                }}
              />

              {/* Dark overlay so play button stays readable */}
              <div
                className="thumb-overlay"
                style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(0,0,0,0.55)',
                  transition: 'opacity 0.3s',
                }}
              />

              {/* Play button + label */}
              <div style={{
                position: 'relative', zIndex: 1,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: '16px',
                textAlign: 'center', padding: '0 20px',
              }}>
                <div
                  className="play-btn-inner"
                  style={{
                    width: '80px', height: '80px', borderRadius: '50%',
                    background: '#C9A84C',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    boxShadow: '0 0 30px rgba(201,168,76,0.25)',
                  }}
                >
                  <div style={{
                    width: 0, height: 0,
                    borderLeft: '28px solid #080808',
                    borderTop: '17px solid transparent',
                    borderBottom: '17px solid transparent',
                    marginLeft: '6px',
                  }} />
                </div>
                <div>
                  <p style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700, fontSize: '1rem', letterSpacing: '0.12em',
                    color: '#FAFAFA', textTransform: 'uppercase', marginBottom: '4px',
                  }}>
                    Watch The Free Walkthrough
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)' }}>
                    Enter your info to watch instantly
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Checklist */}
        <div className="fi" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '12px',
        }}>
          {checkItems.map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: '10px',
              fontSize: '0.88rem', fontWeight: 300, lineHeight: 1.5, color: '#E8E8E8',
            }}>
              <span style={{ color: '#C9A84C', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
