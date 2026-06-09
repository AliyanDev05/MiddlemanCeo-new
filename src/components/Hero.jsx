export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "100px 48px 80px",
        position: "relative",
        overflow: "hidden",
        gap: "60px",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
          linear-gradient(rgba(201,168,76,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,168,76,0.035) 1px, transparent 1px)
        `,
          backgroundSize: "70px 70px",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 90% at 20% 50%, black 10%, transparent 75%)",
          maskImage:
            "radial-gradient(ellipse 90% 90% at 20% 50%, black 10%, transparent 75%)",
        }}
      />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
          radial-gradient(ellipse 70% 80% at 0% 50%, rgba(201,168,76,0.09) 0%, transparent 65%),
          radial-gradient(ellipse 50% 50% at 100% 100%, rgba(201,168,76,0.04) 0%, transparent 60%)
        `,
        }}
      />

      {/* Left */}
      <div className="fi" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="fi"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#C9A84C",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          The Middleman CEO Program
          <span
            style={{
              display: "block",
              width: "36px",
              height: "1px",
              background: "#C9A84C",
              opacity: 0.5,
            }}
          />
        </div>

        <h1
          className="fi"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(4rem, 8vw, 7.5rem)",
            lineHeight: 0.9,
            letterSpacing: "0.02em",
            marginBottom: "24px",
          }}
        >
          <span className="hero-gradient-text">Middleman</span>
          <em
            style={{
              display: "block",
              fontStyle: "normal",
              fontSize: "0.52em",
              letterSpacing: "0.1em",
            }}
          >
            <span className="gold-gradient-text">CEO</span>
          </em>
        </h1>

        <p
          className="fi"
          style={{
            fontSize: "1.05rem",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "#777",
            maxWidth: "460px",
            marginBottom: "40px",
          }}
        >
          Discover how ordinary people are launching{" "}
          <strong style={{ color: "#E8E8E8", fontWeight: 600 }}>
            income-producing businesses
          </strong>{" "}
          designed to create more freedom, more flexibility, and more control
          over their future.
        </p>

        <a
          href="#video"
          className="fi"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "0.95rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#080808",
            background: "linear-gradient(135deg, #E8C96A, #C9A84C)",
            padding: "17px 36px",
            textDecoration: "none",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 10px 40px rgba(201,168,76,0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <span
            style={{
              width: 0,
              height: 0,
              borderLeft: "12px solid #080808",
              borderTop: "7px solid transparent",
              borderBottom: "7px solid transparent",
              flexShrink: 0,
            }}
          />
          Watch The Free Walkthrough
        </a>
      </div>

      {/* Right — Photo frame */}
      <div
        className="fi"
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "480px",
            aspectRatio: "1/1",
          }}
        >
          {/* Corner border */}
          <div
            style={{
              position: "absolute",
              top: "-12px",
              left: "-12px",
              right: "12px",
              bottom: "12px",
              border: "1px solid rgba(201,168,76,0.25)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(8,8,8,0.6) 0%, transparent 50%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          {/* Hero Image */}
          <img
            src="/1000076171.webp"
            alt="Middleman CEO — Founder & Mentor"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
              position: "relative",
              zIndex: 1,
              filter: "grayscale(10%) contrast(1.05)",
            }}
          />

          {/* Badge — attached to left side of image */}
          <div
            style={{
              position: "absolute",
              left: "-140px",
              bottom: "25px",
              background: "#C9A84C",
              padding: "12px 18px",
              zIndex: 3,
              boxShadow: "-4px 4px 16px rgba(0,0,0,0.5)",
            }}
          >
            <strong
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.1rem",
                letterSpacing: "0.1em",
                color: "#080808",
                display: "block",
              }}
            >
              Middleman CEO
            </strong>
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#080808",
                opacity: 0.7,
              }}
            >
              Founder &amp; Mentor
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
