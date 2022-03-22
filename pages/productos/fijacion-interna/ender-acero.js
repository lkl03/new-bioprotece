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
                    <div class="info-div multitables">

                        <details open>
                            <summary class="firstsum">Ender Ø3.5</summary>

                            <table class="tabla-chica mini">
                                <thead>
                                    <tr>
                                        <th class="text-left">Código</th>
                                        <th class="text-left">Descripción </th>
                                        <th class="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody class="table-hover">
                                    <tr>
                                        <td class="text-left code">32-001</td>
                                        <td class="text-left">Ø3.5 largo 180mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-002</td>
                                        <td class="text-left">Ø3.5 largo 190mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-003</td>
                                        <td class="text-left">Ø3.5 largo 200mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-004</td>
                                        <td class="text-left">Ø3.5 largo 210mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-005</td>
                                        <td class="text-left">Ø3.5 largo 220mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-006</td>
                                        <td class="text-left">Ø3.5 largo 230mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-007</td>
                                        <td class="text-left">Ø3.5 largo 240mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-008</td>
                                        <td class="text-left">Ø3.5 largo 250mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-009</td>
                                        <td class="text-left">Ø3.5 largo 260mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-010</td>
                                        <td class="text-left">Ø3.5 largo 270mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-011</td>
                                        <td class="text-left">Ø3.5 largo 280mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-012</td>
                                        <td class="text-left">Ø3.5 largo 290mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-013</td>
                                        <td class="text-left">Ø3.5 largo 300mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-014</td>
                                        <td class="text-left">Ø3.5 largo 310mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-015</td>
                                        <td class="text-left">Ø3.5 largo 320mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details>
                            <summary class="firstsum">Ender Ø4.0</summary>

                            <table class="tabla-chica mini">
                                <thead>
                                    <tr>
                                        <th class="text-left">Código</th>
                                        <th class="text-left">Descripción </th>
                                        <th class="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody class="table-hover">
                                    <tr>
                                        <td class="text-left code">32-016</td>
                                        <td class="text-left">Ø4.0 largo 220mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-017</td>
                                        <td class="text-left">Ø4.0 largo 230mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-018</td>
                                        <td class="text-left">Ø4.0 largo 240mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-019</td>
                                        <td class="text-left">Ø4.0 largo 250mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-020</td>
                                        <td class="text-left">Ø4.0 largo 260mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-021</td>
                                        <td class="text-left">Ø4.0 largo 270mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-022</td>
                                        <td class="text-left">Ø4.0 largo 280mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-023</td>
                                        <td class="text-left">Ø4.0 largo 290mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-024</td>
                                        <td class="text-left">Ø4.0 largo 300mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-025</td>
                                        <td class="text-left">Ø4.0 largo 310mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-026</td>
                                        <td class="text-left">Ø4.0 largo 320mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-027</td>
                                        <td class="text-left">Ø4.0 largo 330mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-028</td>
                                        <td class="text-left">Ø4.0 largo 340mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-029</td>
                                        <td class="text-left">Ø4.0 largo 350mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-030</td>
                                        <td class="text-left">Ø4.0 largo 360mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details>
                            <summary class="firstsum">Ender Ø4.5</summary>

                            <table class="tabla-chica mini">
                                <thead>
                                    <tr>
                                        <th class="text-left">Código</th>
                                        <th class="text-left">Descripción </th>
                                        <th class="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody class="table-hover">
                                    <tr>
                                        <td class="text-left code">32-031</td>
                                        <td class="text-left">Ø4.5 largo 170mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-032</td>
                                        <td class="text-left">Ø4.5 largo 180mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-033</td>
                                        <td class="text-left">Ø4.5 largo 190mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-034</td>
                                        <td class="text-left">Ø4.5 largo 200mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-035</td>
                                        <td class="text-left">Ø4.5 largo 210mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-036</td>
                                        <td class="text-left">Ø4.5 largo 220mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-037</td>
                                        <td class="text-left">Ø4.5 largo 230mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-038</td>
                                        <td class="text-left">Ø4.5 largo 240mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-039</td>
                                        <td class="text-left">Ø4.5 largo 250mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-040</td>
                                        <td class="text-left">Ø4.5 largo 260mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-041</td>
                                        <td class="text-left">Ø4.5 largo 270mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-042</td>
                                        <td class="text-left">Ø4.5 largo 280mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-043</td>
                                        <td class="text-left">Ø4.5 largo 290mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-044</td>
                                        <td class="text-left">Ø4.5 largo 300mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-045</td>
                                        <td class="text-left">Ø4.5 largo 310mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-046</td>
                                        <td class="text-left">Ø4.5 largo 320mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-047</td>
                                        <td class="text-left">Ø4.5 largo 330mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-048</td>
                                        <td class="text-left">Ø4.5 largo 340mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-049</td>
                                        <td class="text-left">Ø4.5 largo 350mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-050</td>
                                        <td class="text-left">Ø4.5 largo 360mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-051</td>
                                        <td class="text-left">Ø4.5 largo 370mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-052</td>
                                        <td class="text-left">Ø4.5 largo 380mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-053</td>
                                        <td class="text-left">Ø4.5 largo 390mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>
                        <details>
                            <summary class="firstsum">Ender Ø4.5 +400mm</summary>

                            <table class="tabla-chica mini">
                                <thead>
                                    <tr>
                                        <th class="text-left">Código</th>
                                        <th class="text-left">Descripción </th>
                                        <th class="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody class="table-hover">
                                    <tr>
                                        <td class="text-left code">32-054</td>
                                        <td class="text-left">Ø4.5 largo 400mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-055</td>
                                        <td class="text-left">Ø4.5 largo 410mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-056</td>
                                        <td class="text-left">Ø4.5 largo 420mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-057</td>
                                        <td class="text-left">Ø4.5 largo 430mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-058</td>
                                        <td class="text-left">Ø4.5 largo 440mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-059</td>
                                        <td class="text-left">Ø4.5 largo 450mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-060</td>
                                        <td class="text-left">Ø4.5 largo 460mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-061</td>
                                        <td class="text-left">Ø4.5 largo 470mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-062</td>
                                        <td class="text-left">Ø4.5 largo 480mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-063</td>
                                        <td class="text-left">Ø4.5 largo 490mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-064</td>
                                        <td class="text-left">Ø4.5 largo 500mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-065</td>
                                        <td class="text-left">Ø4.5 largo 510mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-066</td>
                                        <td class="text-left">Ø4.5 largo 520mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-067</td>
                                        <td class="text-left">Ø4.5 largo 530mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-068</td>
                                        <td class="text-left">Ø4.5 largo 540mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">32-069</td>
                                        <td class="text-left">Ø4.5 largo 550mm</td>
                                        <td class="text-left">Acero</td>
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
