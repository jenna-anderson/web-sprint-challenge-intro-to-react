import React from 'react'
import styled from 'styled-components'
// import { useEffect, useState } from 'react';
// import axios from 'axios'

const StyledDetails = styled.section`
    display: flex;
    justify-content: space-around;
    width: 90%;
    margin-bottom: 2%;
    background-color: #5d5d5dd9;

    p{
        padding: 0;
        margin: 2%;
        font-size: 1.8rem;
        text-align: left;
        width: 100%;
    }
`;

export default function Details(props) {
    const { character, id } = props;

    // const [films, setFilms] = useState();

    // useEffect(() => {
    //     axios
    //     .get('https://swapi.dev/api/films')
    //     .then(res => {
    //       setFilms(res.data.results)
    //       })
    //     .catch(err => console.log(err))
    //   },[])

    // console.log(films)

    return(
        <StyledDetails>
            <div>
                <p>Height:</p> 
                <p>Mass:</p> 
                <p>Hair Color:</p> 
                <p>Eye Color:</p> 
                <p>Birth Year:</p> 
            </div>
            <div>
                <p>{character.height}</p>
                <p>{character.mass}</p>
                <p>{character.hair_color}</p>
                <p>{character.eye_color}</p>
                <p>{character.birth_year}</p>

                {/* {!films ? 
                    <p>Loading...</p>     
                    
                    : {films.map(film => {
                        film.characters.map(character => {
                            character.includes(`http://swapi.dev/api/people/${id}`) ? <p>film.title</p> : <p>test</p>
                        })
                    })}
                 } */} {/* This became quite the mess, couldn't quite get it to work. There must be a better way */}

            </div>
        </StyledDetails>
    )
}