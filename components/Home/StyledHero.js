import styled from "styled-components"

export const HeroS = styled.section `
    position: relative;
    padding-top: 0em;
    padding-bottom: 2em;
    right: 0;
    width: 100%;
    height: 100%;
    min-height: 95vh;
    justify-content: center;
    background: #111;
    transition: 0.5s;
    z-index: 2;
    display: flex;
    align-items: center;


`

export const HeroGrid = styled.div `
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
    width: 90%;
    padding-top: 5em;


`

export const Content = styled.div `
    width: 60%;
    color: #fff;

`

export const Title = styled.h1 `
    font-size: 3.8em;
    width: 100%;
    line-height: 1.1em;
    color: #fff;

`

export const VideoBg = styled.video `
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    z-index: -5;
`

export const Description = styled.p `
    font-size: 1.4em;
    width: 83%;
    margin-top: 1em;
    line-height: 1.2em;


`

export const Btn = styled.a `
    display: inline-block;
    font-size: 1em;
    background: #fff;
    padding: 10px 30px;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 500;
    margin-top: 2em;
    color: #111;
    letter-spacing: 2px;
    transition: 0.2s;
    cursor: pointer;
    border: none;
    &:hover {letter-spacing:3px;}

`

export const Overlay = styled.div `
    z-index: -4;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.576);

`

export const SocialM = styled.div `
    position: absolute;
    transform: scale(1.5);
    z-index: 10;
    margin-top: 3em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 5.3em;
        li{
            list-style: none;
            a {
                display: inline-block;
                margin-right: 20px;
                transition: 0.5s;
                text-decoration: none;
                color: white;
                transition: 0.4s;
                &:hover {
                    transform: translateY(-10px);
                }
            }
        }

`
export const SocialContact = styled.div `
    display: inline-flex;
    margin-left: 0px;
    li {
        margin-right: 10px;
    }
`

export const SlideShow = styled.div `
    div {
        opacity: 1;
        -webkit-transition: all 1s ease-in-out;
        -moz-transition: all 1s ease-in-out;
        -ms-transition: all 1s ease-in-out;
        -o-transition: all 1s ease-in-out;
        transition: all 1s ease-in-out;
        visibility: visible;

        &:active{
            opacity: 1;
            -webkit-transition: all 1s ease-in-out 0.2s;
            -moz-transition: all 1s ease-in-out 0.2s;
            -ms-transition: all 1s ease-in-out 0.2s;
            -o-transition: all 1s ease-in-out 0.2s;
            transition: all 1s ease-in-out 0.2s;
            visibility: visible;
        }
    }
`
export const SliderImg = styled.img `
    position: absolute;
    right: 10vh;
    bottom: 35vh;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        filter: brightness(1.15);
        transition: 0.4s;
        transform: translateY(-0.8em);
    }
`
export const e = styled.div `
    a
`
export const f = styled.div `
    a
`
export const g = styled.div `
    a
`
export const h = styled.div `
    a
`
export const y = styled.div `
    a
`
export const t = styled.div `
    a
`