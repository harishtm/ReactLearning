import './App.css';
import { Provider } from 'react-redux'
import { store } from '../src/redux/cake/store'
import CakeContainer from '../src/components/CakeContainer';
import HooksCakeContainer from '../src/components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer/>
        <CakeContainer/>
        <IceCreamContainer/>
        <NewCakeContainer/>
      </div>
    </Provider>
    
  );
}

export default App;
