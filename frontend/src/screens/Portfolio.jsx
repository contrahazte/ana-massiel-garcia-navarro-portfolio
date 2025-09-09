// CurriculumModalLink.jsx
import { useRef, useEffect } from "react";
import Curriculum from "../assets/curriculum.jpg"; // Asegúrate de que exista
export default function CurriculumModalLink({
  src = {Curriculum}, // cambia a "/cv.pdf" si usas PDF
  label = "curriculum",
}) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const d = dialogRef.current;
    const onCancel = (e) => { e.preventDefault(); d.close(); }; // ESC
    d.addEventListener("cancel", onCancel);
    return () => d.removeEventListener("cancel", onCancel);
  }, []);

  const open = (e) => {
    e.preventDefault();
    dialogRef.current.showModal();
  };
  const close = () => dialogRef.current.close();
  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) close();
  };

  const isPdf = src.toLowerCase().endsWith(".pdf");

  return (
    <>
      {/* Botón con estilo de enlace para el navbar */}
      <button className="nav-link-like" onClick={open} aria-haspopup="dialog" aria-controls="cv-dialog">
        {label}
      </button>

      <dialog id="cv-dialog" ref={dialogRef} className="cv-dialog" onClick={onBackdropClick}>
        <button className="close" aria-label="Cerrar" onClick={close}>×</button>
        {isPdf ? (
          <iframe src={src} title="Curriculum" className="content" />
        ) : (
          <img src={src} alt="Curriculum" className="content" />
        )}
      </dialog>

      <style>{`
        .nav-link-like {
          background: none; border: 0; padding: 0; margin: 0;
          cursor: pointer; color: #2563eb; text-decoration: none;
          font: inherit;
        }
        .nav-link-like:hover { text-decoration: underline; }

        .cv-dialog {
          padding: 0; border: none; border-radius: 12px; overflow: hidden;
          max-width: 90vw; max-height: 90vh;
        }
        .cv-dialog::backdrop { background: rgba(0,0,0,.6); }

        .content { display: block; width: 90vw; height: 90vh; }
        .cv-dialog img.content { width: auto; height: auto; max-width: 90vw; max-height: 90vh; object-fit: contain; }

        .close {
          position: absolute; top: .25rem; right: .5rem;
          background: none; border: none; font-size: 2rem; line-height: 1;
          color: #fff; text-shadow: 0 1px 3px rgba(0,0,0,.6); cursor: pointer;
        }
      `}</style>
    </>
  );
}
