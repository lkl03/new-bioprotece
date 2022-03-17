import { FaFilePdf } from 'react-icons/fa'
import styled from 'styled-components'

const Caja = (props) => {
    return (
        <CajaContainer href={props.path} target='_blank' >
            <CajaContent>
                <Icon />
                <p>{props.text}</p>
            </CajaContent>
        </CajaContainer>
    )
}

Caja.defaultProps = {
    text: 'Ver caja de cirugía'
}

export default Caja

export const CajaContainer = styled.a`
    margin-top: -2em;
    grid-column: 1/3;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1.05em 1.5em;
    background-color: rgb(4, 186, 146);
    font-weight: 600;
    transition: 0.3s;
    border-radius: 4px;
    
    &:hover {
        background-color: rgb(0, 145, 113);
    }

    @media only screen and (max-width:720px) {
        margin-top: -1em;
        grid-column: 1/2;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0.5em 1.5em;
        background-color: rgb(0, 145, 113);
        font-weight: 600;
        transition: 0.3s;
        border-radius: 4px;
    }

    @media only screen and (min-width:720px) and (max-width:1269px) {
        margin-top: -1em;
        grid-column: 1/2;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0.5em 1.5em;
        background-color: rgb(0, 145, 113);
        font-weight: 600;
        transition: 0.3s;
        border-radius: 4px;
    }


`

export const CajaContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    transition: 0.3s;
    color: white;


    @media only screen and (max-width:759px) {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;
        transition: 0.3s

        p {
            font-size: 0.8em;
            color: white;
        }
    }

`

export const Icon = styled(FaFilePdf)`
    margin-right: 10px;
    color: white;
    text-decoration: none;

    @media only screen and (max-width:759px) {
        margin-right: 10px;
    }
`

