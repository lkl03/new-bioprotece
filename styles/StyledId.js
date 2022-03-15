import styled from "styled-components";

export const BodyContainer = styled.div `
    background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
`

export const MachineSection = styled.section `
    position: relative;
    padding-bottom: 2em;
    display: flex;
    flex-direction: column;
    min-height: 97vh;
    height: 93vh;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 780px) {
        position: relative;
        padding-top: 11em;
        padding-bottom: 0;
        display: flex;
        flex-direction: column;
        min-height: 1vh;
        height: 100%;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
    }

    @media screen and (min-width: 780px) and (max-width:1269px) {
        position: relative;
        padding-top: 12em;
        padding-bottom: 0;
        display: flex;
        flex-direction: column;
        min-height: 1vh;
        height: 100%;
        justify-content: flex-start;
        width: 100%;
    }

`

export const Separator = styled.div `
    height: 7em;
`

export const Grid = styled.div `
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    column-gap: 3em;
    align-items: center;
    margin-top: -10em;

    @media screen and (max-width: 780px) {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: repeat(3, auto);
        justify-content: center;
        width: 90%;
    }

    @media screen and (min-width: 780px) and (max-width:1269px) {
        grid-template-columns: auto;
        grid-template-rows: repeat(3, auto);
        justify-content: center;
        width: 90%;
    }

`

export const ImgMachine = styled.div `
    order: 2;
    grid-column: 2/3;
    @media screen and (max-width: 780px) { 
        grid-column: 1/2;
        grid-row: 2/3;
        display: flex;
        justify-content: center;
        margin-top: 0.5em;
        padding-bottom: 0em;
    }
    @media screen and (min-width: 780px) and (max-width:1269px) {
        grid-column: 1/2;
        grid-row: 2/3;
        display: flex;
        justify-content: center;
        margin-top: 0.5em;
        padding-bottom: 2em;
    }
`

export const Imagen = styled.img `
    height: 30em;
    transition: 0.3s;
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(2px 5px 5px rgba(34, 34, 34, 0.35));

    &:hover {
        transform: translateY(-0.5em);
        transition: 0.3s;
    }

    @media screen and (max-width: 780px) {
        height: 19em;
    }
    @media screen and (min-width: 780px) and (max-width:1269px) {
        height: 28em;
    }

`

export const Text = styled.div `
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 40em;

    @media screen and (max-width: 780px) {
        grid-column: 1/2;
        grid-row: 1/2;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media screen and (min-width: 780px) and (max-width:1269px) {
        grid-column: 1/2;
        grid-row: 1/2;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
            font-size: 1.2em;
            width: 70%;
            text-align: justify;
        }
    }

`

export const Title = styled.h1 `
    color: #1348C4;

    @media screen and (max-width: 780px) {
        font-size: 1.6em;
        text-align: center;
        padding-bottom: 0.4em;
    }
    @media screen and (min-width: 780px) and (max-width:1269px) {
        font-size: 2.6em;
        padding-bottom: 0.4em;
    }
`

export const Desc = styled.p `
    width: 85%;

    font-size: 1.3em;
    font-weight: 500;
    color: $headerblack;

    @media screen and (max-width: 780px) {
        font-size: 0.9em;
        width: 90%;
        text-align: justify;
    }
`

export const Model = styled.span `
    color: $darkblue;
    
`

export const MachineDetails = styled.section `
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 3em;

    @media screen and (max-width: 780px) { 
        padding-top: 1em;
        min-height: 20vh;
        height: 100%;
        padding-bottom: 2em;
    }
    @media screen and (min-width: 780px) and (max-width:1269px) {
        padding-top: 1em;
        min-height: 20vh;
        height: 100%;   
    }
`

export const YtContent = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const VTitle = styled.h3 `
    color: #1348C4;
    font-weight: 600;
    font-size: 2em;

    @media screen and (max-width: 780px) {
        text-align: center;
        padding-top: 1em;
        margin-bottom: 0px;
        font-size: 1.5em;
    }
    
`

export const Yt = styled.iframe `
    height: 500px;
    width: 840px;
    padding-bottom: 1em;

    @media screen and (max-width: 780px) { 
        height: 220px;
        width: 320px;
        margin-top: 1em;
    }
    @media screen and (min-width: 780px) and (max-width:1269px) {
        height: 328px;
        width: 525px;
        margin-top: 0em;
    }
`

