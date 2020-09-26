import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Greet } from './components/Greet'; // ommit .js extension
// import { WelcomeMessage } from './components/Welcome';
// import Hello from './components/Hello';
// import { GreetMessage, EmployeeGreet } from './components/GreetWithName';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import DestructureProps from './components/DestructuringPropsDemo';
// import {FunctionClick, ClassClick} from './components/EventHandleDemo';
// import { EventBind } from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import {StyleSheet, Inline} from './components/Stylesheet';
// import './css/appStyle.css';
// import style from './css/appStyle.module.css';


// import Form from './components/Form.js';
// import LifecycleX from './components/LifecycleX';
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table';

// import ParentComponent from './components/ParentComp';
import ParentMemoComp from './components/ParentMemoComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput'; 
import FRParentInput from './components/FRParentInput';


function App() {
  return (
    <div className="App">
      {/* <Greet></Greet> */}
      
      {/* <WelcomeMessage fname="John" lname="Smith"/> */}
      
      {/* <Hello/> */}
      
      {/* <GreetMessage firstname="John" lastname="Smith">
        <p> This is poprs child text </p>
      </GreetMessage> */}
      
      {/* <GreetMessage firstname="Michel" lastname="Clark">
        <button>Action</button>
      </GreetMessage> */}
      
      {/* <GreetMessage firstname="Stev" lastname="Smith"/>
      <EmployeeGreet firstname="Ricky" lastname="Pointing"/> */}

      {/* <Message/> */}

      {/* <Counter/> */}

      {/* <DestructureProps fname="John" lname="Smith"/> */}

      {/* <FunctionClick/><br/><ClassClick/> */}

      {/* <EventBind/> */}

      {/* <ParentComponent/> */}

      {/* <UserGreeting/> */}

      {/* <NameList/> */}

      {/* <StyleSheet primary={true} font_size={'large'}/>
      <Inline/>
      <h1 className='error'> Error </h1>
      <h1 className={style.success}> Success </h1> */}

      {/* <Form/> */}

      {/* <LifecycleA/> */}

      {/* <LifecycleX/> */}

      {/* <FragmentDemo/> */}

      {/* <Table/> */}

      {/* <ParentComponent/> */}

      {/* <ParentMemoComp/> */}

      {/* <RefsDemo/> */}

      {/* <FocusInput/> */}

      <FRParentInput/>

    </div>
  );
}

export default App;
