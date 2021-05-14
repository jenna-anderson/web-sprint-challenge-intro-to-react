// Write your Character component here

import React from 'react'
import styled from 'styled-components'



const StyledChar = styled.section`
    padding: 0 2%;
    width: 60%;
    color: #292525;
    text-shadow: 1px 1px 5px #fff;
    font-size: 2.5rem;
    background-color: #5d5d5dd9;
    text-align: left;
    display: flex;
    justify-content: space-between;

    button {
        background-color: transparent;
        font-size: 3rem;
        border: none;
        padding: 0;
        margin: 0;
        text-shadow: 1px 1px 5px #fff;
    }
`;


export default function Character(props) {
    const { character, isActive, dropdown } = props;
    return(
            <StyledChar>
                <h2>{character.name}</h2>
                {!isActive ? <button onClick={dropdown}>&#9656;</button> : <button onClick={dropdown}>&#9662;</button>}
            </StyledChar>
    )
}