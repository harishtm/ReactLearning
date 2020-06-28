import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet' // ommit .js extension

function App() {
  return (
    <div className="App">
      <Greet></Greet>
    </div>
  );
}

export default App;
