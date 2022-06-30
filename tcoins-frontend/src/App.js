import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import ButtonAppBar from './components/ButtonAppBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import GerenciarLojas from './pages/GerenciarLojas';
import GerenciarProdutos from './pages/GerenciarProdutos';

function App() {
  return (
    <div className="App">

      <ButtonAppBar></ButtonAppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/gerenciar-lojas" element={<GerenciarLojas />} />
        <Route path="/gerenciar-produtos" element={<GerenciarProdutos />} />
      </Routes> 
      
    </div>
  );
}

export default App;