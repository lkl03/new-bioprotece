import React, { useState, useEffect } from 'react'
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


const Herbert = () => {

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

    const titulo = 'Tornillo Herbert Ø4';
    const img = 'herbert';


    return (
        <>
            <Redirecter category="Tornillos" product="Tornillo cerrojo Ø4.9" />
            <NavProd />
            <ItemS>
                <TitleItem className="title-item">{titulo}</TitleItem>
                <ContentItem>
                    <ImageDiv className="image-div">
                        <ItemImg src={`/img/items/tornillos/${img}.webp`} alt={`${titulo} Bioprotece`} className="item-img" data-aos="fade-right" />
                    </ImageDiv>
                    <div class="info-div">

                        <table class="tabla-chica" data-aos="fade-left">
                            <thead>
                                <tr>
                                    <th class="text-left">Código</th>
                                    <th class="text-left">Descripción</th>
                                    <th class="text-left">Material</th>
                                </tr>
                            </thead>
                            <tbody class="table-hover">
                                <tr>
                                    <td class="text-left code">34-223</td>
                                    <td class="text-left">Ø4.9 largo 90mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <Pdf path='https://drive.google.com/file/d/1y9MFAMxwxw4ClmAXFRSBDhGdzreJVKX1/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default Herbert