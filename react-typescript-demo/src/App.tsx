import './App.css';
// import { Greet } from './components/Greet';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  /*
  const personName = {
    fname: 'John',
    lname: 'Smith'
  }

  const all_person = [
        {fname: 'John', lname: 'Smith'},
        {fname: 'James', lname: 'Walker'},
        {fname: 'Steve', lname: 'Jobs'}
      ]
    */
  return (
    <div className="App">
      {/*
        <Greet name="John Smith" age={20} isLoggedIn={true}/><hr/>
        <Person name={personName}/><hr/>
        <PersonList names={all_person}/>
      */}
      <Status status="loading"/>
    </div>
  );
}

export default App;
