import React from 'react';
import logo from './logo.svg';
import './App.css';
import Circle from './CIRCLE/components/Circle';
import Slider from './SLIDER/components/Slider';
import Navbar from './NAVBAR/Navbar';

function App() {
  return (
    <div className="App">
      <Slider/>
      <Circle/>
    </div>
  );
}

export default App;
