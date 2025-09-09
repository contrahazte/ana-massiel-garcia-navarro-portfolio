import React, { useEffect, useState } from 'react';
import butterfly from "../assets/serious-butterfly.png";
import djBg from "../assets/deep_house_dj.jpeg";
import Sociedad from "../assets/sociedad.png";
const AnimatedRings = () => {
  const [lit, setLit] = useState(false);
  const [showLine, setShowLine] = useState(false);
  const [animateButterfly, setAnimateButterfly] = useState(false);
 const [logoOpen, setLogoOpen] = useState(false);
  useEffect(() => {
    const startCycle = () => {
      setLit(false);
      setShowLine(true);

      setTimeout(() => {
        setShowLine(false);
        setLit(true);
      }, 5000);

      setTimeout(() => {
        setLit(false);
      }, 10000);

      setTimeout(() => {
        setShowLine(true);
      }, 12000);

      setShowLine(true);
      setAnimateButterfly(false);
      setTimeout(() => setAnimateButterfly(true), 10);
    };

    startCycle();
    const interval = setInterval(startCycle, 17000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Este va fuera y separado
  useEffect(() => {
    setAnimateButterfly(false);
    const timeout = setTimeout(() => setAnimateButterfly(true), 10);
    return () => clearTimeout(timeout);
  }, [showLine]);


  return (
    <>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Great+Vibes&display=swap');

        @keyframes rotateRing {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .ring-0 {
          animation: rotateRing 12s linear infinite;
          transform-origin: 700px 60px;
        }

        .shine-ring {
          stroke-dasharray: 500;
          stroke-dashoffset: 0;
          animation: shine 2.5s linear infinite;
        }

        @keyframes shine {
          0% { stroke-dashoffset: 500; }
          100% { stroke-dashoffset: 0; }
        }

        .ring-text {
          fill: url(#platinumFill);
          font-family: 'Arial Black', sans-serif;
          font-size: 10px;
          text-anchor: middle;
          dominant-baseline: middle;
        }

        .ring-signature {
          font-family: 'Great Vibes', cursive;
          font-size: 19px;
          fill: #f1f1f1;
          opacity: 0.85;
          text-anchor: middle;
          dominant-baseline: middle;
        }

        .building {
          fill: #111;
          stroke: #333;
          stroke-width: 1;
          transition: fill 1s ease, stroke 1s ease;
        }

        .window {
          fill: #ccc;
          opacity: 0;
          transition: opacity 1s ease;
        }

        .window.alt {
          fill: #eee;
        }

        .character {
          fill: #bbb;
          opacity: 0;
          transition: opacity 1s ease;
        }

        .car {
          fill: #222;
          stroke: #111;
          stroke-width: 1;
          transition: fill 1s ease;
        }

        .dog {
          fill: #333;
          stroke: #000;
          stroke-width: 1;
          transition: fill 1s ease;
        }

        .person {
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .city-lit .building {
          fill: #1a1a1a;
          stroke: #ccc;
        }

        .city-lit .window,
        .city-lit .character,
        .city-lit .car,
        .city-lit .dog {
          opacity: 1;
        }

        .city-lit .car {
          fill: #999;
        }

        .city-lit .dog {
          fill: #d5d5d5;
        }

        .city-lit .person {
          opacity: 1;
          fill: #f1f1f1;
        }

        .neon-line {
          stroke: #7b2e2e; /* Caoba (mahogany) */
          stroke-width: 5;
          stroke-linecap: round;
          stroke-dasharray: 15, 10;
          stroke-dashoffset: 1000;
          animation: walkNeon 6s ease-in-out forwards;
          filter: drop-shadow(0 0 6px rgba(123, 46, 46, 0.45));
        }

        @keyframes walkNeon {
          0% { stroke-dashoffset: 1000; opacity: 1; }
          90% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }

        @keyframes flutterEnhanced {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-6px) rotate(-2deg); }
          50% { transform: translateY(3px) rotate(3deg); }
          75% { transform: translateY(-4px) rotate(-1deg); }
        }

        @keyframes fadePulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.03); }
        }

@keyframes particlesFloat {
  0%   { transform: translateY(0);      opacity: 1; }   /* opaca */
  70%  { transform: translateY(-20px);  opacity: 1; }   /* se mantiene opaca la mayor parte */
  100% { transform: translateY(-60px);  opacity: 0; }   /* se desvanece al final */
}

.particles {
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: 1;
  margin: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 16px;
  background: linear-gradient(135deg,rgb(116, 3, 37) 0%,rgb(179, 29, 111) 60%, rgb(216, 75, 117) 100%); /* Caoba */
  color: #fff;
  border: 2px solid rgba(177, 70, 154, 0.85);
  box-shadow: 0 10px 24px rgba(184, 23, 111, 0.35), 0 0 18px rgba(116, 25, 88, 0.45) inset;
  backdrop-filter: saturate(140%) blur(2px);
  overflow: hidden;
  display: inline-block;
  animation: particlesFloat 6s linear forwards;
  z-index: 10;
}

.particles::before {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: 18px;
  background:
    radial-gradient(120px 80px at 10% 10%, rgba(255,255,255,0.20), transparent 60%),
    radial-gradient(120px 80px at 90% 30%, rgba(255,255,255,0.12), transparent 60%);
  pointer-events: none;
  z-index: 1;
  mix-blend-mode: screen;
}

.particles-slogan {
  position: relative;
  z-index: 2;
  font-family: 'Great Vibes', cursive;
  font-size: 2rem;
  color: #fff;
  text-align: center;
  text-shadow: 0 2px 8px rgba(0,0,0,0.35), 0 0 12px rgba(200, 94, 59, 0.9); /* Glow caoba */
  margin: 0;
  opacity: 0;
  animation: fadeInText 1.4s ease-out forwards;
  animation-delay: 0.3s;
}

@keyframes fadeInText {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes sparkleFly {
  0% {
    opacity: 0.6;
    transform: scale(1) translateY(0) translateX(0);
    filter: drop-shadow(0 0 4px #fff) brightness(1.2);
  }
  30% {
    transform: scale(1.05) translateY(-4px) translateX(-2px);
    filter: drop-shadow(0 0 8px #fff) brightness(1.5);
  }
  60% {
    transform: scale(0.95) translateY(2px) translateX(2px);
    filter: drop-shadow(0 0 6px #ccc) brightness(1.3);
  }
  100% {
    transform: scale(1) translateY(0) translateX(0);
    filter: drop-shadow(0 0 6px #ccc) brightness(1.1);
  }
}


.butterfly-animated {
  transition: transform 1s ease, opacity 1s ease;
  animation: sparkleFly 1.8s ease-in-out;
}


        `}
      </style>

      {/* Contenedor principal: 60% de ancho, fondo blanco + borde gris, con background DJ */}

      <section style={{ ...styles.container, margin: "6rem auto", border: '10px solid black', }}>

  {/* ✅ NUEVO: Intro antes de la animación */}


  {/* …todo lo demás tal cual: ZoomableLogo, SVGs, etc. */}
  {/* <ZoomableLogo
    src={Sociedad}
    alt="Sociedad"
    style={{ position: 'absolute', top: '10px', left: '10px', width: '120px', height: '100px', opacity: 0.85, borderRadius: '50%', border: '2px solid #ccc', boxShadow: '0 0 12px rgba(0,0,0,0.3)', zIndex: 5 }}
    caption={`Exposición de valores.\nLámina : 'Sociedad'.`}
  /> */}

  {/* tus SVG, ciudad, slogan, etc. */}



        <svg viewBox="0 0 800 240" style={styles.svg}>
          <defs>
            <radialGradient id="discFill" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#444" />
              <stop offset="60%" stopColor="#111" />
              <stop offset="100%" stopColor="#000" />
            </radialGradient>
            <linearGradient id="platinumFill" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d5d5d5" />
              <stop offset="50%" stopColor="#f1f1f1" />
              <stop offset="100%" stopColor="#d5d5d5" />
            </linearGradient>
            <path id="curvePath" d="M 760,60 a 60,60 0 1,0 -120,0" />
          </defs>

          <g className="ring-0">
            <circle cx={700} cy={60} r={60} style={styles.ring} className="shine-ring" />
            <circle cx={700} cy={60} r={8} fill="#000" />
            <text x={700} y={60} className="ring-text">C O N T R A H A Z T</text>

          </g>
        </svg>

        <svg viewBox="0 0 800 220" style={styles.city} className={`city ${lit ? 'city-lit' : ''}`}>
          {[...Array(20)].map((_, i) => {
            const height = Math.random() * 80 + 80;
            const width = 30;
            const x = i * 40;
            const y = 160 - height;
            const isTriangleRoof = i % 2 === 0;

            return (
              <g key={i}>
                <rect x={x} y={y + 10} width={width} height={height} className="building" />
                {isTriangleRoof && (
                  <polygon
                    points={`${x},${y + 10} ${x + width / 2},${y - 10} ${x + width},${y + 10}`}
                    fill="#333"
                    stroke="#555"
                    strokeWidth="1"
                  />
                )}
                {[...Array(3)].map((_, j) => (
                  <rect
                    key={j}
                    x={x + 5 + (j % 2) * 10}
                    y={y + 20 + j * 20}
                    width="6"
                    height="10"
                    className={`window ${j % 2 === 0 ? '' : 'alt'}`}
                  />
                ))}
                {i % 6 === 0 && (
                  <circle cx={x + 8} cy={y + 20} r="2.5" className="character" />
                )}
              </g>
            );
          })}

          {showLine && (
            <path d="M 0 198 Q 200 180 400 198 T 800 198" className="neon-line" />
          )}

          {[...Array(8)].map((_, i) => (
            <rect key={i} x={i * 100 + 10} y={180} width="30" height="15" className="car" />
          ))}

          <circle cx="700" cy="195" r="6" className="dog" />
          <circle cx="695" cy="192" r="2" fill="#000" />

          {lit && [...Array(4)].map((_, i) => (
            <circle
              key={i}
              cx={100 + i * 150}
              cy={200}
              r={6}
              className="person"
              fill={["#ccc", "#f1f1f1", "#999", "#d5d5d5"][i % 4]}
            />
          ))}
        </svg>

        <div style={styles.sloganContainer}>
          <h2 style={styles.sloganText}>
            Donde la imaginación cobra luz
            <br />
            <span style={styles.subText}>y el arte se convierte en tecnología</span>
          </h2>
          <div style={{
            display: 'flex',
            flexDirection: "row",
            justifyContent: "right",
            marginTop: "10px",
            transition: 'transform 1s ease',
            transform: showLine ? 'translateY(0)' : 'translateY(-10px)'
          }}>
            <img
              src={butterfly}
              alt="Mariposa"
              style={styles.butterfly}
              className={animateButterfly ? "butterfly-animated" : ""}
            />

            {showLine && (
              <div className="particles">
                <p className="particles-slogan">Aquí los sueños nos vuelan... </p>

              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

const styles = {
  container: {
    // ⬇️ NUEVO: 60% del ancho, centrado, fondo blanco y borde gris de 10px
    width: '60%',
    margin: '0 auto',
    backgroundColor: '#fff',
    backgroundImage: `linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.88)), url(${djBg})`,
    // ← aquí usamos djBg como fondo
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    border: '10px solid #ccc',

    // Mantiene el layout original
    padding: '6rem 1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    boxSizing: 'border-box',
  },
  svg: {
    // ⬇️ Responsivo para no desbordar el contenedor al 60%
    width: '100%',
    maxWidth: '800px',
    height: '240px',
  },
  city: {
    width: '100%',
    height: '220px',
    marginTop: '-2rem',
    containerType: 'inline-size',
  },
  ring: {
    fill: 'url(#discFill)',
    stroke: 'none',
    strokeWidth: 0,
    filter: 'none',
  },
  sloganContainer: {
    marginTop: '3rem',
    position: 'relative',
    textAlign: 'center',
  },
  sloganText: {
    fontSize: '2.2rem',
    fontFamily: '"Cinzel Decorative", serif',
    fontWeight: '700',
    color: '#111', // ⬅️ Ajustado para verse bien sobre fondo blanco
    textShadow: '0 0 10px #d5d5d5, 0 0 20px #f1f1f1',
    animation: 'fadePulse 4s ease-in-out infinite',
    margin: 0,
  },
  subText: {
    fontSize: '1.6rem',
    fontFamily: '"Great Vibes", cursive',
    color: '#555', // ⬅️ Mejor contraste en blanco
    display: 'block',
    marginTop: '0.8rem',
    letterSpacing: '1px',
  },
  butterfly: {
    width: '38px',
    height: '38px',
    animation: 'flutterEnhanced 3s infinite ease-in-out',
    filter: 'drop-shadow(0 0 6px #ccc)',
    marginTop: '1.2rem',
  },
};
function ZoomableLogo({ src, alt = "Imagen", style, caption, captionStyle }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const thumbStyle = {
    cursor: "zoom-in",
    ...style,
  };

  const overlayStyle = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.65)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    zIndex: 9999,
  };

  const contentStyle = {
    position: "relative",      // ← Necesario para posicionar el caption
    maxWidth: "90vw",
    maxHeight: "85vh",
  };

  const imgStyle = {
    maxWidth: "90vw",
    maxHeight: "80vh",
    borderRadius: 12,
    boxShadow: "0 12px 40px rgba(0,0,0,.6)",
    background: "#fff",
    display: "block",
  };

  const closeBtnStyle = {
    position: "absolute", top: -14, right: -14,
    width: 38, height: 38, borderRadius: "9999px",
    border: "2px solid #7b2e2e", background: "#fff", color: "#7b2e2e",
    fontSize: 22, lineHeight: 1, display: "grid", placeItems: "center",
    cursor: "pointer", boxShadow: "0 6px 18px rgba(0,0,0,.25)",
  };

  const defaultCaptionStyle = {
    position: "absolute",
    right: 8,
    bottom: 8,
    padding: "6px 10px",
    fontSize: 12,
    color: "#fff",
    background: "rgba(0,0,0,0.6)",
    borderRadius: 8,
    pointerEvents: "none",     // ← No bloquea clics para cerrar el modal
    backdropFilter: "blur(1px)",
    whiteSpace: "nowrap",
  };

  return (
    <>
      <img src={src} alt={alt} style={thumbStyle} onClick={() => setOpen(true)} />

      {open && (
        <div
          style={overlayStyle}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
          role="dialog" aria-modal="true" aria-label="Imagen ampliada"
        >
          <div style={contentStyle}>
            <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar" style={closeBtnStyle}>×</button>
            <img src={src} alt={`${alt} ampliada`} style={imgStyle} />
            {caption && (
              <div style={{ ...defaultCaptionStyle, ...(captionStyle || {}) }}>
                {caption}
              </div>

            )}

          </div>

        </div>
      )}
    </>
  );
}



export default AnimatedRings;
