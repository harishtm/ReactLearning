import './App.css';
import { Button } from './components/Button';
// import { Greet } from './components/Greet';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
// import { Status } from './components/Status';
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';

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
        <Status status="loading"/>

      <Oscar>
        <Heading>Sample Child Props Demo</Heading>
      </Oscar>
      */}
      <Button
        handleClick={(event, id) => {
            console.log('Click event', id)
          }}
      />
    </div>
  );
}

export default App;
