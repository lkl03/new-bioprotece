import React, { useState, useEffect } from 'react'
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
                    <div className="info-div">

                        <table className="tabla-chica" data-aos="fade-left">
                            <thead>
                                <tr>
                                    <th className="text-left">Cod</th>
                                    <th className="text-left">Orificios</th>
                                    <th className="text-left">Material</th>
                                </tr>
                            </thead>
                            <tbody className="table-hover">
                                <tr>
                                    <td className="text-left code">45-075</td>
                                    <td className="text-left">3</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">45-076</td>
                                    <td className="text-left">4</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">45-077</td>
                                    <td className="text-left">5</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">45-078</td>
                                    <td className="text-left">6</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">45-079</td>
                                    <td className="text-left">7</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr className="lastr">
                                    <td className="text-left code">45-080</td>
                                    <td className="text-left">8</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr className="lastr">
                                    <td className="text-left code">45-081</td>
                                    <td className="text-left">9</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr className="lastr">
                                    <td className="text-left code">45-082</td>
                                    <td className="text-left">10</td>
                                    <td className="text-left">Titanio</td>
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
