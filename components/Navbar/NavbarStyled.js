import styled from "styled-components"
import Link from 'next/link'

export const Header = styled.header `
    background-color: white;
    color: #fff;
    padding-top: 0.3em;
    position: fixed;
    height: 7em;
    left: 0;
    top: 0;
    right: 0;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    z-index: 1000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    max-width: 100vw;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
`


export const HeaderContainer = styled.div `
    width: 90%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`


export const Logo = styled.img `
    height: 4.5em;
    cursor: pointer;

    @media screen and (max-width: 1060px) {
        height: 3em;
        padding: 0.2em 0;
    }
`


export const NavLink = styled.a `
    color: white;
    text-decoration: none;
    padding: 0;
    font-size: 1em;
    font-weight: 600;
    cursor: pointer;

    &::before {
        width: 0%;
        bottom: 10px;
    }

    &:hover::before {
        width: 100%
    }

    @media screen and (max-width: 1060px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            display: block;
            font-size: 1.4rem;
            cursor: pointer;
        }
    }
`

export const Navitem = styled.li `
    display: inline-block;
    position: relative;
    margin-right: 1em;
    padding: 20px 0px;
    font-size: 1em;
    font-weight: 500;
    text-transform: uppercase;
    opacity: 0.85;

    &:hover {
        opacity: 1;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    &::before {
        -webkit-transition: 0.3s;
        transition: 0.3s;
        height: 3px;
        content: "";
        position: absolute;
        background-color: #ffffff;
    }

    @media screen and (max-width: 1060px) {
        position: relative;
    }
`


export const MenuIcon = styled.div `
    display: none;

    @media screen and (max-width: 1060px) {
        display: block;
        font-size: 1.4rem;
        cursor: pointer;
    }
`


export const Prod = styled.p `
    display: inline-block;
    position: relative;
    margin-right: 0em;
    padding: 20px 0px;
    font-size: 1.05em;
    font-weight: 600;
    text-transform: uppercase;
    opacity: 0.9;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    cursor: pointer;
    color: #ffff;
`

export const NavMenu = styled.ul `

    @media screen and (max-width: 1060px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 78px;
        left: -100%;
        opacity: 1;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;

        @media (max-width: 960px) {
            overflow: hidden;
            flex-direction: column;
            max-height: ${({ click }) => (click ? "300px" : "0")};
            transition: max-height 0.3s ease-in;
            width: 100%;
            padding-bottom: 1em;
        }
`

/*----------------- Dropdown -------------------------------*/

export const DropdownMenu = styled.ul.attrs({
  className: ''
}) `
    position: absolute;
    top: 5.5em;
    display: flex;
    height: auto;
    width: auto;
    background-color: #fff;
    border-radius: 5px;
    padding: 10px 5px;
    padding-right: 55px;
    opacity: 1;
    margin-left: 1.5em;
    transition: 0.3s;

    &.closed {
        display: none;
    }

    ul {
        padding-right: 1.5em;
    }

    @media (max-width: 960px) {
        opacity: 100;
        padding: 0 0 15px 0;
        display: flex;
        flex-direction: column;
        border-radius: 0;
        background-color: $headerblack;
        margin-left: 0;
        width: 100%;
        margin-top: 3em;
        transition: 0.3s;
    }

`

export const DropLi = styled.li `
    width: 100%;
    cursor: pointer;
    padding-left: 1em;
    line-height: 10px;
    opacity: 1;
    color: black;
    list-style: none;
    font-size: 1em;
    text-transform: uppercase;
    padding: 1em;

    @media (max-width: 960px) {
        color: white;
        padding: 1em 0 0 1em;
    }
`

export const DropLink = styled.a `
    width: 100%;
    flex-wrap: nowrap;
    font-size: 0.8em;
    font-weight: 600;
    color: black;
    white-space: nowrap;
    opacity: 0.86;
    padding: 10px;
    @media (max-width: 960px) {
        color: #9bd6fd;
        opacity: 1;
        padding-right: 13em; 
        line-height: 1em;
    }

    &:hover {opacity: 1;}
`
