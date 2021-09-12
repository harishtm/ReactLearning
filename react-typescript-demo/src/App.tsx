import './App.css';
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name="John Smith" age={20} isLoggedIn={true}/>
    </div>
  );
}

export default App;
