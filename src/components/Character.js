// Write your Character component here

import React from 'react'
import styled from 'styled-components'
import Details from './Details'

const StyledCharContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1%;
    width: 60%;
    color: #292525;
    font-size: 1.6rem;
    background-color: #703112d6;

    &:hover{
        box-shadow: 1px 1px 5px #fff;
        text-shadow: 1px 1px 5px #fff;
        transform: scale(1.1);
    }
`;



export default function Character(props) {
    const { character } = props;



    return(
        <StyledCharContainer>
            <h2>{character.name}</h2>
            <Details character={character}/>
        </StyledCharContainer>
    )
}