import './App.css';
import { Provider } from 'react-redux'
import { store } from '../src/redux/store'
// import CakeContainer from '../src/components/CakeContainer';
// import HooksCakeContainer from '../src/components/HooksCakeContainer'
// import IceCreamContainer from './components/IceCreamContainer'
// import NewCakeContainer from './components/NewCakeContainer';
// import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer/>
        {/* <ItemContainer cake/>
        <ItemContainer/>
        <HooksCakeContainer/>
        <CakeContainer/>
        <IceCreamContainer/>
        <NewCakeContainer/> */}
      </div>
    </Provider>
    
  );
}

export default App;
