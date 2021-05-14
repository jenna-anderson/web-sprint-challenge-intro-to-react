import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';



const StyledContainer = styled.div`
/* height: calc(100vh - 100px); */
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
    .get('https://swapi.dev/api/people')
    .then(res => {
      console.log(res.data.films)
      setCharacters(res.data)})
    .catch(err => console.log(err))
  },[])

  useEffect(() => {
    axios
    .get('https://swapi.dev/api/films')
    .then(res => {
      console.log(res.data)
      })
    .catch(err => console.log(err))
  },[])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StyledContainer>
        {
          characters.map((character, idx) => {
            return <Character key={idx} character={character} />
          })
        }

      </StyledContainer>
    </div>
  );
}

export default App;
