import { FaEnvelope } from 'react-icons/fa'
import styled from 'styled-components'
import Link from 'next/link'

const Cont = (props) => {
    return (
        <ContContainer >
            <Link href={props.path}>
                <ContContent>
                    <Icon />
                    <p>{props.text}</p>
                </ContContent>
            </Link>
        </ContContainer>
    )
}

Cont.defaultProps = {
    text: 'Ponerse en contacto con Bioprotece',
    path: '/#contactanos'
}

export default Cont

export const ContContainer = styled.a`
    width: 840px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.1em 1.5em;
    background-color: #0188D3;
    font-weight: 600;
    transition: 0.3s;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
        background-color: $hoverdarkblue;
    }

    @media screen and (max-width: 780px) {
        grid-column: 1/2;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 320px;
        padding: 0.5em 1.5em;
        background-color: $darkblue;
        font-weight: 600;
        transition: 0.3s;
        border-radius: 4px;
    }

    @media only screen and (min-width:780px) and (max-width:1269px) {
        grid-column: 1/2;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 525px;
        padding: 0.5em 1.5em;
        background-color: $darkblue;
        font-weight: 600;
        transition: 0.3s;
        border-radius: 4px;
    }
    


`

export const ContContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    transition: 0.3s;
    color: white;
    font-size: 0.85em;


    @media screen and (max-width: 780px) {
        display: flex;
        align-items: center;
        width: 840px;
        justify-content: center;
        transition: 0.3s
    }

`

export const Icon = styled(FaEnvelope)`
    margin-right: 10px;
    color: white;
    text-decoration: none;

    @media only screen and (max-width:759px) {
        margin-right: 10px;
    }
`

