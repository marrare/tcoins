import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import ButtonAppBar from './components/ButtonAppBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <div className="App">

      <ButtonAppBar></ButtonAppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes> 
      
    </div>
  );
}

export default App;