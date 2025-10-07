import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaEnvelope, FaPhone, FaLink } from 'react-icons/fa';
import logo from '../assets/logo.png';

// Subtle shine animation
const shine = keyframes`
  0% { background-position: -100% 0; }
  100% { background-position: 100% 0; }
`;

// Styled Components
const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  background: linear-gradient(135deg, #e0e0e0 0%, #f8f8f8 50%, #e0e0e0 100%);
  background-size: 200% 100%;
  animation: ${shine} 3s ease-in-out infinite;
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Cinzel', serif;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(255,255,255,0.5);
    border-radius: 16px;
    pointer-events: none;
  }
`;

const Header = styled.div`
  text-align: center;
`;

const LogoImg = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  margin: 0;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 0.85rem;
  /* Silver color with shimmer effect */
  background: linear-gradient(90deg,rgb(185, 181, 181) 25%,rgb(247, 240, 240) 50%, #c0c0c0 75%);
  background-size: 200% 100%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: ${shine} 3s ease-in-out infinite;
  font-weight: 300;
  letter-spacing: 0.05rem;
  margin-top: 0.25rem;
`;


const Info = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const InfoItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: #222;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #9b59b6;
  }

  svg {
    flex-shrink: 0;
  }
`;

const InfoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: #222;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #9b59b6;
  }
`;

// Small toast dialog
const Toast = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.8);
  color: #fff;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity 0.3s;
`;

export default function BusinessCard({ showFooter = false }) {  // 👈 nueva prop
  const phone = '+34 607 98 97 29';
  const email = 'contrahazte@gmial.com';
  const [toastMsg, setToastMsg] = useState('');
  const [toastVis, setToastVis] = useState(false);

  const copyToClipboard = value => {
    navigator.clipboard.writeText(value);
    setToastMsg(`${value} copiado`);
    setToastVis(true);
  };

  useEffect(() => {
    if (toastVis) {
      const timer = setTimeout(() => setToastVis(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [toastVis]);

  return (
    <Card>
      <Header>
        <LogoImg src={logo} alt="Neoncode Logo" />
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
          <Title>Contrahazt_</Title>
          <Title style={{fontStyle:"italic",color:"rgb(207, 203, 203)"}}>code</Title>
        </div>

        <Subtitle>Desarrollo de aplicaciones web artísticas</Subtitle>
      </Header>

      <Info>
        <InfoItem onClick={() => copyToClipboard(phone)}>
          <FaPhone size={18} />
          {phone}
        </InfoItem>

        <InfoItem onClick={() => copyToClipboard(email)}>
          <FaEnvelope size={18} />
          {email}
        </InfoItem>

        <InfoLink href="/contacto">
          <FaLink size={18} />
          Contrátame
        </InfoLink>
      </Info>

      <Toast visible={toastVis}>{toastMsg}</Toast>

      {/* 👇 solo se muestra si showFooter es true */}
      {showFooter && <h2>I am always available for work</h2>}
    </Card>
  );
}
