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


const PlacaT = () => {

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

    const titulo = 'Placa en "T" 4.5 bloqueada';
    const img = 'placa-t-4_5';





    return (
        <>
            <Redirecter category="Osteosíntesis 4.5" product="Placa en 'T' 4.5" />
            <NavProd />
            <ItemS>
                <TitleItem className="title-item">{titulo}</TitleItem>
                <ContentItem>
                    <ImageDiv className="image-div">
                        <ItemImg src={`/img/items/osteosintesis4-5/${img}.webp`} alt={`${titulo} Bioprotece`} className="item-img" data-aos="fade-right" />
                    </ImageDiv>
                    <div className="info-div">

                        <table className="tabla-chica" data-aos="fade-left">
                            <thead>
                                <tr>
                                    <th className="text-left">Simple Ang.</th>
                                    <th className="text-left">Doble ang.</th>
                                    <th className="text-left">Orif</th>
                                    <th className="text-left">Material</th>
                                </tr>
                            </thead>
                            <tbody className="table-hover">
                                <tr>
                                    <td className="text-left code">48-254</td>
                                    <td className="text-left code">48-284</td>
                                    <td className="text-left">3</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">48-255</td>
                                    <td className="text-left code">48-285</td>
                                    <td className="text-left">4</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">48-256</td>
                                    <td className="text-left code">48-286</td>
                                    <td className="text-left">5</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">48-257</td>
                                    <td className="text-left code">48-287</td>
                                    <td className="text-left">6</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">48-258</td>
                                    <td className="text-left code">48-288</td>
                                    <td className="text-left">7</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">48-259</td>
                                    <td className="text-left code">48-289</td>
                                    <td className="text-left">8</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">48-260</td>
                                    <td className="text-left code">48-290</td>
                                    <td className="text-left">9</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">48-261</td>
                                    <td className="text-left code">48-291</td>
                                    <td className="text-left">10</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">48-262</td>
                                    <td className="text-left code">48-292</td>
                                    <td className="text-left">11</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">48-263</td>
                                    <td className="text-left code">48-293</td>
                                    <td className="text-left">12</td>
                                    <td className="text-left">Titanio</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                    <Pdf path='https://drive.google.com/file/d/1zDgPVOhGQeT0jp2YEKlX1ALBP2H26awp/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default PlacaT
