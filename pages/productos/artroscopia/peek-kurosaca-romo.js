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

    const titulo = 'Tornillo kurosaca perfil romo peek'

    return (
        <>
            <Redirecter category="Artroscopía" product="Tornillo kurosaca perfil romo peek" />
            <NavProd />
            <ItemS>
                <TitleItem className="title-item">{titulo}</TitleItem>
                <ContentItem>
                    <ImageDiv className="image-div">
                        <ItemImg src="/img/items/artroscopia/peek-tornillo-kurosaca-romo.webp" alt={`${titulo} Bioprotece`} className="item-img" data-aos="fade-right" />
                    </ImageDiv>
                    <div className="info-div">
                        <table class="tabla-chica" data-aos="fade-left">
                            <thead>
                                <tr>
                                    <th class="text-left">Cod</th>
                                    <th class="text-left">Diam</th>
                                    <th class="text-left">mm</th>
                                    <th class="text-left">Material</th>
                                </tr>
                            </thead>
                            <tbody class="table-hover">
                                <tr>
                                    <td class="text-left code">67-001</td>
                                    <td class="text-left">7</td>
                                    <td class="text-center">20</td>
                                    <td class="text-left">Peek</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">67-002</td>
                                    <td class="text-left">7</td>
                                    <td class="text-center">25</td>
                                    <td class="text-left">Peek</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">67-003</td>
                                    <td class="text-left">7</td>
                                    <td class="text-center">30</td>
                                    <td class="text-left">Peek</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">67-005</td>
                                    <td class="text-left">8</td>
                                    <td class="text-center">20</td>
                                    <td class="text-left">Peek</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">67-006</td>
                                    <td class="text-left">8</td>
                                    <td class="text-center">25</td>
                                    <td class="text-left">Peek</td>
                                </tr>
                                <tr class="lastr">
                                    <td class="text-left code">67-007</td>
                                    <td class="text-left">8</td>
                                    <td class="text-center">30</td>
                                    <td class="text-left">Peek</td>
                                </tr>
                                <tr class="lastr">
                                    <td class="text-left code">67-009</td>
                                    <td class="text-left">9</td>
                                    <td class="text-center">20</td>
                                    <td class="text-left">Peek</td>
                                </tr>
                                <tr class="lastr">
                                    <td class="text-left code">67-010</td>
                                    <td class="text-left">9</td>
                                    <td class="text-center">25</td>
                                    <td class="text-left">Peek</td>
                                </tr>
                                <tr class="lastr">
                                    <td class="text-left code">67-011</td>
                                    <td class="text-left">9</td>
                                    <td class="text-center">30</td>
                                    <td class="text-left">Peek</td>
                                </tr>
                                <tr class="lastr">
                                    <td class="text-left code">67-013</td>
                                    <td class="text-left">10</td>
                                    <td class="text-center">20</td>
                                    <td class="text-left">Peek</td>
                                </tr>
                                <tr class="lastr">
                                    <td class="text-left code">67-014</td>
                                    <td class="text-left">10</td>
                                    <td class="text-center">25</td>
                                    <td class="text-left">Peek</td>
                                </tr>
                                <tr class="lastr">
                                    <td class="text-left code">67-015</td>
                                    <td class="text-left">10</td>
                                    <td class="text-center">30</td>
                                    <td class="text-left">Peek</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <Pdf path='https://drive.google.com/file/d/17Hs_gP0Fnoh98IZHaiNuSY3o6H_staP3/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default GrapaIQL
