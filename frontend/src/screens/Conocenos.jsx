// src/Conocenos.jsx
import React, { useState, useEffect } from 'react';
import "../index.css"; // Si tus estilos (triángulos, fade-sections, sparkles, etc.) están en App.css

let nextId = 0;
function SparkleCursor() {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    function handleMouseMove(e) {
      const id = nextId++;
      setSparkles(prev => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setSparkles(prev => prev.filter(s => s.id !== id)), 600);
    }
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="spark-container">
      {sparkles.map(s => (
        <div
          key={s.id}
          className="spark"
          style={{ left: s.x - 4, top: s.y - 4 }}
        />
      ))}
    </div>
  );
}

export default function Conocenos() {
  const [step, setStep] = useState(0);
  const [showD, setShowD] = useState(false);
  const [showE, setShowE] = useState(false);
  const [showF, setShowF] = useState(false);
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);

  const handlePinkClick = () => {
    if (step === 0) setStep(1);
  };

  useEffect(() => {
    const timers = [];
    if (step === 1) {
      // Secuencia rosa: D(0s), E(2s), F(5s)
      setShowD(true);
      timers.push(setTimeout(() => setShowE(true), 2000));
      timers.push(setTimeout(() => setShowF(true), 5000));
      // Limpiar D/E/F a los 7s
      timers.push(
        setTimeout(() => {
          setShowD(false);
          setShowE(false);
          setShowF(false);
        }, 7000)
      );
      // Secuencia negra: A(8s), B(10s)
      timers.push(setTimeout(() => setShowA(true), 8000));
      timers.push(setTimeout(() => setShowB(true), 10000));
      // Limpiar A/B a los 15s
      timers.push(
        setTimeout(() => {
          setShowA(false);
          setShowB(false);
        }, 15000)
      );
    }
    return () => timers.forEach(clearTimeout);
  }, [step]);

  return (
    <>
      <SparkleCursor />

      <div className="square">
        {/* Triángulo rosa */}
        <div
          className="triangle triangle--pink"
          onClick={handlePinkClick}
          style={{ cursor: step === 0 ? 'pointer' : 'default' }}
        >
          {showD && <div className="door" />}
          {showD && <div className="butterflies" />}
          <div className="triangle-text" style={{ top: '60%', left: '75%' }}>
            <p className={`fade-section ${showD ? 'visible' : ''}`}>
              Existen muchas formas de crear la realidad.
            </p>
            <p className={`fade-section ${showE ? 'visible' : ''}`}>
              Puedes crear la realidad, perfectamente adaptada a tus propios
              deseos.
            </p>
            <p className={`fade-section ${showF ? 'visible' : ''}`}>
              Y convertir la realidad en un espectro mágico de la vida misma.
            </p>
          </div>
        </div>

        {/* Triángulo negro */}
        <div className="triangle triangle--black">
          <div className="triangle-text" style={{ top: '25%', left: '25%' }}>
            <p className={`fade-section ${showA ? 'visible' : ''}`}>
              O asumir que la realidad no puede ser tan buena
            </p>
            <p className={`fade-section ${showB ? 'visible' : ''}`}>
              Como tu mente y tu proyección se atreven a soñar
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
