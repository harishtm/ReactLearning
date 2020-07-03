import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet'; // ommit .js extension
import { WelcomeMessage } from './components/Welcome';
import Hello from './components/Hello';
import { GreetMessage, EmployeeGreet } from './components/GreetWithName';
import Message from './components/Message';


function App() {
  return (
    <div className="App">
      {/* <Greet></Greet> */}
      
      {/* <WelcomeMessage/> */}
      
      {/* <Hello/> */}
      
      {/* <GreetMessage firstname="John" lastname="Smith">
        <p> This is poprs child text </p>
      </GreetMessage> */}
      
      {/* <GreetMessage firstname="Michel" lastname="Clark">
        <button>Action</button>
      </GreetMessage> */}
      
      {/* <GreetMessage firstname="Stev" lastname="Smith"/>
      <EmployeeGreet firstname="Ricky" lastname="Pointing"/> */}

      <Message/>

    </div>
  );
}

export default App;
