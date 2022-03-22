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

const Detensor = () => {

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

    const titulo = 'Schanz titanio';
    const img = 'schanz';





    return (
        <>
            <Redirecter category="Fijación interna" product="Schanz" />
            <NavProd />
            <ItemS>
                <TitleItem className="title-item">{titulo}</TitleItem>
                <ContentItem>
                    <ImageDiv className="image-div">
                        <ItemImg src={`/img/items/fijacion-interna/${img}.webp`} alt={`${titulo} Bioprotece`} className="item-img" data-aos="fade-right" />
                    </ImageDiv>
                    <div class="info-div">

                        <table class="tabla-chica" data-aos="fade-left">
                            <thead>
                                <tr>
                                    <th class="text-left">Cod</th>
                                    <th class="text-left">Descripción</th>
                                    <th class="text-left">Material</th>
                                </tr>
                            </thead>
                            <tbody class="table-hover">
                                <tr>
                                    <td class="text-left code">33-500</td>
                                    <td class="text-left">Ø4.0 largo 100mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">33-501</td>
                                    <td class="text-left">Ø4.0 largo 125mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">33-502</td>
                                    <td class="text-left">Ø4.0 largo 150mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">33-503</td>
                                    <td class="text-left">Ø4.0 largo 175mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">33-504</td>
                                    <td class="text-left">Ø5.0 largo 100mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">33-505</td>
                                    <td class="text-left">Ø5.0 largo 125mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">33-506</td>
                                    <td class="text-left">Ø5.0 largo 150mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">33-507</td>
                                    <td class="text-left">Ø5.0 largo 175mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">33-508</td>
                                    <td class="text-left">Ø5.0 largo 200mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">33-509</td>
                                    <td class="text-left">Ø5.0 largo 225mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">33-510</td>
                                    <td class="text-left">Ø5.0 largo 250mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">33-511</td>
                                    <td class="text-left">Ø5.0 largo 275mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">33-512</td>
                                    <td class="text-left">Ø5.0 largo 300mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">33-513</td>
                                    <td class="text-left">Ø6.0 largo 100mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">33-514</td>
                                    <td class="text-left">Ø6.0 largo 126mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">33-515</td>
                                    <td class="text-left">Ø6.0 largo 160mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">33-516</td>
                                    <td class="text-left">Ø6.0 largo 176mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">33-517</td>
                                    <td class="text-left">Ø6.0 largo 200mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">33-518</td>
                                    <td class="text-left">Ø6.0 largo 226mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">33-519</td>
                                    <td class="text-left">Ø6.0 largo 260mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">33-520</td>
                                    <td class="text-left">Ø6.0 largo 276mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">33-521</td>
                                    <td class="text-left">Ø6.0 largo 300mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                    <Pdf path='https://drive.google.com/file/d/1htjHtz58HA9nYiVEywx9lgKovJd_GYIe/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default Detensor
