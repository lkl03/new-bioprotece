import { FaChevronDown } from 'react-icons/fa'
import styled from 'styled-components'
import {Link as LinkScroll} from 'react-scroll';

const ScrollTo = (props) => {


    return (
        <ScrollT>
            <LinkScroll activeClass="active" to={props.path} offset={-88} duration={300} delay={0} spy={true} smooth={true} className="scroll-arrow"><FaChevronDown color={props.color} size='1.2em' className="fas fa-chevron-down" /></LinkScroll>
        </ScrollT>
    )
}

export default ScrollTo

export const ScrollT = styled.div`
    z-index: 10;
    display: flex;
    text-decoration: none;
    text-align: center;
    justify-content: center;
    transition: 0.2s;
    border-radius: 50%;
    position: absolute;
    top: 75%;
    left: 50%;
    padding-bottom: 1em;
    cursor: pointer;
    background-color: transparent;
    color: $darkblue;
    opacity: 1;

    transition: 0.4s;

    &:hover {
        transform: translateY(-7px);
    }
    
`

export const IconTo = styled.div`
    position: absolute;
    translate: 1% -100%;
    font-size: 2.5em;
`
