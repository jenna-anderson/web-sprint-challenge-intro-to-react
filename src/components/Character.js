// Write your Character component here

import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const StyledChar = styled.section`

`;


export default function Character( {character } ) {
    return(
        <StyledContainer>
            <StyledChar>{character.name}</StyledChar>
        </StyledContainer>
    )
}