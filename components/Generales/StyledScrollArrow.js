import styled from "styled-components"

export const Scroll = styled.div `
    z-index: 10;
    display: flex;
    text-decoration: none;
    text-align: center;
    justify-content: center;
    transition: 0.2s;
    border-radius: 50%;
    position: fixed;
    left: 50%;
    bottom: 0;
    margin: 0 0 1em -25px;
    padding-bottom: 1em;
    width: 3em;
    height: 3em;
    cursor: pointer;

    background-color: #fff;
    color: $headerblack;

    transition: 0.4s;

    &:hover {
        position: absolute;
        translate: -2% 55%;
        font-size: 1.5em;
    }
`

export const Icon = styled.div `
    a
`