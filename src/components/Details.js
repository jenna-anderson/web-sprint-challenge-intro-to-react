import React from 'react'
import styled from 'styled-components'

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
    const { character } = props;

    // console.log(details)

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
            </div>
        </StyledDetails>
    )
}