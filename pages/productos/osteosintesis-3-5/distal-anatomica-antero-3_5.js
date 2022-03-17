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


const DistalAnatomica = () => {

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

    const titulo = 'Tibia distal anatómica 3.5';
    const img = 'distal-anatomica-antero';





    return (
        <>
            <Redirecter category="Osteosíntesis 3.5" product="Tibia distal anatómica 3.5" />
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
                                    <td className="text-left code">45-236</td>
                                    <td className="text-left code">45-229</td>
                                    <td className="text-left">5</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">45-237</td>
                                    <td className="text-left code">45-230</td>
                                    <td className="text-left">7</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">45-238</td>
                                    <td className="text-left code">45-231</td>
                                    <td className="text-left">9</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">45-239</td>
                                    <td className="text-left code">45-232</td>
                                    <td className="text-left">11</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">45-240</td>
                                    <td className="text-left code">45-233</td>
                                    <td className="text-left">13</td>
                                    <td className="text-left">Titanio</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                    
                    <Pdf path='https://drive.google.com/file/d/1wvZnL8GH3IOHb2KnS5ID81mMhLrL9B3P/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default DistalAnatomica
