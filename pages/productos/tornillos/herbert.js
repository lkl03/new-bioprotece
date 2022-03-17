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
            <Redirecter category="Tornillos" product="Tornillo Herbert Ø4" />
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
                                    <th class="text-left">Largo</th>
                                    <th class="text-left">Material</th>
                                </tr>
                            </thead>
                            <tbody class="table-hover">
                                <tr>
                                    <td class="text-left code">62-109</td>
                                    <td class="text-left">10</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">62-110</td>
                                    <td class="text-left">12</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">62-111</td>
                                    <td class="text-left">14</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">62-112</td>
                                    <td class="text-left">16</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">62-113</td>
                                    <td class="text-left">18</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">62-114</td>
                                    <td class="text-left">20</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">62-115</td>
                                    <td class="text-left">22</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">62-116</td>
                                    <td class="text-left">24</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">62-117</td>
                                    <td class="text-left">26</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">62-118</td>
                                    <td class="text-left">28</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">62-119</td>
                                    <td class="text-left">30</td>
                                    <td class="text-left">Titanio</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                    <Pdf path='https://drive.google.com/file/d/1FJf5mgAy4yjjD6B0sU4Ib6x21pCXdW2i/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default Herbert
