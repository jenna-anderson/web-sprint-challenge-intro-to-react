// Write your Character component here

import React from 'react'
import styled from 'styled-components'



const StyledChar = styled.section`
    padding: 2%;
    width: 60%;
    color: #292525;
    text-shadow: 1px 1px 5px #fff;
    font-size: 3rem;
    background-color: #5d5d5dd9;
    text-align: left;
`;


export default function Character( {character } ) {
    return(
            <StyledChar>{character.name}</StyledChar>
    )
}