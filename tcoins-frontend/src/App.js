import React from 'react';
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import MultiActionAreaCard from './components/MultiActionAreaCard';

function App() {
  return (
    <div className="App">

      <ButtonAppBar></ButtonAppBar>
      
      <div className="Card">
        <MultiActionAreaCard className="CardItem"></MultiActionAreaCard>
        <MultiActionAreaCard className="CardItem"></MultiActionAreaCard>
        <MultiActionAreaCard className="CardItem"></MultiActionAreaCard>
      </div>

      <div className="Card">
        <MultiActionAreaCard className="CardItem"></MultiActionAreaCard>
        <MultiActionAreaCard className="CardItem"></MultiActionAreaCard>
        <MultiActionAreaCard className="CardItem"></MultiActionAreaCard>
      </div>
      
    </div>
  );
}

export default App;
