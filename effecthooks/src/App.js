import './App.css';
import React from 'react'

// import ClassCounterOne from './components/ClassCounterOne'
// import HookEffectCounter from './components/HookEffectCounter';
// import HookCounterOne from './components/HookCounterOne';
// import ClassMouse from './components/ClassMouse';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import IntervalClassCounter from './components/IntervalClassCounter';
// import IntervalHookCounter from './components/IntervalHookCounter'
// import DataFetching from './components/DataFetching';
import ComponentF from './components/contexthooks/ComponentF';
import ComponentE from './components/contexthooks/ComponentE';


export const UserContext = React.createContext()
export const RoleContext = React.createContext()


function App() {
  return (
    <div className="App">
        {/* <ClassCounterOne/> */}
        {/* <HookEffectCounter/> */}
        {/* <HookCounterOne/> */}
        {/* <ClassMouse/> */}
        {/* <HookMouse/> */}
        {/* <MouseContainer/> */}
        {/* <IntervalClassCounter/> */}
        {/* <IntervalHookCounter/> */}
        {/* <DataFetching/> */}

        <UserContext.Provider value={'John Smith'}>
          <RoleContext.Provider value={'Merchant'}>
            <ComponentE/>
            <ComponentF/>
          </RoleContext.Provider>
        </UserContext.Provider>

    </div>
  );
}

export default App;
