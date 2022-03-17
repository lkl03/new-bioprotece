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


const VolarSimple = () => {

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

    const titulo = 'Volar anatómica simple';
    const img = 'volar-anatomica-simple';


    return (
        <>
            <Redirecter category="Osteosíntesis 3.5" product="Volar anatómica simple" />
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
                                    <th className="text-left">Cod der</th>
                                    <th className="text-left">Cod izq</th>
                                    <th className="text-left">Orificios</th>
                                    <th className="text-left">Material</th>
                                </tr>
                            </thead>
                            <tbody className="table-hover">
                                <tr>
                                    <td className="text-left code">45-288</td>
                                    <td className="text-left">45-284</td>
                                    <td className="text-left">3</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">45-289</td>
                                    <td className="text-left">45-285</td>
                                    <td className="text-left">4</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">45-290</td>
                                    <td className="text-left">45-286</td>
                                    <td className="text-left">6</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">45-291</td>
                                    <td className="text-left">45-287</td>
                                    <td className="text-left">8</td>
                                    <td className="text-left">Titanio</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                    <Pdf path='https://drive.google.com/file/d/13C4XGKQWhyqP1IGjEBRZ4Z6SG7i1mFGP/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default VolarSimple
