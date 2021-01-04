// import logo from './logo.svg';
import './App.css';

// import HookCounter from './components/HookCounter'
// import HookCounterPreviousState from './components/HookCounterPreviousState'
// import HookCounterWithObject from './components/HookCounterWithObject';
import HookCounterWithArray from './components/HookCounterWithArray';


function App() {
  return (
    <div className="App">
        {/* <HookCounter/> */}
        {/* <HookCounterPreviousState/> */}
        {/* <HookCounterWithObject/> */}
        <HookCounterWithArray/>
    </div>
  );
}

export default App;
