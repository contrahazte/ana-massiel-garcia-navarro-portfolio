import React, { useState } from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';
import angonPageImg from '../assets/A_digital_illustration_in_a_semi-realistic_style_w.png';
// Usamos imagen de mesa desde carpeta public
import mesaImg from '../assets/mesa.png';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', service: '', customService: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const serviceText = form.service === 'custom' ? form.customService : form.service;
    const msg = `Hola, soy ${form.name}. Me interesa el servicio: ${serviceText}. Mi mensaje: ${form.message}`;

    // Enviar a WhatsApp (pon aquí tu número correcto)
    window.open(`https://wa.me/34607989729?text=${encodeURIComponent(msg)}`, '_blank');

    // Mostrar modal de confirmación
    setShowModal(true);

    // Resetear formulario después de unos segundos
    setTimeout(() => {
      setShowModal(false);
      setForm({ name: '', email: '', service: '', customService: '', message: '' });
    }, 7000);
  };

  return (
    <Wrapper>
      <Book>
        <PageImage />
        <Spine />
        <PageForm>
          <FormCard>
            <Header>Contáctame</Header>
            <Subheader>Escríbeme por WhatsApp</Subheader>


            <Form onSubmit={handleSubmit}>


              {/* <Select name="service" value={form.service} onChange={handleChange} required>
                <option value="">Selecciona un servicio</option>
                <option>Diseño Web Artístico</option>
                <option>Branding + Logo</option>
                <option>Tienda Online</option>
                <option>Blog / Portafolio</option>
                <option value="custom">Otro (especificar)</option>
              </Select> */}

              {form.service === 'custom' && <Input name="customService" placeholder="Describe tu necesidad" value={form.customService} onChange={handleChange} required />}


              <Buttons>
                <Whatsapp type="button" onClick={handleSubmit}>
                  <FaWhatsapp size={18} /> WhatsApp
                </Whatsapp>
              </Buttons>
            </Form>
          </FormCard>
        </PageForm>
        <Bookmark />
      </Book>

      {/* Modal de confirmación */}
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <h3>¡Me hace feliz saber que enviaste un mensaje! 💌</h3>
            <p>
              Responderé a estos datos de contacto apenas reciba la solicitud.
              Tenga un maravilloso día 🌸
            </p>
          </ModalContent>
        </ModalOverlay>
      )}
    </Wrapper>
  );
};

export default ContactForm;

// Styled Components

const Wrapper = styled.section`
position: relative;
width: 100vw;
height: 100vh;
background-image: url(${mesaImg});
background-size: cover;
background-position: center;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Cinzel', serif;
overflow: hidden;

@media (max-width: 768px) {
  height: auto;
  padding: 2rem 0;
}
`;

const Book = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  background: #6f1e51;
  width: 80vw;
  max-width: 1200px;
  max-height: 80vh;
  height:70%;
transform: scale(1);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.7),
    inset 0 0 20px rgba(0, 0, 0, 0.3),
    0 10px 30px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90vw;
    transform: none;
    overflow-y: auto;
    gap: 2rem;
  }
`;

const PageImage = styled.div`
  flex: 1.3;
  background-image: url(${angonPageImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  min-width: 0;
  transform-origin: left center;
  transform: perspective(600px) rotateY(4deg);

  @media (max-width: 768px) {
    flex: none;
    height: 55vh;
    background-size: auto 100%;
    background-position: center top;
    transform: none;
  }
`;

const Spine = styled.div`
  width: 4px;
  background: #4a0d33;

  @media (max-width: 768px) {
    display: none;
  }
`;

const PageForm = styled.div`
  flex: 1.3;
  background: #fafafa;
  padding: 2rem;
  transform-origin: right center;
  transform: perspective(600px) rotateY(-4deg);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex: none;
    transform: none;
    padding: 1rem;
  }
`;

const FormCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 650px;
    background: #1f1f1f;
    height: 80%;
    justify-content: center;
    border-radius
Defines the radii of the outer border edge.

Disponible en la mayoría de los navegadores principales (Baseline desde enero de 2018)
Más información

No mostrar
: 12px;
    box-shadow: 0 0 12px rgba(155, 89, 182, 0.3);
    color: #eee;

`;

const Header = styled.h2`
  font-size: 2rem;
  color: #f0e6ff;
  text-shadow: 0 0 8px #9b59b6;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Subheader = styled.p`
  font-size: 1rem;
  color: #bbb;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
  gap: 1rem;
`;

const shared = `
  padding: 0.75rem 1rem;
  margin:0 1rem ;
  border: 1px solid #9b59b6;
  background: #2a2a2a;
  color: #fff;
  font-size: 1rem;
  border-radius: 8px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #d19feb;
  }
`;

const Input = styled.input`${shared}`;
const Select = styled.select`${shared}`;
const Textarea = styled.textarea`
  ${shared}
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
`;

const Buttons = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ButtonBase = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: background 0.3s;
`;

const Submit = styled(ButtonBase)`
  background: #9b59b6;
  color: #fff;
  &:hover {
    background: #8e44ad;
  }
`;

const Whatsapp = styled(ButtonBase)`
  background: #25d366;
  color: #fff;
  svg { margin-right: 0.5rem; }
  &:hover {
    background: #1ebe57;
  }
`;

const ThankYou = styled.div`
  background: #222;
  color: #9b59b6;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(155,89,182,0.3);
  font-style: italic;
  text-align: center;
`;

const Bookmark = styled.div`
  position: absolute;
  bottom: -40px;
  left: calc(50% - 6px);
  width: 12px;
  height: 160px;
  background: linear-gradient(180deg,#c0392b 0%,#e74c3c 100%);
  clip-path: polygon(0 0,100% 0,100% 90%,50% 100%,0 90%);
  box-shadow: 0 2px 6px rgba(0,0,0,0.4);
  transform: rotate(3deg);
  z-index: 2;

  @media (max-width: 768px) {
    display: none;
  }
`;
