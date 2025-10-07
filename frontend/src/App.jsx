import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Layout } from './Layout.jsx';
import Home from './screens/Home';
import Conocenos from './screens/Conocenos';
import ContactForm from './screens/ContactForm'; // 👈 nuevo import

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacto" element={<ContactForm />} /> {/* 👈 NUEVA RUTA */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="conocenos" element={<Conocenos />} />
      </Routes>
    </Router>
  );
}
