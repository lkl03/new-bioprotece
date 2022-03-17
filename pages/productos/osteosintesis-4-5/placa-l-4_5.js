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

    const titulo = 'Placa en "L" 4.5';
    const img = 'placa-l-4_5';





    return (
        <>
            <Redirecter category="Osteosíntesis 4.5" product="Placa en 'L' 4.5" />
            <NavProd />
            <ItemS>
                <TitleItem className="title-item">{titulo}</TitleItem>
                <ContentItem>
                    <ImageDiv className="image-div">
                        <ItemImg src={`/img/items/osteosintesis4-5/${img}.webp`} alt={`${titulo} Bioprotece`} className="item-img" data-aos="fade-right" />
                    </ImageDiv>
                    <div className="info-div multitables">

                        <details open>
                            <summary className="firstsum">Placa en "L" simple angulación</summary>
                            <table className="tabla-chica mini" data-aos="fade-left">
                                <thead>
                                    <tr>
                                        <th className="text-left">Código der.</th>
                                        <th className="text-left">Código izq.</th>
                                        <th className="text-left">Orificios</th>
                                        <th className="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody className="table-hover">
                                    <tr>
                                        <td className="text-left code">48-274</td>
                                        <td className="text-left code">48-264</td>
                                        <td className="text-left">3</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">48-275</td>
                                        <td className="text-left code">48-265</td>
                                        <td className="text-left">4</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">48-276</td>
                                        <td className="text-left code">48-266</td>
                                        <td className="text-left">5</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">48-277</td>
                                        <td className="text-left code">48-267</td>
                                        <td className="text-left">6</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">48-278</td>
                                        <td className="text-left code">48-268</td>
                                        <td className="text-left">7</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">48-279</td>
                                        <td className="text-left code">48-269</td>
                                        <td className="text-left">8</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">48-280</td>
                                        <td className="text-left code">48-270</td>
                                        <td className="text-left">9</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">48-281</td>
                                        <td className="text-left code">48-271</td>
                                        <td className="text-left">10</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">48-282</td>
                                        <td className="text-left code">48-272</td>
                                        <td className="text-left">11</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">48-283</td>
                                        <td className="text-left code">48-273</td>
                                        <td className="text-left">12</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details>
                            <summary className="firstsum">Placa en "L" doble angulación</summary>
                            <table className="tabla-chica mini" data-aos="fade-left">
                                <thead>
                                    <tr>
                                        <th className="text-left">Código der.</th>
                                        <th className="text-left">Código izq.</th>
                                        <th className="text-left">Orificios</th>
                                        <th className="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody className="table-hover">
                                    <tr>
                                        <td className="text-left code">48-304</td>
                                        <td className="text-left code">48-294</td>
                                        <td className="text-left">3</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">48-305</td>
                                        <td className="text-left code">48-295</td>
                                        <td className="text-left">4</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">48-306</td>
                                        <td className="text-left code">48-296</td>
                                        <td className="text-left">5</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">48-307</td>
                                        <td className="text-left code">48-297</td>
                                        <td className="text-left">6</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">48-309</td>
                                        <td className="text-left code">48-298</td>
                                        <td className="text-left">7</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">48-310</td>
                                        <td className="text-left code">48-299</td>
                                        <td className="text-left">8</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">48-311</td>
                                        <td className="text-left code">48-300</td>
                                        <td className="text-left">9</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">48-312</td>
                                        <td className="text-left code">48-301</td>
                                        <td className="text-left">10</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">48-313</td>
                                        <td className="text-left code">48-302</td>
                                        <td className="text-left">12</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                    </div>
                    <Pdf path='https://drive.google.com/file/d/1zDgPVOhGQeT0jp2YEKlX1ALBP2H26awp/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default PlacaT
