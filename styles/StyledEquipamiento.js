import styled from "styled-components";

export const EquipamientoS = styled.section `
    padding-top: 1.5em;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-line-pack: center;
    align-content: center;
    background: #e0e6eb;

    @media screen and (max-width: 1000px) {
        padding-top: 2em;
  }
    @media screen and (max-width: 780px) {
        padding-bottom: 0.5em;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-line-pack: center;
        align-content: center;
    }

`

export const Container = styled.div `
    display: flex;
    width: 100%;
    justify-content: center;

    @media screen and (max-width: 780px) {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        justify-content: center;
        padding-left: 3.5em;
    }

`

export const Title = styled.h1 `
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #151515;
    font-size: 2.5em;
    padding-bottom: 0.35em;

    @media screen and (max-width: 865px) {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #151515;
        font-size: 2em;
    }
    @media screen and (max-width: 700px) {
        font-size: 1.5em;
    }

`

export const Cards = styled.ul `
    display: -ms-grid;
    display: grid;
    justify-content: center,
    -ms-grid-columns: (24em)[auto-fill];
    grid-template-columns: repeat(auto-fill, 22em);
    margin-bottom: 2em;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    -webkit-column-gap: 2em;
    column-gap: 2em;
    padding: 0 2em;

    @media screen and (max-width: 900x) {
        grid-template-columns: repeat(auto-fill, 18em);
        align-items: center;
        width: 100%;
        column-gap: 0;
    }

`

export const Card = styled.div `
    background: #fff;
    width: 22em;
    border-radius: 0.6em;
    margin: 1em;
    overflow: hidden;
    -webkit-box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.03);
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.03);
    -webkit-transition: all ease 200ms;
    transition: all ease 200ms;

    &:hover {
        -webkit-transform: scale(1.02);
        transform: scale(1.02);
        -webkit-box-shadow: 0 13px 40px -5px rgba(50, 50, 93, 0.12), 0 8px 32px -8px rgba(0, 0, 0, 0.14), 0 -6px 32px -6px rgba(0, 0, 0, 0.02);
        box-shadow: 0 13px 40px -5px rgba(50, 50, 93, 0.12), 0 8px 32px -8px rgba(0, 0, 0, 0.14), 0 -6px 32px -6px rgba(0, 0, 0, 0.02);
    }
    @media only screen and (min-width: 780px) and (max-width: 1199px) {
        width: 18em;
    }

    @media screen and (max-width: 780px) {
        width: 18em;
    }

    @media screen and (max-width: 400px) {
        width: 18em;
        margin-left: 2em;
    }
`

export const CardPlus = styled.div `
    background: #fff;
    width: 22em;
    border-radius: 0.6em;
    margin: 1em;
    overflow: hidden;
    -webkit-box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.03);
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.03);
    -webkit-transition: all ease 200ms;
    transition: all ease 200ms;
    cursor: pointer;


    &:hover {
        -webkit-transform: scale(1.02);
        transform: scale(1.02);
        -webkit-box-shadow: 0 13px 40px -5px rgba(50, 50, 93, 0.12), 0 8px 32px -8px rgba(0, 0, 0, 0.14), 0 -6px 32px -6px rgba(0, 0, 0, 0.02);
        box-shadow: 0 13px 40px -5px rgba(50, 50, 93, 0.12), 0 8px 32px -8px rgba(0, 0, 0, 0.14), 0 -6px 32px -6px rgba(0, 0, 0, 0.02);
    }
    @media only screen and (min-width: 780px) and (max-width: 1199px) {
        width: 18em;
    }

    @media screen and (max-width: 780px) {
        width: 18em;
    }

    @media screen and (max-width: 400px) {
        width: 18em;
        margin-left: 2em;
    }
`

export const ImgCard = styled.img `
    width: 100%;
    object-fit: cover;
    background-color: #fff;
`

export const CardBody = styled.div `
    padding: 1.2em;
`

export const TitleCard = styled.h2 `
    color: #222;
    margin-top: -0.2em;
    line-height: 1.4;
    font-size: 1.3em;
    font-weight: 600;
    font-family: "Open Sans", sans-serif;
    -webkit-transition: all ease-in 100ms;
    transition: all ease-in 100ms;

`

export const PCard = styled.p `
    color: #777;
`

export const DivPlus = styled.div `
    position: fixed;
    bottom: 0em;
    width: 24em;
    height: 24.5em;
    background: rgba(255, 255, 255, 0.37);
    color: #ffffff;
    font-family: "Poppins", sans-serif;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    opacity: 0;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
`

export const PlusP = styled.p `
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: 700;
    color: $darkblue !important;
    text-shadow: 1px 5px 25px #ffffff;
    font-size: 1.25em;
    margin-bottom: 4em;
    -webkit-transition: 0.3s;
    transition: 0.3s;
`

