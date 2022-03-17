import styled from "styled-components";

export const ItemS = styled.div `
    position: relative;
    padding-top: 2em;
    padding-bottom: 2em;
    display: flex;
    flex-direction: column;
    min-height: 90vh;
    height: 100%;
    align-items: center;

    @media only screen and (min-width:720px) and (max-width:1269px) {
        padding-top: 1em;
    }
`
export const TitleItem = styled.h3 `
    color: #1348c4;
    margin: 0;
    font-weight: 800 !important;
    padding: 2rem 0;

    @media only screen and (max-width:719px) { 
        font-size: 1.6em;
        text-align: center;
    }

    @media only screen and (min-width:720px) and (max-width:1269px) {
        font-size: 1.7em;
        display: flex;
        text-align: center;
    }

`
export const ContentItem = styled.div `
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    column-gap: 20em;
    row-gap: 3em;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin-top: 5em;
    @media only screen and (max-width:719px) { 
        display: grid;
        grid-template-columns: auto;
        column-gap: 20em;
        row-gap: 1.5em;
        justify-content: center;
        align-items: center;
        width: 60%;
        margin-top: 3em;
    }

    @media only screen and (min-width:720px) and (max-width:1269px) {
        display: grid;
        grid-template-columns: auto;
        column-gap: 20em;
        row-gap: 1.5em;
        justify-content: center;
        align-items: center;
        width: 90%;
        margin-top: 3em;
    }

`
export const ItemImg = styled.img `
    height: 400px;
    transition: 0.3s;
    @media only screen and (max-width:719px) { 
        display: flex;
        height: 200px;
        justify-content: center;
    }
    @media only screen and (min-width:720px) and (max-width:1269px) {
        display: flex;
        height: 280px;
        justify-content: center;
    }
`

export const ImageDiv = styled.div `
    transition: 0.3s;

    &:hover {
        transform: translateY(-0.5em);
        transition: 0.3s;
    }

    @media only screen and (max-width:719px) { 
        display: flex;
        justify-content: center;
    }

    @media only screen and (min-width:720px) and (max-width:1269px) {
        display: flex;
        justify-content: center;
    }
`

export const InfoDiv = styled.div `
    display: flex;
    align-items: center;
`