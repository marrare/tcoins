import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import ButtonAppBar from './components/ButtonAppBar';
import Footer from './components/Footer';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import ComprasUser from './pages/comprasUsuario/ComprasUser';
import GerenciarLojas from './pages/gerenciarLojas/GerenciarLojas';
import GerenciarProdutos from './pages/gerenciarProdutos/GerenciarProdutos';
import GerenciarPerfil from './pages/gerenciarPerfil/GerenciarPerfil';
import MultiActionAreaCard from './components/MultiActionAreaCard';

function App() {
  return (
    <div className="App">

      <ButtonAppBar></ButtonAppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compras" element={<ComprasUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/gerenciar-lojas" element={<GerenciarLojas />} />
        <Route path="/gerenciar-perfil" element={<GerenciarPerfil />} />
        <Route path="/gerenciar-produtos" component={MultiActionAreaCard} element={<GerenciarProdutos />} />
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;