import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import ButtonAppBar from './components/ButtonAppBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import ComprasUser from './pages/ComprasUser'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <ButtonAppBar></ButtonAppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compras" element={<ComprasUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;