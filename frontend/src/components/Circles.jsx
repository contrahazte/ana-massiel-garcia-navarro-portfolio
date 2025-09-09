// src/components/Circles.jsx
import React, { useRef, useEffect } from 'react';
import BlackBack from "../assets/black-back.png";
const Circles = () => {
  const canvasRef = useRef(null);
  const ringCount = 4;
  const radius = 25;
  const strokeWidth = 4;
  const overlap = 10;
  const spacing = radius * 2 - overlap;
  const margin = 10;
  const width = spacing * (ringCount - 1) + radius * 2 + margin * 2;
  const height = radius * 2 + margin * 2;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = strokeWidth;
    ctx.lineCap = 'round';

    // static circle style
    const staticColor = '#444';
    // gradient for shine overlay
    const grad = ctx.createLinearGradient(0, 0, width, 0);
    grad.addColorStop(0, '#aaa');
    grad.addColorStop(0.5, '#fff');
    grad.addColorStop(1, '#aaa');

    let start;
    const basePeriod = 30; // seconds per full rotation

    function drawFrame(timestamp) {
      if (!start) start = timestamp;
      const elapsed = (timestamp - start) / 1000;

      ctx.clearRect(0, 0, width, height);
      const centerY = height / 2;
      const startX = margin + radius;
      const dashLen = radius * 6;
      const offset = dashLen - ((elapsed * 100) % dashLen);

      for (let i = 0; i < ringCount; i++) {
        const cx = startX + i * spacing;
        const cy = centerY;
        const angle = (elapsed + i * 2) * ((Math.PI * 2) / basePeriod);

        ctx.save();
        ctx.translate(cx, cy);

        // draw static full circle outline
        ctx.setLineDash([]);
        ctx.strokeStyle = staticColor;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.stroke();

        // draw rotating shine overlay
        ctx.rotate(angle);
        ctx.setLineDash([dashLen]);
        ctx.strokeStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.lineDashOffset = offset;
        ctx.stroke();

        ctx.restore();
      }

      requestAnimationFrame(drawFrame);
    }

    requestAnimationFrame(drawFrame);
  }, []);

  return (
    <div
  style={{
    padding: "2rem 1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${BlackBack})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
};

export default Circles;
