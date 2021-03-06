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

    const titulo = 'Tornillo canulado Ø7.0 de acero';
    const img = 'canulados-7_0-acero';

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
            <Redirecter category="Tornillos canulados" product="Tornillo Canulado Ø7.0 acero" />
            <NavProd />
            <ItemS>
                <TitleItem className="title-item">{titulo}</TitleItem>
                <ContentItem>
                    <ImageDiv className="image-div">
                        <ItemImg src={`/img/items/tornillos-canulados/${img}.webp`} alt={`${titulo} Bioprotece`} className="item-img" data-aos="fade-right" />
                    </ImageDiv>
                    <div className="info-div multitables">

                        <details open>
                            <summary className="firstsum">Canulado Ø7.0 radio 16mm</summary>

                            <table className="tabla-chica mini">
                                <thead>
                                    <tr>
                                        <th className="text-left">Código</th>
                                        <th className="text-left">Descripción</th>
                                        <th className="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody className="table-hover">
                                    <tr>
                                        <td className="text-left code">60-001</td>
                                        <td className="text-left">Ø7.0 largo 30mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-002</td>
                                        <td className="text-left">Ø7.0 largo 35mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-003</td>
                                        <td className="text-left">Ø7.0 largo 40mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-004</td>
                                        <td className="text-left">Ø7.0 largo 45mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-005</td>
                                        <td className="text-left">Ø7.0 largo 50mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-006</td>
                                        <td className="text-left">Ø7.0 largo 55mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-007</td>
                                        <td className="text-left">Ø7.0 largo 60mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-008</td>
                                        <td className="text-left">Ø7.0 largo 65mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-009</td>
                                        <td className="text-left">Ø7.0 largo 70mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-010</td>
                                        <td className="text-left">Ø7.0 largo 75mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-011</td>
                                        <td className="text-left">Ø7.0 largo 80mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-012</td>
                                        <td className="text-left">Ø7.0 largo 85mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-013</td>
                                        <td className="text-left">Ø7.0 largo 90mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-014</td>
                                        <td className="text-left">Ø7.0 largo 95mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-015</td>
                                        <td className="text-left">Ø7.0 largo 100mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-016</td>
                                        <td className="text-left">Ø7.0 largo 105mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-017</td>
                                        <td className="text-left">Ø7.0 largo 110mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-018</td>
                                        <td className="text-left">Ø7.0 largo 115mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-019</td>
                                        <td className="text-left">Ø7.0 largo 120mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-020</td>
                                        <td className="text-left">Ø7.0 largo 125mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details>
                            <summary className="firstsum">Canulado Ø7.0 radio 32mm</summary>

                            <table className="tabla-chica mini">
                                <thead>
                                    <tr>
                                        <th className="text-left">Código</th>
                                        <th className="text-left">Descripción</th>
                                        <th className="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody className="table-hover">
                                    <tr>
                                        <td className="text-left code">60-021</td>
                                        <td className="text-left">Ø7.0 largo 30mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-022</td>
                                        <td className="text-left">Ø7.0 largo 35mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-023</td>
                                        <td className="text-left">Ø7.0 largo 40mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-024</td>
                                        <td className="text-left">Ø7.0 largo 45mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-025</td>
                                        <td className="text-left">Ø7.0 largo 50mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-026</td>
                                        <td className="text-left">Ø7.0 largo 55mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-027</td>
                                        <td className="text-left">Ø7.0 largo 60mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-028</td>
                                        <td className="text-left">Ø7.0 largo 65mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-029</td>
                                        <td className="text-left">Ø7.0 largo 70mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-030</td>
                                        <td className="text-left">Ø7.0 largo 75mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-031</td>
                                        <td className="text-left">Ø7.0 largo 80mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-032</td>
                                        <td className="text-left">Ø7.0 largo 85mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-033</td>
                                        <td className="text-left">Ø7.0 largo 90mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-034</td>
                                        <td className="text-left">Ø7.0 largo 95mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-035</td>
                                        <td className="text-left">Ø7.0 largo 100mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-036</td>
                                        <td className="text-left">Ø7.0 largo 105mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-037</td>
                                        <td className="text-left">Ø7.0 largo 110mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-038</td>
                                        <td className="text-left">Ø7.0 largo 115mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                    </div>
                    <Pdf path='https://drive.google.com/file/d/1KG-G0MWOpI_wDgrBh8X5wYWsX2r7Y6k2/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default CanuladoFresada