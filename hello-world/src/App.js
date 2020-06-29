import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet' // ommit .js extension
import { WelcomeMessage } from './components/Welcome'


function App() {
  return (
    <div className="App">
      <Greet></Greet>
      <WelcomeMessage/>
    </div>
  );
}

export default App;
