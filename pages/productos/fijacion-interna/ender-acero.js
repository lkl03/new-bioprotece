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

const Detensor = () => {

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

    const titulo = 'Clavo ender acero';
    const img = 'clavo-ender';





    return (
        <>
            <Redirecter category="Fijación interna" product="Clavo ender" />
            <NavProd />
            <ItemS>
                <TitleItem className="title-item">{titulo}</TitleItem>
                <ContentItem>
                    <ImageDiv className="image-div">
                        <ItemImg src={`/img/items/fijacion-interna/${img}.webp`} alt={`${titulo} Bioprotece`} className="item-img" data-aos="fade-right" />
                    </ImageDiv>
                    <div className="info-div multitables">

                        <details open>
                            <summary className="firstsum">Ender Ø3.5</summary>

                            <table className="tabla-chica mini">
                                <thead>
                                    <tr>
                                        <th className="text-left">Código</th>
                                        <th className="text-left">Descripción </th>
                                        <th className="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody className="table-hover">
                                    <tr>
                                        <td className="text-left code">32-001</td>
                                        <td className="text-left">Ø3.5 largo 180mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-002</td>
                                        <td className="text-left">Ø3.5 largo 190mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-003</td>
                                        <td className="text-left">Ø3.5 largo 200mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-004</td>
                                        <td className="text-left">Ø3.5 largo 210mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-005</td>
                                        <td className="text-left">Ø3.5 largo 220mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-006</td>
                                        <td className="text-left">Ø3.5 largo 230mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-007</td>
                                        <td className="text-left">Ø3.5 largo 240mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-008</td>
                                        <td className="text-left">Ø3.5 largo 250mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-009</td>
                                        <td className="text-left">Ø3.5 largo 260mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-010</td>
                                        <td className="text-left">Ø3.5 largo 270mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-011</td>
                                        <td className="text-left">Ø3.5 largo 280mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-012</td>
                                        <td className="text-left">Ø3.5 largo 290mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-013</td>
                                        <td className="text-left">Ø3.5 largo 300mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-014</td>
                                        <td className="text-left">Ø3.5 largo 310mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-015</td>
                                        <td className="text-left">Ø3.5 largo 320mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details>
                            <summary className="firstsum">Ender Ø4.0</summary>

                            <table className="tabla-chica mini">
                                <thead>
                                    <tr>
                                        <th className="text-left">Código</th>
                                        <th className="text-left">Descripción </th>
                                        <th className="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody className="table-hover">
                                    <tr>
                                        <td className="text-left code">32-016</td>
                                        <td className="text-left">Ø4.0 largo 220mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-017</td>
                                        <td className="text-left">Ø4.0 largo 230mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-018</td>
                                        <td className="text-left">Ø4.0 largo 240mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-019</td>
                                        <td className="text-left">Ø4.0 largo 250mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-020</td>
                                        <td className="text-left">Ø4.0 largo 260mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-021</td>
                                        <td className="text-left">Ø4.0 largo 270mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-022</td>
                                        <td className="text-left">Ø4.0 largo 280mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-023</td>
                                        <td className="text-left">Ø4.0 largo 290mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-024</td>
                                        <td className="text-left">Ø4.0 largo 300mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-025</td>
                                        <td className="text-left">Ø4.0 largo 310mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-026</td>
                                        <td className="text-left">Ø4.0 largo 320mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-027</td>
                                        <td className="text-left">Ø4.0 largo 330mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-028</td>
                                        <td className="text-left">Ø4.0 largo 340mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-029</td>
                                        <td className="text-left">Ø4.0 largo 350mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-030</td>
                                        <td className="text-left">Ø4.0 largo 360mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details>
                            <summary className="firstsum">Ender Ø4.5</summary>

                            <table className="tabla-chica mini">
                                <thead>
                                    <tr>
                                        <th className="text-left">Código</th>
                                        <th className="text-left">Descripción </th>
                                        <th className="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody className="table-hover">
                                    <tr>
                                        <td className="text-left code">32-031</td>
                                        <td className="text-left">Ø4.5 largo 170mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-032</td>
                                        <td className="text-left">Ø4.5 largo 180mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-033</td>
                                        <td className="text-left">Ø4.5 largo 190mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-034</td>
                                        <td className="text-left">Ø4.5 largo 200mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-035</td>
                                        <td className="text-left">Ø4.5 largo 210mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-036</td>
                                        <td className="text-left">Ø4.5 largo 220mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-037</td>
                                        <td className="text-left">Ø4.5 largo 230mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-038</td>
                                        <td className="text-left">Ø4.5 largo 240mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-039</td>
                                        <td className="text-left">Ø4.5 largo 250mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-040</td>
                                        <td className="text-left">Ø4.5 largo 260mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-041</td>
                                        <td className="text-left">Ø4.5 largo 270mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-042</td>
                                        <td className="text-left">Ø4.5 largo 280mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-043</td>
                                        <td className="text-left">Ø4.5 largo 290mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-044</td>
                                        <td className="text-left">Ø4.5 largo 300mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-045</td>
                                        <td className="text-left">Ø4.5 largo 310mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-046</td>
                                        <td className="text-left">Ø4.5 largo 320mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-047</td>
                                        <td className="text-left">Ø4.5 largo 330mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-048</td>
                                        <td className="text-left">Ø4.5 largo 340mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-049</td>
                                        <td className="text-left">Ø4.5 largo 350mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-050</td>
                                        <td className="text-left">Ø4.5 largo 360mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-051</td>
                                        <td className="text-left">Ø4.5 largo 370mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-052</td>
                                        <td className="text-left">Ø4.5 largo 380mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-053</td>
                                        <td className="text-left">Ø4.5 largo 390mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>
                        <details>
                            <summary className="firstsum">Ender Ø4.5 +400mm</summary>

                            <table className="tabla-chica mini">
                                <thead>
                                    <tr>
                                        <th className="text-left">Código</th>
                                        <th className="text-left">Descripción </th>
                                        <th className="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody className="table-hover">
                                    <tr>
                                        <td className="text-left code">32-054</td>
                                        <td className="text-left">Ø4.5 largo 400mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-055</td>
                                        <td className="text-left">Ø4.5 largo 410mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-056</td>
                                        <td className="text-left">Ø4.5 largo 420mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-057</td>
                                        <td className="text-left">Ø4.5 largo 430mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-058</td>
                                        <td className="text-left">Ø4.5 largo 440mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-059</td>
                                        <td className="text-left">Ø4.5 largo 450mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-060</td>
                                        <td className="text-left">Ø4.5 largo 460mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-061</td>
                                        <td className="text-left">Ø4.5 largo 470mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-062</td>
                                        <td className="text-left">Ø4.5 largo 480mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-063</td>
                                        <td className="text-left">Ø4.5 largo 490mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-064</td>
                                        <td className="text-left">Ø4.5 largo 500mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-065</td>
                                        <td className="text-left">Ø4.5 largo 510mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-066</td>
                                        <td className="text-left">Ø4.5 largo 520mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-067</td>
                                        <td className="text-left">Ø4.5 largo 530mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-068</td>
                                        <td className="text-left">Ø4.5 largo 540mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">32-069</td>
                                        <td className="text-left">Ø4.5 largo 550mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                </tbody>
                            </table>
                        </details>
                    </div>
                    <Pdf path='https://drive.google.com/file/d/1Dl1H34PjG5zS_6s9Gsr2mQp3KXRxov_q/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default Detensor
