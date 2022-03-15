import React, {useState, useEffect} from 'react'
import { useWindowScroll } from "react-use"
import { FaChevronUp } from 'react-icons/fa';
import styled from 'styled-components';


const ScrollArrow = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisibility] = useState(false)


    useEffect(() => {

        if(window.innerWidth > 1000) {
            if(pageYOffset > 400) {
                setVisibility(true);
            }else{
                setVisibility(false);
            }
        } else {
            if(pageYOffset > 10) {
                setVisibility(true);
            }else{
                setVisibility(false);
            }
        }
        

    }, [pageYOffset])

    const ScrollArrow = () => window.scrollTo({ top: 0, behavior: 'smooth' })


    if(!visible) {
        return false;
    }

    return (
        <Scroll onClick={ScrollArrow}>
            <Icon><FaChevronUp/></Icon>
        </Scroll>
    )
}

export default ScrollArrow

export const Scroll = styled.div `
    z-index: 10;
    display: flex;
    text-decoration: none;
    text-align: center;
    justify-content: center;
    transition: 0.2s;
    border-radius: 50%;
    position: fixed;
    left: 95%;
    bottom: 0;
    margin: 0 0 1em -25px;
    @media only screen and (max-width: 480px) {
        left: 45%;
        margin: auto;
    }
    padding-bottom: 1em;
    width: 3em;
    height: 3em;
    cursor: pointer;
    z-index: 101;

    background-color: white;
    color: #0188D3;

    transition: 0.4s;

    &:hover {
        transform: translateY(-7px)
    }
`

export const Icon = styled.div `
    position: absolute;
    margin-top: 0.3em;
    font-size: 1.5em
`

