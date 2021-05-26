import './App.css';
import { Provider } from 'react-redux'
import { store } from '../src/redux/cake/store'
import CakeContainer from '../src/components/CakeContainer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
      </div>
    </Provider>
    
  );
}

export default App;
