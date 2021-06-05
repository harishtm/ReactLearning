import './App.css';
import { Provider } from 'react-redux'
import { store } from '../src/redux/cake/store'
import CakeContainer from '../src/components/CakeContainer';
import HooksCakeContainer from '../src/components/HooksCakeContainer'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer/>
        <CakeContainer/>
      </div>
    </Provider>
    
  );
}

export default App;
