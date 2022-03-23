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



const CanuladoFresada = () => {

    
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

    const titulo = 'Tornillo canulado Ø4.0 rosca total';
    const img = 'canulados-4_0-rosca-total';

    const close = (id) => {
        for (let i = 0; i < arr.length; i++) {
            let detail = document.getElementsByTagName("details")
            console.log(arr[i].id, id)

            if (detail[i].open === "true") {
                detail[i].open = true
            } else if (detail[i].open === "false"){
                detail[i].open = false
            } else if (arr[i].id !== id) {
                detail[i].open = false
            }
        }
    }


    return (
        <>
            <Redirecter category="Tornillos canulados" product="Tornillo Canulado Ø4.0 rosca total" />
            <NavProd />
            <ItemS>
                <TitleItem className="title-item">{titulo}</TitleItem>
                <ContentItem>
                    <ImageDiv className="image-div">
                        <ItemImg src={`/img/items/tornillos-canulados/${img}.webp`} alt={`${titulo} Bioprotece`} className="item-img" data-aos="fade-right" />
                    </ImageDiv>
                    <div className="info-div">

                        <table className="tabla-chica" data-aos="fade-left">
                            <thead>
                                <tr>
                                    <th className="text-left">Cod</th>
                                    <th className="text-left">Descripción</th>
                                    <th className="text-left">Material</th>
                                </tr>
                            </thead>
                            <tbody className="table-hover">
                                <tr>
                                    <td className="text-left code">60-218</td>
                                    <td className="text-left">Ø4.0 largo 14mm</td>
                                    <td className="text-left">Acero</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">60-219</td>
                                    <td className="text-left">Ø4.0 largo 16mm</td>
                                    <td className="text-left">Acero</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">60-220</td>
                                    <td className="text-left">Ø4.0 largo 18mm</td>
                                    <td className="text-left">Acero</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">60-221</td>
                                    <td className="text-left">Ø4.0 largo 20mm</td>
                                    <td className="text-left">Acero</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">60-222</td>
                                    <td className="text-left">Ø4.0 largo 22mm</td>
                                    <td className="text-left">Acero</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">60-223</td>
                                    <td className="text-left">Ø4.0 largo 24mm</td>
                                    <td className="text-left">Acero</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">60-224</td>
                                    <td className="text-left">Ø4.0 largo 26mm</td>
                                    <td className="text-left">Acero</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">60-225</td>
                                    <td className="text-left">Ø4.0 largo 28mm</td>
                                    <td className="text-left">Acero</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">60-226</td>
                                    <td className="text-left">Ø4.0 largo 30mm</td>
                                    <td className="text-left">Acero</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">60-227</td>
                                    <td className="text-left">Ø4.0 largo 35mm</td>
                                    <td className="text-left">Acero</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">60-228</td>
                                    <td className="text-left">Ø4.0 largo 40mm</td>
                                    <td className="text-left">Acero</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">60-229</td>
                                    <td className="text-left">Ø4.0 largo 45mm</td>
                                    <td className="text-left">Acero</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">60-230</td>
                                    <td className="text-left">Ø4.0 largo 50mm</td>
                                    <td className="text-left">Acero</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">60-231</td>
                                    <td className="text-left">Ø4.0 largo 55mm</td>
                                    <td className="text-left">Acero</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">60-232</td>
                                    <td className="text-left">Ø4.0 largo 60mm</td>
                                    <td className="text-left">Acero</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">60-233</td>
                                    <td className="text-left">Ø4.0 largo 65mm</td>
                                    <td className="text-left">Acero</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                    <Pdf path='https://drive.google.com/file/d/1ADhsKUjk6iUNkqn3LFtM3V2A3BfVNwPe/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default CanuladoFresada