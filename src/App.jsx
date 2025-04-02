import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Layout from './componentes/Layout';
import Lista from './componentes/prueba';
import Inicio from './componentes/Inicio';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<Inicio />} />
         <Route path="/productos" element={<Lista />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;