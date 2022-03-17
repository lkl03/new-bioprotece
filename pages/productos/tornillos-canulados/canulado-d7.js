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
import Caja from '../../../components/Generales/Caja'
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

    const titulo = 'Tornillo canulado Ø7';
    const img = 'canulado d7';


    return (
        <>
            <Redirecter category="Tornillos canulados" product="Tornillo Canulado Ø7" />
            <NavProd />
            <ItemS>
                <TitleItem className="title-item">{titulo}</TitleItem>
                <ContentItem>
                    <ImageDiv className="image-div">
                        <ItemImg src={`/img/items/tornillos-canulados/${img}.webp`} alt={`${titulo} Bioprotece`} className="item-img" data-aos="fade-right" />
                    </ImageDiv>
                    <div className="info-div multitables">

                        <details open>
                            <summary className="firstsum">Canulado Ø7 Rosca 16</summary>

                            <table className="tabla-chica mini" data-aos="fade-left">
                                <thead>
                                    <tr>
                                        <th className="text-left">Código</th>
                                        <th className="text-left">Descripción</th>
                                        <th className="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody className="table-hover">
                                    <tr>
                                        <td className="text-left code">60-480</td>
                                        <td className="text-left">D.7,0 R 16mm PF largo 30mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-481</td>
                                        <td className="text-left">D.7,0 R 16mm PF largo 35mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-482</td>
                                        <td className="text-left">D.7,0 R 16mm PF largo 40mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-483</td>
                                        <td className="text-left">D.7,0 R 16mm PF largo 45mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-484</td>
                                        <td className="text-left">D.7,0 R 16mm PF largo 50mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-485</td>
                                        <td className="text-left">D.7,0 R 16mm PF largo 55mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-486</td>
                                        <td className="text-left">D.7,0 R 16mm PF largo 60mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-487</td>
                                        <td className="text-left">D.7,0 R 16mm PF largo 65mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-488</td>
                                        <td className="text-left">D.7,0 R 16mm PF largo 70mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details>
                            <summary className="firstsum">Canulado Ø7 rosca 16 +75mm</summary>

                            <table className="tabla-chica mini" data-aos="fade-left">
                                <thead>
                                    <tr>
                                        <th className="text-left">Código</th>
                                        <th className="text-left">Descripción</th>
                                        <th className="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody className="table-hover">
                                    <tr>
                                        <td className="text-left code">60-489</td>
                                        <td className="text-left">D.7,0 R 16mm PF largo 75mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-490</td>
                                        <td className="text-left">D.7,0 R 16mm PF largo 80mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-491</td>
                                        <td className="text-left">D.7,0 R 16mm PF largo 85mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-492</td>
                                        <td className="text-left">D.7,0 R 16mm PF largo 90mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-493</td>
                                        <td className="text-left">D.7,0 R 16mm PF largo 95mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-494</td>
                                        <td className="text-left">D.7,0 R 16mm PF largo 100mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-495</td>
                                        <td className="text-left">D.7,0 R 16mm PF largo 105mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-496</td>
                                        <td className="text-left">D.7,0 R 16mm PF largo 110mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-497</td>
                                        <td className="text-left">D.7,0 R 16mm PF largo 115mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-498</td>
                                        <td className="text-left">D.7,0 R 16mm PF largo 120mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details>
                            <summary className="firstsum">Canulado Ø7 rosca 32</summary>

                            <table className="tabla-chica mini" data-aos="fade-left">
                                <thead>
                                    <tr>
                                        <th className="text-left">Código</th>
                                        <th className="text-left">Descripción</th>
                                        <th className="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody className="table-hover">
                                    <tr>
                                        <td className="text-left code">60-499</td>
                                        <td className="text-left">D.7,0 R 32mm PF largo 30mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-500</td>
                                        <td className="text-left">D.7,0 R 32mm PF largo 35mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-501</td>
                                        <td className="text-left">D.7,0 R 32mm PF largo 40mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-502</td>
                                        <td className="text-left">D.7,0 R 32mm PF largo 45mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-503</td>
                                        <td className="text-left">D.7,0 R 32mm PF largo 50mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-504</td>
                                        <td className="text-left">D.7,0 R 32mm PF largo 55mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-505</td>
                                        <td className="text-left">D.7,0 R 32mm PF largo 60mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-506</td>
                                        <td className="text-left">D.7,0 R 32mm PF largo 65mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-507</td>
                                        <td className="text-left">D.7,0 R 32mm PF largo 70mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-508</td>
                                        <td className="text-left">D.7,0 R 32mm PF largo 75mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details>
                            <summary className="firstsum">Canulado Ø7 rosca 32 +75mm</summary>

                            <table className="tabla-chica mini" data-aos="fade-left">
                                <thead>
                                    <tr>
                                        <th className="text-left">Código</th>
                                        <th className="text-left">Descripción</th>
                                        <th className="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody className="table-hover">
                                    <tr>
                                        <td className="text-left code">60-508</td>
                                        <td className="text-left">D.7,0 R 32mm PF largo 75mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-509</td>
                                        <td className="text-left">D.7,0 R 32mm PF largo 80mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-510</td>
                                        <td className="text-left">D.7,0 R 32mm PF largo 85mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-511</td>
                                        <td className="text-left">D.7,0 R 32mm PF largo 90mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-512</td>
                                        <td className="text-left">D.7,0 R 32mm PF largo 95mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-513</td>
                                        <td className="text-left">D.7,0 R 32mm PF largo 100mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-514</td>
                                        <td className="text-left">D.7,0 R 32mm PF largo 105mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-515</td>
                                        <td className="text-left">D.7,0 R 32mm PF largo 110mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-516</td>
                                        <td className="text-left">D.7,0 R 32mm PF largo 115mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-517</td>
                                        <td className="text-left">D.7,0 R 32mm PF largo 120mm Tit</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                    </div>
                    <Pdf path='https://drive.google.com/file/d/1U0QmKmG9uvrzQd5PhXmax8VCjjjt1k1g/view?usp=sharing' />
                    <Caja path='https://drive.google.com/file/d/1aSrqjchoe028JH3do8lI93DZszS_jUfy/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default CanuladoFresada
