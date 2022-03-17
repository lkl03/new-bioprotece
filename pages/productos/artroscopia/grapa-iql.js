import React, {useEffect} from 'react'
import {
    ItemS,
    TitleItem,
    ContentItem,
    ItemImg,
    ImageDiv,
} from '../../../styles/StyledItems'
import ScrollArrow from '../../../components/Generales/ScrollArrow'
import Pdf from '../../../components/Generales/Pdf'
import NavProd from '../../../components/Navbar/NavProd'
import Redirecter from '../../../components/Redirecter'


const GrapaIQL = () => {

    useEffect(() => {
        let details = [...document.querySelectorAll('details')];
        document.addEventListener('click', function(e) {
          if (!details.some(f => f.contains(e.target))) {
            details.forEach(f => f.removeAttribute('open'));
          } else {
            details.forEach(f => !f.contains(e.target) ? f.removeAttribute('open') : '');
          }
        })
    }, [])

    const titulo = 'Grapa IQL'

    return (
        <>
            <Redirecter category="Artroscopía" product="Grapa IQL" />
            <NavProd />
            <ItemS>
                <TitleItem className="title-item">{titulo}</TitleItem>
                <ContentItem>
                    <ImageDiv className="image-div">
                        <ItemImg src="/img/items/artroscopia/grapa-iql.webp" alt={`${titulo} Bioprotece`} className="item-img" data-aos="fade-right" />
                    </ImageDiv>
                    <div className="info-div">
                        <table className="tabla-chica" data-aos="fade-left">
                            <thead>
                                <tr>
                                    <th className="text-left">Cod</th>
                                    <th className="text-left">Medida</th>
                                    <th className="text-left">Pines</th>
                                    <th className="text-left">Material</th>
                                </tr>
                            </thead>
                            <tbody className="table-hover">
                                <tr>
                                    <td className="text-left code">68-004</td>
                                    <td className="text-left">Chica</td>
                                    <td className="text-center">3</td>
                                    <td className="text-left">Cromo cobalto</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">68-005</td>
                                    <td className="text-left">Mediana</td>
                                    <td className="text-center">5</td>
                                    <td className="text-left">Cromo cobalto</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">68-006</td>
                                    <td className="text-left">Grande</td>
                                    <td className="text-center">7</td>
                                    <td className="text-left">Cromo cobalto</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">68-016</td>
                                    <td className="text-left">Chica</td>
                                    <td className="text-center">3</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">68-017</td>
                                    <td className="text-left">Mediana</td>
                                    <td className="text-center">5</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr className="lastr">
                                    <td className="text-left code">68-018</td>
                                    <td className="text-left">Grande</td>
                                    <td className="text-center">7</td>
                                    <td className="text-left">Titanio</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <Pdf path='https://drive.google.com/file/d/196S-2cT7wQriy6e5b28XTaFFBbtPKnEw/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default GrapaIQL
