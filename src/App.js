import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container, Dimmer, Loader} from 'semantic-ui-react';
import Movie from './components/Movie';
import People from './components/People';
import Calendar from './components/Calendar';  



function App() {
  const [people, setPeople] = useState([]);
  const [movie, setMovie] = useState([]);
  const [load, setLoad] = useState(true);


  useEffect(() => {
    async function fetchPeople(){
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
      setLoad(false);
    }
    async function fetchMovie(){
      let res = await fetch('https://swapi.dev/api/films/?format=json');
      let data = await res.json();
      setMovie(data.results);
      setLoad(false);
    }

    fetchPeople();
    fetchMovie();

  }, []);

  
  return (
    <>
      <Router>
        <Navbar/>
        <Container>
          {load ? (
            <Dimmer active inverted>
              <Loader inverted>Wait a moment</Loader>
            </Dimmer>
          ): (
            <Switch>
            <Route exact path='/'>
              <Movie data={movie}/>
            </Route>
            <Route exact path='/people'>
              <People data={people}/>
            </Route>
            <Route exact path='/calendar'>
              <Calendar data={movie}/>
            </Route>
          </Switch>
          )}
        </Container>
      </Router>    
    </>
  );
}

export default App;

