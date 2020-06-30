import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet'; // ommit .js extension
import { WelcomeMessage } from './components/Welcome';
import Hello from './components/Hello';


function App() {
  return (
    <div className="App">
      {/* <Greet></Greet> */}
      {/* <WelcomeMessage/> */}
      <Hello/>
    </div>
  );
}

export default App;
