// src/Home.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import desarrollo from "../assets/desarrollo.png";
import logo from "../assets/logo.png";
import magno from "../assets/magno.png"; // magno.png debe tener fondo transparente
import AnimatedRings from "../components/AnimatedRings";
import Circles from "../components/Circles";
// Asegúrate de que estos cuatro assets existen en ../assets/
import webCreationImg from "../assets/webCreation.png";
import hospitalityImg from "../assets/hospitality.png";
import educationImg from "../assets/education.png";
import technoImg from "../assets/techno.png";
import butterfly from "../assets/serious-butterfly.png";
import WomanWalking from '../assets/WomanWalking.png';
import Table from '../assets/mesa.png';
import BusinessCard from '../components/BusinessCard';
import Pink from "../assets/pink.png";
import img2 from "../assets/buho.png";
import img3 from "../assets/nomad.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import "./Home.css";
import BlackBack from "../assets/black-back.png";
import Nomad from "../assets/nomadHouses.jpg";
import PinckBack from "../assets/pinkBack.png";
import Contrahazt_code from "../assets/contrahazt_ code.png";
// =============================
//   SECCIÓN BOSQUE ENCANTADO
// =============================
const enchantedSectionStyle = {
  position: 'relative',
  padding: '6rem 2rem',
  background: 'linear-gradient(180deg, #1b2735 0%, #090a0f 100%)',
  overflow: 'hidden',
  color: '#fff',
  textAlign: 'center'
};

const sloganStyle = {
  fontSize: '2rem',
  fontStyle: 'italic',
  maxWidth: '800px',
  margin: '0 auto 2rem',
  lineHeight: '1.4',
  textShadow: '0 0 8px rgba(0,0,0,0.7)'
};

const butterflyAnimKeyframes = `
  @keyframes fly {
    0%   { transform: translate(-50px, 0) rotate(0deg); opacity: 0; }
    10%  { opacity: 1; }
    50%  { transform: translate(120vw, -30vh) rotate(360deg); }
    90%  { opacity: 1; }
    100% { transform: translate(130vw, -40vh) rotate(720deg); opacity: 0; }
  }
`;

// Un par de clases que generen instancias de mariposas en diferentes delays
const butterflyStyle = (size, delay) => ({
  position: 'absolute',
  top: `${20 + Math.random() * 60}%`,
  left: `-${size}px`,
  width: `${size}px`,
  animation: `fly ${10 + Math.random() * 10}s linear ${delay}s infinite`,
  pointerEvents: 'none'
});
const shineKeyframes = `
  @keyframes shine {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
`;



// =============================
//   STYLES GLOBALES / UTILES
// =============================
const neonHeadingStyle = {
  display: 'flex',
  justifyContent: 'center',
  backgroundImage: `url(${Table})`,
  backgroundSize: '200% auto',            // Hace más grande el fondo para el movimiento
  backgroundPosition: 'center',
  padding: '0.20em 0.5em',
  color: 'black',
  textShadow: [
    '0 0 6px rgb(92, 30, 11)',
    '0 0 12px rgba(94, 45, 10, 0.8)',
    '0 0 18px rgba(173, 74, 27, 0.6)',
    '0 0 24px rgba(250, 125, 71, 0.4)',
    '0 0 32px rgba(139, 69, 19, 0.3)'
  ].join(', '),
  fontSize: '2rem',
  marginBottom: '1rem',
  textAlign: 'center',
  borderRadius: '0.25em',
  /* Aquí aplicamos la animación */
  animation: 'shine 3s ease-in-out infinite'
};


