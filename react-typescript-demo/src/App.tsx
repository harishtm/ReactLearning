import './App.css';
import { Box } from './components/context/Box';
import { Rectangle } from './components/context/Rectangle';
import { ThemeContextProvider } from './components/context/ThemeContext';
// import { Counter } from './components/Counter';
// import { LoggedIn } from './components/state/LoggedIn';
// import { User } from './components/state/User';
// import { Container } from './components/Container';
// import { Button } from './components/Button';
// import { Input } from './components/Input';
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
      {/*

        <Button
          handleClick={(event, id) => {
              console.log('Click event', id)
            }}
        />

        <Input value='' handleChange={(event) => {console.log(event)}}/>

        <Container style={{border: '10px solid black', padding: '1rem'}}/>

        <User/>
      
        <Counter/>
      */}
      
      <ThemeContextProvider>
        <Box/>
        <Rectangle/>
      </ThemeContextProvider>
      
      <ThemeContextProvider>
        <Rectangle/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
