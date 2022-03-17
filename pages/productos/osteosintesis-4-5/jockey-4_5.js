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


const Jockey = () => {

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

    const titulo = 'Placa de tibia proximal 4.5 (Jockey)';
    const img = 'jockey';





    return (
        <>
            <Redirecter category="Osteosíntesis 4.5" product="Placa Jockey de tibia proximal 4.5" />
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
                                    <th className="text-left">Código der.</th>
                                    <th className="text-left">Código izq.</th>
                                    <th className="text-left">Orif.</th>
                                    <th className="text-left">Material</th>
                                </tr>
                            </thead>
                            <tbody className="table-hover">
                                <tr>
                                    <td className="text-left code">48-322</td>
                                    <td className="text-left code">48-315</td>
                                    <td className="text-left">5</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">48-323</td>
                                    <td className="text-left code">48-316</td>
                                    <td className="text-left">7</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">48-324</td>
                                    <td className="text-left code">48-317</td>
                                    <td className="text-left">9</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">48-325</td>
                                    <td className="text-left code">48-318</td>
                                    <td className="text-left">11</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">48-326</td>
                                    <td className="text-left code">48-319</td>
                                    <td className="text-left">13</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">48-327</td>
                                    <td className="text-left code">48-320</td>
                                    <td className="text-left">15</td>
                                    <td className="text-left">Titanio</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                    <Pdf path='https://drive.google.com/file/d/1KF4u6NooHZ6xrW4GwFWeqbVTbLPVGjjg/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default Jockey
