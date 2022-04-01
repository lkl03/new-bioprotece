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

const PlacaEnL = () => {

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

    const titulo = 'Tornillo cortical titanio';
    const img = 'tornillo-cortical';





    return (
        <>
            <Redirecter category="Mini Placas" product="Tornillo cortical" />
            <NavProd />
            <ItemS>
                <TitleItem className="title-item">{titulo}</TitleItem>
                <ContentItem>
                    <ImageDiv className="image-div">
                        <ItemImg src={`/img/items/mini-placas/${img}.webp`} alt={`${titulo} Bioprotece`} className="item-img" data-aos="fade-right" />
                    </ImageDiv>
                    <div className="info-div multitables">

                        <details open>
                            <summary className="firstsum">Cortical 6-18mm</summary>

                            <table className="tabla-chica mini">
                                <thead>
                                    <tr>
                                        <th className="text-left">Código</th>
                                        <th className="text-left">Largo</th>
                                        <th className="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody className="table-hover">
                                    <tr>
                                        <td className="text-left code">55-048</td>
                                        <td className="text-left">6mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">55-049</td>
                                        <td className="text-left">7mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">55-050</td>
                                        <td className="text-left">8mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">55-051</td>
                                        <td className="text-left">9mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">55-052</td>
                                        <td className="text-left">10mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">55-053</td>
                                        <td className="text-left">11mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">55-054</td>
                                        <td className="text-left">12mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">55-055</td>
                                        <td className="text-left">13mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">55-056</td>
                                        <td className="text-left">14mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">55-057</td>
                                        <td className="text-left">15mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">55-058</td>
                                        <td className="text-left">16mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">55-059</td>
                                        <td className="text-left">17mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">55-060</td>
                                        <td className="text-left">18mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details>
                            <summary className="firstsum">Cortical 19-40mm</summary>

                            <table className="tabla-chica mini">
                                <thead>
                                    <tr>
                                        <th className="text-left">Código</th>
                                        <th className="text-left">Largo</th>
                                        <th className="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody className="table-hover">
                                    <tr>
                                        <td className="text-left code">55-061</td>
                                        <td className="text-left">19mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">55-062</td>
                                        <td className="text-left">20mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">55-063</td>
                                        <td className="text-left">22mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">55-064</td>
                                        <td className="text-left">24mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">55-065</td>
                                        <td className="text-left">26mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">55-066</td>
                                        <td className="text-left">28mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">55-067</td>
                                        <td className="text-left">30mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">55-068</td>
                                        <td className="text-left">32mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">55-069</td>
                                        <td className="text-left">34mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">55-070</td>
                                        <td className="text-left">36mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">55-071</td>
                                        <td className="text-left">38mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">55-072</td>
                                        <td className="text-left">40mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                    </div>
                    <Pdf path='https://drive.google.com/file/d/1ZZn7672YF-KEQ9B7sphik_Dn3O3qLSqI/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default PlacaEnL
