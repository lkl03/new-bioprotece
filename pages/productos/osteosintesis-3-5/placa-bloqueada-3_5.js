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


const AceroBloqueada = () => {

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

    const titulo = 'Placa 1/3 bloqueada 3.5';
    const img = 'placa-bloqueada-acero';





    return (
        <>
            <Redirecter category="Osteosíntesis 3.5" product="Placa 1/3 bloqueada 3.5" />
            <NavProd />
            <ItemS>
                <TitleItem className="title-item">{titulo}</TitleItem>
                <ContentItem>
                    <ImageDiv className="image-div">
                        <ItemImg src={`/img/items/osteosintesis3-5/${img}.webp`} alt={`${titulo} Bioprotece`} className="item-img" data-aos="fade-right" />
                    </ImageDiv>
                    <div class="info-div">

                        <table class="tabla-chica" data-aos="fade-left">
                            <thead>
                                <tr>
                                    <th class="text-left">Cod</th>
                                    <th class="text-left">Orificios</th>
                                    <th class="text-left">Material</th>
                                </tr>
                            </thead>
                            <tbody class="table-hover">
                                <tr>
                                    <td class="text-left code">45-075</td>
                                    <td class="text-left">3</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">45-076</td>
                                    <td class="text-left">4</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">45-077</td>
                                    <td class="text-left">5</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">45-078</td>
                                    <td class="text-left">6</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">45-079</td>
                                    <td class="text-left">7</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr class="lastr">
                                    <td class="text-left code">45-080</td>
                                    <td class="text-left">8</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr class="lastr">
                                    <td class="text-left code">45-081</td>
                                    <td class="text-left">9</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr class="lastr">
                                    <td class="text-left code">45-082</td>
                                    <td class="text-left">10</td>
                                    <td class="text-left">Titanio</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                    <Pdf path='https://drive.google.com/file/d/1hOVPh2NWoddAlQ9JtgaBK0sKN5rMbHOO/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default AceroBloqueada
