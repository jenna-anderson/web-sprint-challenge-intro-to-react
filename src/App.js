import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';


const StyledContainer = styled.div`
height: calc(100vh - 100px);
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);
  const [isActive, setIsActive] = useState(false);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
    .get('https://swapi.dev/api/people')
    .then(res => setCharacters(res.data))
    .catch(err => console.log(err))
  },[])

  const dropdown = () => {
    setIsActive(!isActive);
  }

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StyledContainer>
        {
          characters.map((character, idx) => {
            return <Character key={idx} character={character} dropdown={dropdown} setIsActive={setIsActive} isActive={isActive}/>  // not ideal to choose index as the key but I wasn't sure what else to set it too since each character didn't already have an id associated with them
          })
        }
      </StyledContainer>
    </div>
  );
}

export default App;
