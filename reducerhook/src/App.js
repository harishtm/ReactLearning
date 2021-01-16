import React, { useReducer } from 'react';
import './App.css';
// import CounterOne from './components/CounterOne';
// import CounterTwo from './components/CounterTwo';
// import CounterThree from './components/CounterThree';
import ComponentA from './reduceWithContext/ComponentA'
import ComponentB from './reduceWithContext/ComponentB'
import ComponentC from './reduceWithContext/ComponentC'


export const CountContext = React.createContext();

const initialState = 0;

const reducer = (currentState, action) => {
    switch(action) {
        case 'increment': 
            return currentState + 1
        case 'decrement': 
            return currentState - 1
        case 'reset':
            return initialState
        default:
            return currentState
    }
}


function App() {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      Count - {count}
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      {/* <CounterThree/> */}

      <CountContext.Provider
        value={{countState: count, countDispatch: dispatch}}
      >
          <ComponentA/>
          <ComponentB/>
          <ComponentC/>
      </CountContext.Provider>
      
    </div>
  );
}

export default App;
