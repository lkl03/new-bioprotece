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


const OlecranonBloqueada = () => {

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

    const titulo = 'Placa olecranon de 3.5 titanio bloqueada';
    const img = 'olecranon-titanio-bloqueda-3_5';


    return (
        <>
            <Redirecter category="Osteosíntesis 3.5" product="Placa olecranón 3.5 bloqueada" />
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
                                    <td class="text-left code">45-155</td>
                                    <td class="text-left">3</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">45-156</td>
                                    <td class="text-left">5</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">45-157</td>
                                    <td class="text-left">7</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">45-158</td>
                                    <td class="text-left">9</td>
                                    <td class="text-left">Titanio</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                    <Pdf path='https://drive.google.com/file/d/1esqWJdOK-ugymUEwd2wLLcL1FIRZ67qi/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default OlecranonBloqueada