const sectionStyle = { padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', color: '#fff' };
const textStyle = { fontSize: '20px', lineHeight: '2.2', marginBottom: '1rem' };
const packContainerStyle = { display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '2rem', marginTop: '2rem' };
const packCardStyle = {
  position: 'relative',
  backgroundColor: '#1A1A1A',
  border: '2px solid grey',
  borderRadius: '8px',
  padding: '1.5rem',
  flex: '1 1 300px',
  maxWidth: '350px'
};

const packTitleStyle = { color: '#ECF0F1', fontSize: '1.5rem', marginBottom: '0.5rem', textAlign: 'center' };
const priceStyle = {
  color: 'white',                         // texto blanco
  textShadow: '0 0 8px whitesmoke', fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem'
};
const serviceListStyle = { listStyle: 'none', padding: '0', lineHeight: '1.4' };
const serviceItemStyle = { marginBottom: '0.5rem', display: 'flex', alignItems: 'center' };
const bulletStyle = { display: 'inline-block', width: '8px', height: '8px', backgroundColor: 'black', borderRadius: '50%', marginRight: '0.75rem' };
const packLogoStyle = { position: 'absolute', top: '8px', right: '8px', width: '40px', height: 'auto', opacity: 0.8 };

// Directora
const directorSectionStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem 2rem 0' };
const flipContainerStyle = { perspective: '1000px', width: '300px', height: '450px', marginBottom: '1.5rem' };
const flipInnerStyle = { position: 'relative', width: '100%', height: '100%', transformStyle: 'preserve-3d', transition: 'transform 1s' };
const flipFaceStyle = { position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', border: '4px solid white', boxShadow: '0 0 12px rgba(252, 241, 252, 0.8)', borderRadius: '8px', overflow: 'hidden' };
const frontImageStyle = { ...flipFaceStyle, transform: 'rotateY(0deg)', objectFit: 'cover' };
const backImageStyle = { ...flipFaceStyle, transform: 'rotateY(180deg)', objectFit: 'cover', backgroundColor: '#111' };
const directorNameStyle = { color: '#ECF0F1', fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '0.5rem', textAlign: 'center' };
const directorTitleStyle = { color: '#BDC3C7', fontSize: '1rem', fontStyle: 'italic', textAlign: 'center', marginBottom: '1rem' };

// Misión + Galería
const missionSectionStyle = { backgroundColor: '#FFFFFF', color: '#333333', padding: '4rem 2rem' };
const missionHeadingStyle = { fontSize: '2rem', color: '#2C3E50', textAlign: 'center', marginBottom: '2rem', marginTop: '4rem' };
const missionTextStyle = { fontSize: '1.1rem', color: '#4A4A4A', lineHeight: '1.6', maxWidth: '850px', margin: '0 auto 1.5rem', textAlign: 'center' };
const galleryItemBaseStyle = {
  flex: '1 1 280px',   // crece y encoge hasta un ancho base de 280px
  maxWidth: '240px',   // no excede los 280px
  height: '270px',
  borderRadius: '8px',
  overflow: 'hidden',
  gap: "1.5rem",
  border: '1px solid #2980B9',
  boxSizing: 'border-box',
  transition: 'all 0.3s ease-out',
  backgroundColor: '#f8f9fa',
  cursor: 'pointer'
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: "center",
  gap: '1rem',
};

const galleryImageStyle = { width: '100%', height: '100%', objectFit: 'cover' };
const hoverOverlayStyle = { position: 'absolute', top: '8px', right: '8px', fontSize: '1.5rem', color: '#fff', opacity: 1 };
const galleryFlipContainerStyle = { perspective: '1000px', width: '100%', height: '100%', position: 'relative' };
const galleryFlipInnerStyle = { position: 'relative', width: '100%', height: '100%', transformStyle: 'preserve-3d', transition: 'transform 0.6s' };
const galleryFlipFaceStyle = { position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden' };
const galleryBackFaceStyle = { ...galleryFlipFaceStyle, transform: 'rotateY(180deg)', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: '#333' };

// Reseñas
const reviewsSectionStyle = { padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto', color: '#fff' };
const carouselContainerStyle = { position: 'relative', overflow: 'hidden', marginTop: '2rem' };
const carouselInnerStyle = { display: 'flex', transition: 'transform 0.5s ease' };
const reviewCardStyle = { backgroundColor: '#1A1A1A', border: '2px solid grey', borderRadius: '8px', padding: '1.5rem', margin: '0 1rem', flex: '0 0 calc(33.333% - 2rem)', boxSizing: 'border-box', boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)', minWidth: '300px' };
const reviewTextStyle = { fontStyle: 'italic', color: '#BDC3C7', marginBottom: '1rem' };
const reviewAuthorStyle = { color: '#ECF0F1', fontWeight: 'bold', textAlign: 'right' };
const carouselButtonStyle = { position: 'absolute', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', padding: '0.5rem 1rem', fontSize: '1.25rem', cursor: 'pointer', borderRadius: '4px', zIndex: 1 };
const prevButtonStyle = { ...carouselButtonStyle, left: '0.5rem' };
const nextButtonStyle = { ...carouselButtonStyle, right: '0.5rem' };

// Banner
const bannerSectionStyle = { width: '100%', padding: '0.3rem 2rem', backgroundColor: `#111`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#ECF0F1' };
const bannerTitleStyle = { marginBottom: '0.5rem' };
const bannerTextStyle = { ...textStyle, color: '#BDC3C7', fontSize: '1.125rem', textAlign: 'center', maxWidth: '800px' };

// Keyframes para float y sparkle
const floatKeyframes = `
  @keyframes float {
    0%,100% { transform: translateY(0); }
    50%    { transform: translateY(-15px); }
  }
`;

const sparkleKeyframes = `
  @keyframes sparkle {
    0%   { box-shadow:0 0 3px 1px rgba(255,255,0,0.8); }
    50%  { box-shadow:0 0 12px 4px rgba(255,255,0,0.6); }
    100% { box-shadow:0 0 3px 1px rgba(255,255,0,0.8); }
  }
`;
const reviewsData = [
  { text: "“NEONCODE transformó por completo nuestra web. El diseño artístico es espectacular y refleja nuestra identidad.”", author: "– Carla M., Restaurante" },
  { text: "“Gracias a NEONCODE, incrementamos nuestras reservas turísticas. El equipo entendió nuestra visión a la perfección.”", author: "– Pedro G., Agencia de Viajes" },
  { text: "“El logo y la web de eventos que desarrollaron es simplemente mágico. Captaron la esencia de nuestro festival.”", author: "– Sofía R., Productora de Eventos" },
  { text: "“La implementación de nuestro sistema de reservas para apartamentos es impecable. Muy profesionales y atentos.”", author: "– Javier L., Apartamentos Turísticos" },
  { text: "“Innovador, creativo y eficiente. NEONCODE hizo que nuestra tienda en línea brillara desde el primer día.”", author: "– Laura T., Tienda Online" },
  { text: "“Nuestros clientes adoran el blog que integraron con contenido dinámico y diseño responsivo. ¡Excelente trabajo!”", author: "– Alejandro K., Blog de Moda" },
  { text: "“Con el panel de venta de entradas, nuestras ganancias aumentaron y la experiencia de usuario mejoró notablemente.”", author: "– Miguel S., Conciertos y Eventos" },
  { text: "“La estética y funcionalidad de nuestro salón de tatuajes virtual brillan gracias a NEONCODE. ¡Los recomiendo!”", author: "– Raquel C., Salón de Tatuajes" },
  { text: "“Atención al detalle y pasión por el arte digital. Hemos recibido multitud de elogios por nuestra página web.”", author: "– Daniela F., Artista Plástica" }
];
// Magno
const magnoContainerStyle = { position: 'fixed', bottom: '20px', right: '20px', width: '200px', zIndex: 1000, textAlign: 'center' };
const dialogStyle = { backgroundColor: '#FFF', color: '#000', padding: '0.75rem 0.5rem', borderRadius: '12px', marginBottom: '0.5rem', fontSize: '0.875rem', lineHeight: '1.3', textAlign: 'left' };
const catImageStyle = { width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '0.5rem', backgroundColor: 'transparent' };
const contactButtonStyle = { backgroundImage: `url(${Table})`, color: '#FFF', padding: '0.8rem 1.8rem', fontSize: '1rem', border: 'none', borderRadius: '6px', cursor: 'pointer', width: '100%' };

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMagno, setShowMagno] = useState(false);
  const [showSparkle, setShowSparkle] = useState(false);
  const [dialogStep, setDialogStep] = useState(0);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [hoverStates, setHoverStates] = useState([false, false, false, false]);
  const [flipStates, setFlipStates] = useState([false, false, false, false]);
  // persistir estado de "contacto" entre recargas
  const [showContact, setShowContact] = useState(() => localStorage.getItem('showContact') === 'true');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  const missionRef = useRef(null);
  const fotos = [Contrahazt_code, img2, img3];
  const [active, setActive] = useState(null);
  const year = new Date().getFullYear();
  // Cerrar con ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const frases = [
    "Se basó en la búsqueda del color neón que integrara elementos místicos sobre un fondo negro.",
    "La profesionalidad y la disciplina lideraron esta idea creativa donde el contraste de los colores primarios,la creación de una mascota creativa y un concepto ambicioso destinado a un rango de edad específica hicieron que destacara.",
    "El objetivo clave era la reconfección de un logo que utilizaba estilos básicos y alcanzaramos trazos más artísticos e innovadores que mezclaran técnología y medio ambiente.",
    "El objetivo esencial de este reto fue el trabajo de la alineación y el contraste de distintos tonos de un mismo color para lograr visibilidad y expansión del mensaje de venta",
    "El objetivo de este proyecto fue la explicación de la oferta de empresa con matices artísticos. Se resaltó el movimiento innovador , agregando toques de poesía, ilusión y la superposición de tono gris sobre fondo negro"

  ];



  // Cerrar con ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const mensajes = [
    `Hola, soy Magno, tu amigo y acompañante en la visita por nuestras hermosas instalaciones tecnológicas. Estoy aquí para trasmitirte la ilusión que nos hace que te hayas pasado a ver que tan buenos somos en lo nuestro`,
    `Esta web se creó en un plazo de un día y medio,representando un reto a contratiempos.`,
    `Espero que disfrutes nuestras instalaciones.`
  ];
  useEffect(() => {
    if (!document.getElementById('shine-keyframes')) {
      const style = document.createElement('style');
      style.id = 'shine-keyframes';
      style.innerHTML = shineKeyframes;
      document.head.appendChild(style);
    }
  }, []);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  // Inyectar keyframes
  useEffect(() => {
    if (!document.getElementById('float-keyframes')) {
      const style = document.createElement('style');
      style.id = 'float-keyframes';
      style.innerHTML = floatKeyframes;
      document.head.appendChild(style);
    }
    if (!document.getElementById('sparkle-keyframes')) {
      const style = document.createElement('style');
      style.id = 'sparkle-keyframes';
      style.innerHTML = sparkleKeyframes;
      document.head.appendChild(style);
    }
  }, []);

  // Mostrar Magno cada 2h
  useEffect(() => {
    const last = localStorage.getItem('magnoLastSeen');
    const now = Date.now();
    if (!last || now - +last > 2 * 60 * 60 * 1000) {
      setShowMagno(true);
      setShowSparkle(true);
      localStorage.setItem('magnoLastSeen', now.toString());
    }
  }, []);

  // Transición sparkle → diálogo
  useEffect(() => {
    if (!showMagno || !showSparkle) return;
    const t = setTimeout(() => {
      setShowSparkle(false);
      setDialogStep(0);
    }, 2000);
    return () => clearTimeout(t);
  }, [showMagno, showSparkle]);

  useEffect(() => {
    // Mostrar Magno cada 2h (o en la primera visita)
    const last = localStorage.getItem('magnoLastSeen');
    const now = Date.now();
    if (!last || now - +last > 2 * 60 * 60 * 1000) {
      setShowMagno(true);
      setShowSparkle(true);
      localStorage.setItem('magnoLastSeen', now.toString());
    }
  }, []);

  useEffect(() => {
    // Sparkle inicial → luego primer mensaje
    if (!showMagno || !showSparkle) return;
    const t = setTimeout(() => {
      setShowSparkle(false);
      setDialogStep(0);
    }, 2000);
    return () => clearTimeout(t);
  }, [showMagno, showSparkle]);

  useEffect(() => {
    // Avanzar mensajes
    if (!showMagno || showSparkle) return;

    if (dialogStep < mensajes.length - 1) {
      const t = setTimeout(() => setDialogStep(s => s + 1), 8000);
      return () => clearTimeout(t);
    } else {
      // Último mensaje → Magno se va, aparece botón
      const t = setTimeout(() => {
        setShowMagno(false);   // Magno + carteles fuera
        setShowContact(true);  // Solo queda el botón
        localStorage.setItem('showContact', 'true');
      }, 6000);
      return () => clearTimeout(t);
    }
  }, [showMagno, showSparkle, dialogStep]);


  // Flip directora
  useEffect(() => {
    const iv = setInterval(() => setIsFlipped(f => !f), 12000);
    return () => clearInterval(iv);
  }, []);

  // IntersectionObserver galería
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => setSectionVisible(e.isIntersecting), { threshold: 0.2 });
    if (missionRef.current) obs.observe(missionRef.current);
    return () => obs.disconnect();
  }, []);

  // Carousel reseñas
  const handlePrev = () => setCurrentIndex(p => Math.max(p - 3, 0));
  // Ahora usamos reviewsData.length en lugar de mensajes.length
  const handleNext = () => setCurrentIndex(p => Math.min(p + 3, reviewsData.length - 3));


  // Hover / flip galería
  const handleMouseEnter = idx => setHoverStates(s => s.map((v, i) => i === idx ? true : v));
  const handleMouseLeave = idx => setHoverStates(s => s.map((v, i) => i === idx ? false : v));
  const handleClickFlip = idx => setFlipStates(s => s.map((v, i) => i === idx ? !v : v));

  // Detectar móvil
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div style={{ backgroundColor: "#251d6b" }}>
      <div style={{ backgroundColor: '#251d6b' }}>
        {/* Banner */}

        <section style={{ ...bannerSectionStyle, backgroundColor: "white", backgroundImage: `url(${PinckBack})`, backgroundSize: "200% auto", backgroundPosition: "center", borderRadius: "15px" }}>
          <div className="heroRow">
            <img src={logo} alt="Logo" className="heroLogo heroLogo--left" />

            <div className="heroCopy">
              <h1 className="heroTitle">Bienvenidos al Portafolio profesional de</h1>
              <strong className="heroName">
                Ana Massiel
                <span className="heroSurname"> García Navarro</span>
              </strong>
            </div>

            <img src={logo} alt="Logo" className="heroLogo heroLogo--right" />
          </div>

          <p style={{ fontSize: "1.5rem", bannerTextStyle, borderRadius: "15px", fontStyle: "italic", marginTop: 0, color: "#d7d7d7" }}>Full Stack Developer, Diseñadora y Escritora</p>

        </section>
        <div style={{ width: "100%", backgroundColor: "black", paddingTop: "3rem", paddingBottom: "3rem" }}>

          <p>
            <Circles />
          </p>
          <p style={{ fontSize: "2.2rem", bannerTextStyle, padding: "2rem", borderRadius: "15px", fontStyle: "italic", color: "#ffcfcf",marginBottom:"7rem" }}>Soy amante de la creación en todas sus formas. Me inspira el desarrollo creativo.</p>
          {/* Quiénes Somos */}<div>

            <AnimatedRings style={{ marginBottom: "0" }} />

          </div>

        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", maxWidth: "1200px", margin: "auto", padding: "2rem", fontStyle: "italic" }}>


          <div style={{ fontStyle: "italic", fontSize: "1.4rem", lineHeight: "1.9", marginTop: "1rem", color: "grey" }}>
            <h2
              id="quienes-title"
              className="title-glow"
              style={{ marginTop: "2rem", fontSize: "3.2rem", fontStyle: "italic", textAlign: "center", color: "black" }}
            >
              Presentación
            </h2>

            <p
              className="hover-card"
              style={{ maxWidth: "900px", margin: "0", backgroundColor: "black", padding: "1.9rem 2rem" }}
            >
              Comencé mi viaje dentro de la programación como parte de mi establecimiento en Málaga, en 2023.
            </p>

            <p
              className="hover-card"
              style={{ maxWidth: "900px", margin: "0", backgroundColor: "#0c0c0c", padding: "1rem 2rem" }}
            >
              Me parece fascinante la posibilidad que tengo, como programadora, a través del código y el diseño web, de crear formas de arte complejas. Poder expresarme en colores y movimientos que dirijan el proceso creativo me hace querer esforzarme en la búsqueda continua de nuevas formas de llegar al cliente, haciendo que se sienta todo el tiempo acompañado, respaldado y entretenido con el recorrido por las vistas de cada proyecto; porque creo que un espacio virtual en línea debe brillar tanto como mi hambre de innovación continua.
            </p>

            <p
              className="hover-card hover-card--light"
              style={{ maxWidth: "900px", margin: "0", backgroundColor: "white", padding: "1.9rem 2rem" }}
            >
              Busco tener la oportunidad de seguir estudiando con precisión las necesidades únicas de cada cliente, para luego transformarlas en sitios web que no solo cumplen objetivos, sino que también inspiren y cautiven y que en cada obra se combine tecnología, diseño y pasión.
            </p>
          </div>

        </div>
        <section
          aria-labelledby="quienes-title"

        >
          {/* Contenido */}
          <div style={{ marginTop: "5rem" }} >
            <div style={containerStyle}>
              <div>

              </div>
            </div>


          </div>
        </section>
        <div
          className="splash-section"
          style={{
            display: "flex",
            justifyContent: "center",
            color: "white",
            backgroundImage: `url(${BlackBack})`,
            backgroundSize: "200% auto",
            backgroundPosition: "center",
            borderRadius: "15px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", marginTop: "5rem" }}>
            <h2 style={{ fontSize: "3rem", bannerTitleStyle, marginLeft: "3rem" }}>Principales Lenguajes & Frameworks & Herramientas</h2>
            <div className="splash-grid">

              <figure className="splash" style={{ "--delay": "0s", "--orbit": "18s" }}>
                <img className="splash-img" src={Pink} alt="Salpicadura rosa 1" />
                <figcaption><p className="splash-caption">React</p></figcaption>
              </figure>
              <figure className="splash" style={{ "--delay": ".24s", "--orbit": "22s" }}>
                <img className="splash-img" src={Pink} alt="Salpicadura rosa 3" />
                <figcaption><p className="splash-caption">CSS</p></figcaption>
              </figure>
              <figure className="splash" style={{ "--delay": ".12s", "--orbit": "20s" }}>
                <img className="splash-img" src={Pink} alt="Salpicadura rosa 2" />
                <figcaption><p className="splash-caption">Node</p></figcaption>
              </figure>

              <figure className="splash" style={{ "--delay": ".24s", "--orbit": "22s" }}>
                <img className="splash-img" src={Pink} alt="Salpicadura rosa 3" />
                <figcaption><p className="splash-caption">API RESTful</p></figcaption>
              </figure>
              <figure className="splash" style={{ "--delay": ".24s", "--orbit": "22s" }}>
                <img className="splash-img" src={Pink} alt="Salpicadura rosa 3" />
                <figcaption><p className="splash-caption">Flutter</p></figcaption>
              </figure>
              <figure className="splash" style={{ "--delay": ".24s", "--orbit": "22s" }}>
                <img className="splash-img" src={Pink} alt="Salpicadura rosa 3" />
                <figcaption><p className="splash-caption">FRAMER MOTION</p></figcaption>
              </figure>
              <figure className="splash" style={{ "--delay": ".24s", "--orbit": "22s" }}>
                <img className="splash-img" src={Pink} alt="Salpicadura rosa 3" />
                <figcaption><p className="splash-caption">Canva</p></figcaption>
              </figure>
            </div>
          </div>
        </div>
        <h2 className="portfolioIntroTitle">
          He reunido ejemplos de mis trabajos: logos, pósters y una aplicación web representativa
        </h2>
        <div style={{ maxWidth: "1200px", margin: "auto", marginTop: "10rem", padding: "2rem" }}>
          <h2 className='seleccione'>Algunos logos destacados</h2>

          <div className="masonry">

            {[Contrahazt_code, img2, img3].map((src, i) => (
              <button
                key={i}
                className="masonry__item"
                onClick={() => setActive(i)}
                aria-label={`Abrir frase ${i + 1}`}
              >

                <img src={src} alt={`Imagen ${i + 1}`} className="masonry__img" />

              </button>

            )
            )
            }

          </div>
          <p style={{ fontSize: "21px", textAlign: "center", marginBottom: "4rem", color: "black" }}>Al tocar sobre el logo encontrará una breve descripción sobre el concepto clave que se pretendía alcanzar.</p>
        </div>

        <div style={{ maxWidth: "1200px", margin: "auto", padding: "2rem" }}>
          <h2 className="seleccione">Algunos pósters destacados</h2>

          {/* SOLO PÓSTERS */}
          <div className="masonry masonry--posters">
            {[img4, img5].map((src, i) => {
              const logosCount = 3;              // índices 0,1,2 ya los ocupan los logos
              const fraseIndex = logosCount + i; // pósters: 3,4
              return (
                <button
                  key={fraseIndex}
                  className="masonry__item"
                  onClick={() => setActive(fraseIndex)}
                  aria-label={`Abrir frase ${fraseIndex + 1}`}
                >
                  <img
                    src={src}
                    alt={`Póster ${i + 1}`}
                    className="masonry__img"
                    data-fit="contain"           // que se vea completo
                    loading="lazy"
                  />
                </button>
              );
            })}
          </div>

          <p style={{ fontSize: "21px", textAlign: "center", marginBottom: "4rem", color: "black" }}>
            Al tocar sobre el póster encontrará una breve descripción sobre el concepto clave que se pretendía alcanzar.
          </p>
        </div>

        {active !== null && (
          <div className="modal-overlay" onClick={() => setActive(null)}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
              <p className="modal-text">{frases[active]}</p>
              <button
                className="modal-close"
                onClick={() => setActive(null)}
                aria-label="Cerrar"
              >
                ×
              </button>
            </div>
          </div>
        )}
        <section>
          <div style={{ maxWidth: "1200px", margin: "auto", padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <h2 className="seleccione" style={{ marginTop: "5rem" }}>Aplicación web Nomad-coliving</h2>

            <a
              href="https://nomad-house.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir sitio Nomad-coliving (se abre en una nueva pestaña)"
              className="nomad-card"
              style={{ maxWidth: "600px", width: "100%" }}
            >
              <img
                src={Nomad}        /* o {img3} */
                alt="Vista previa del sitio Nomad-coliving"
                loading="lazy"
                className="nomad-img"
              />
            </a>

            <div style={{ textAlign: "center", marginTop: ".5rem", color: "black", maxWidth: "600px" }}>
              <p style={{ fontStyle: "italic", margin: "0.5rem 0", color: "#7f8081" }}>
                He creado una web representativa de mi trabajo. El proyecto trata sobre una aplicación web de gestión de apartamentos turísticos, con una lógica central que acompaña al cliente desde la exploración de las casas de alquiler hasta la reserva del apartamento turístico.
              </p>
              <p style={{ fontStyle: "italic", margin: "0.25rem 0" }}>
                Haz clic en la imagen para ver el sitio (demo)
              </p>
            </div>


            {/* Estilos de animación */}
            <style>{`
      @keyframes nomad-float {
        0%,100% { transform: translateY(0); }
        50%     { transform: translateY(-6px); }
      }

      .nomad-card {
        display: inline-block;
        position: relative;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 8px 24px rgba(0,0,0,.35);
        cursor: pointer;
        transform: translateZ(0);
        transition: transform .4s ease, box-shadow .4s ease;
        animation: nomad-float 8s ease-in-out infinite;
      }

      .nomad-card::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(120deg, transparent 20%, rgba(255,255,255,.18) 40%, transparent 60%);
        transform: translateX(-150%);
        transition: transform .8s ease;
        pointer-events: none;
      }

      .nomad-card:hover {
        transform: translateY(-6px) scale(1.02);
        box-shadow: 0 14px 36px rgba(0,0,0,.45);
        animation: none; /* pausa el “float” mientras hay hover */
      }

      .nomad-card:hover::after {
        transform: translateX(150%);
      }

      .nomad-img {
        display: block;
        width: 100%;
        height: auto;
        transition: transform .6s ease;
        will-change: transform;
      }

      .nomad-card:hover .nomad-img {
        transform: scale(1.06);
      }

      /* Respeta prefers-reduced-motion */
      @media (prefers-reduced-motion: reduce) {
        .nomad-card { animation: none; }
        .nomad-img, .nomad-card, .nomad-card::after { transition: none; }
      }
    `}</style>
          </div>
        </section>

        <section style={directorSectionStyle}>
          <h2 style={{ bannerTitleStyle, color: "grey", fontSize: "2.3rem", marginBottom: "5rem" }}>Tarjeta de presentación</h2>
          <div style={flipContainerStyle}>
            <div
              style={{
                ...flipInnerStyle,
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
              }}
            >
              <img src={Contrahazt_code} alt="Directora" style={frontImageStyle} />
              {/* <img src={desarrollo} alt="Directora" style={frontImageStyle} /> */}

              {/* Back face: reemplazamos el logo por la tarjeta */}
              <div style={{ ...backImageStyle, background: 'transparent', boxShadow: 'none' }}>

                <BusinessCard />
              </div>
              <h3 className="rightsNote rightsNote--onDark">
                Los trabajos expuestos forman parte de mi portafolio profesional, con todos mis derechos reservados.
              </h3>
            </div>
          </div>
          <div style={{ marginTop: "  10rem" }}>

            <p style={directorTitleStyle}>
              Si ha llegado hasta aquí<br />
              Le agradezco su tiempo.<br />
              Usted ha visitado mi primer portafolio profesional.<br />
            </p>
            <h3 style={directorNameStyle}>Fin.</h3>
          </div>

        </section>
        {/* Aros animados */}
        {/* === MAGNO (asistente) === */}
        {/* === MAGNO (asistente) === */}
        {/* === MAGNO (asistente) === */}
        {/* === MAGNO (asistente) === */}
        {showMagno && (
          <aside style={magnoContainerStyle} role="dialog" aria-live="polite">
            {showSparkle ? (
              <img
                src={magno}
                alt="Magno saludando"
                style={{ ...catImageStyle, animation: 'sparkle 1.6s ease-in-out infinite' }}
              />
            ) : (
              <>
                <div style={dialogStyle}>
                  <p style={{ margin: 0 }}>{mensajes[dialogStep]}</p>
                </div>
                <img
                  src={magno}
                  alt="Magno"
                  style={{ ...catImageStyle, animation: 'float 4s ease-in-out infinite' }}
                />
              </>
            )}
          </aside>
        )}

        {/* === Botón de contacto (solo cuando Magno se fue) === */}
        {showContact && !showMagno && (
          <aside style={{ ...magnoContainerStyle, zIndex: 2000 }}>
            <Link to="/contacto" style={{ ...contactButtonStyle, textAlign: 'center' }}>
              Contáctanos
            </Link>
          </aside>
        )}

        <footer className="site-footer" role="contentinfo">
          <div className="site-footer__divider" aria-hidden="true" />
          <div className="site-footer__inner">
            <p className="site-footer__copy" style={{ fontStyle: "italic", color: "grey", fontSize: "0.9rem" }}>
              © {year} <span style={{ fontWeight: "700 !IMPORTANT", fontSize: "23px", color: "grey" }}>@Contrahazt_code</span>. Todos los derechos reservados.
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}
