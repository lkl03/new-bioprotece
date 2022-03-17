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


const PeekTransversal = () => {

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

    const titulo = 'Tornillo transversal peek'

    return (
        <>
            <Redirecter category="Artroscopía" product="Tornillo transversal peek" />
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
                                    <td class="text-left code">67-020</td>
                                    <td class="text-left">7</td>
                                    <td class="text-center">40</td>
                                    <td class="text-left">Peek</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">67-021</td>
                                    <td class="text-left">7</td>
                                    <td class="text-center">45</td>
                                    <td class="text-left">Peek</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">67-022</td>
                                    <td class="text-left">7</td>
                                    <td class="text-center">50</td>
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

export default PeekTransversal
