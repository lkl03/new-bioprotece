import { FaFilePdf } from 'react-icons/fa'
import styled from 'styled-components'

const Pdf = (props) => {
    return (
        <PdfContainer href={props.path} target='_blank' >
            <PdfContent>
                <Icon />
                <p>{props.text}</p>
            </PdfContent>
        </PdfContainer>
    )
}

Pdf.defaultProps = {
    text: 'Ver catálogo técnico'
}

const PdfContainer = styled.a `
    grid-column: 1/3;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.1em 1.5em;
    background-color: #0188D3;
    font-weight: 600;
    transition: 0.3s;
    border-radius: 4px;
    
    &:hover {
        background-color: #1348c4;
    }

    @media only screen and (max-width:720px) {
        grid-column: 1/2;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0.5em 1.5em;
        background-color: #1348c4;
        font-weight: 600;
        transition: 0.3s;
        border-radius: 4px;
    }

    @media only screen and (min-width:720px) and (max-width:1269px) {
        grid-column: 1/2;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0.5em 1.5em;
        background-color: #1348c4;
        font-weight: 600;
        transition: 0.3s;
        border-radius: 4px;
    }


`

const PdfContent = styled.div `
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

const Icon = styled(FaFilePdf) `
    margin-right: 10px;
    color: white;
    text-decoration: none;

    @media only screen and (max-width:759px) {
        margin-right: 10px;
    }
`

export default Pdf



