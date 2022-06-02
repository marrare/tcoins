import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import ButtonAppBar from './components/ButtonAppBar';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">

      <ButtonAppBar></ButtonAppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes> 
      
    </div>
  );
}

export default App;