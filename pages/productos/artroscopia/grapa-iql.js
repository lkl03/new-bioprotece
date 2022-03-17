import React, {useEffect} from 'react'
import {
    ItemS,
    TitleItem,
    ContentItem,
    ItemImg,
    ImageDiv,
} from '../../../styles/StyledItems'
import ScrollArrow from '../../../components/Generales/ScrollArrow'
import Pdf from '../../../components/Generales/pdf'
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
                        <table class="tabla-chica" data-aos="fade-left">
                            <thead>
                                <tr>
                                    <th class="text-left">Cod</th>
                                    <th class="text-left">Medida</th>
                                    <th class="text-left">Pines</th>
                                    <th class="text-left">Material</th>
                                </tr>
                            </thead>
                            <tbody class="table-hover">
                                <tr>
                                    <td class="text-left code">68-004</td>
                                    <td class="text-left">Chica</td>
                                    <td class="text-center">3</td>
                                    <td class="text-left">Cromo cobalto</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">68-005</td>
                                    <td class="text-left">Mediana</td>
                                    <td class="text-center">5</td>
                                    <td class="text-left">Cromo cobalto</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">68-006</td>
                                    <td class="text-left">Grande</td>
                                    <td class="text-center">7</td>
                                    <td class="text-left">Cromo cobalto</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">68-016</td>
                                    <td class="text-left">Chica</td>
                                    <td class="text-center">3</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">68-017</td>
                                    <td class="text-left">Mediana</td>
                                    <td class="text-center">5</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr class="lastr">
                                    <td class="text-left code">68-018</td>
                                    <td class="text-left">Grande</td>
                                    <td class="text-center">7</td>
                                    <td class="text-left">Titanio</td>
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
