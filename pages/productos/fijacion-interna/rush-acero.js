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

    const titulo = 'Clavo rush acero';
    const img = 'clavo-rush';





    return (
        <>
            <Redirecter category="Fijación interna" product="Clavo rush" />
            <NavProd />
            <ItemS>
                <TitleItem className="title-item">{titulo}</TitleItem>
                <ContentItem>
                    <ImageDiv className="image-div">
                        <ItemImg src={`/img/items/fijacion-interna/${img}.webp`} alt={`${titulo} Bioprotece`} className="item-img" data-aos="fade-right" />
                    </ImageDiv>
                    <div class="info-div multitables">

                        <details open>
                            <summary class="firstsum">Rush Ø2.0 Ø2.5</summary>

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
                                        <td class="text-left code">33-001</td>
                                        <td class="text-left">Ø2.0 largo 180mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-002</td>
                                        <td class="text-left">Ø2.0 largo 200mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-003</td>
                                        <td class="text-left">Ø2.0 largo 220mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-004</td>
                                        <td class="text-left">Ø2.0 largo 250mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-005</td>
                                        <td class="text-left">Ø2.5 largo 100mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-006</td>
                                        <td class="text-left">Ø2.5 largo 110mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-007</td>
                                        <td class="text-left">Ø2.5 largo 120mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-008</td>
                                        <td class="text-left">Ø2.5 largo 130mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-009</td>
                                        <td class="text-left">Ø2.5 largo 140mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-010</td>
                                        <td class="text-left">Ø2.5 largo 150mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-011</td>
                                        <td class="text-left">Ø2.5 largo 160mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-012</td>
                                        <td class="text-left">Ø2.5 largo 170mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-013</td>
                                        <td class="text-left">Ø2.5 largo 180mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-014</td>
                                        <td class="text-left">Ø2.5 largo 190mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-015</td>
                                        <td class="text-left">Ø2.5 largo 200mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-016</td>
                                        <td class="text-left">Ø2.5 largo 210mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-017</td>
                                        <td class="text-left">Ø2.5 largo 220mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-018</td>
                                        <td class="text-left">Ø2.5 largo 230mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-019</td>
                                        <td class="text-left">Ø2.5 largo 240mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-020</td>
                                        <td class="text-left">Ø2.5 largo 250mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details>
                            <summary class="firstsum">Rush Ø3.0</summary>

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
                                        <td class="text-left code">33-021</td>
                                        <td class="text-left">Ø3.0 largo 100mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-022</td>
                                        <td class="text-left">Ø3.0 largo 110mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-023</td>
                                        <td class="text-left">Ø3.0 largo 120mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-024</td>
                                        <td class="text-left">Ø3.0 largo 130mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-025</td>
                                        <td class="text-left">Ø3.0 largo 140mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-026</td>
                                        <td class="text-left">Ø3.0 largo 150mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-027</td>
                                        <td class="text-left">Ø3.0 largo 160mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-028</td>
                                        <td class="text-left">Ø3.0 largo 170mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-029</td>
                                        <td class="text-left">Ø3.0 largo 180mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-030</td>
                                        <td class="text-left">Ø3.0 largo 190mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-031</td>
                                        <td class="text-left">Ø3.0 largo 200mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-032</td>
                                        <td class="text-left">Ø3.0 largo 210mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-033</td>
                                        <td class="text-left">Ø3.0 largo 220mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-034</td>
                                        <td class="text-left">Ø3.0 largo 230mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-035</td>
                                        <td class="text-left">Ø3.0 largo 240mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-036</td>
                                        <td class="text-left">Ø3.0 largo 250mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>

                                    
                                </tbody>
                            </table>
                        </details>
                        
                        <details>
                            <summary class="firstsum">Rush Ø3.5</summary>

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
                                        <td class="text-left code">33-037</td>
                                        <td class="text-left">Ø3.5 largo 100mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-038</td>
                                        <td class="text-left">Ø3.5 largo 110mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-039</td>
                                        <td class="text-left">Ø3.5 largo 120mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-040</td>
                                        <td class="text-left">Ø3.5 largo 130mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-041</td>
                                        <td class="text-left">Ø3.5 largo 140mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-042</td>
                                        <td class="text-left">Ø3.5 largo 150mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-043</td>
                                        <td class="text-left">Ø3.5 largo 160mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-044</td>
                                        <td class="text-left">Ø3.5 largo 170mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-045</td>
                                        <td class="text-left">Ø3.5 largo 180mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-046</td>
                                        <td class="text-left">Ø3.5 largo 190mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-047</td>
                                        <td class="text-left">Ø3.5 largo 200mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-048</td>
                                        <td class="text-left">Ø3.5 largo 210mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-049</td>
                                        <td class="text-left">Ø3.5 largo 220mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-050</td>
                                        <td class="text-left">Ø3.5 largo 230mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-051</td>
                                        <td class="text-left">Ø3.5 largo 240mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-052</td>
                                        <td class="text-left">Ø3.5 largo 250mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>                                   
                                </tbody>
                            </table>
                        </details>

                        <details>
                            <summary class="firstsum">Rush Ø4.0</summary>

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
                                        <td class="text-left code">33-053</td>
                                        <td class="text-left">Ø4.0 largo 100mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-054</td>
                                        <td class="text-left">Ø4.0 largo 110mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-055</td>
                                        <td class="text-left">Ø4.0 largo 120mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-056</td>
                                        <td class="text-left">Ø4.0 largo 130mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-057</td>
                                        <td class="text-left">Ø4.0 largo 140mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-058</td>
                                        <td class="text-left">Ø4.0 largo 150mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-059</td>
                                        <td class="text-left">Ø4.0 largo 160mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-060</td>
                                        <td class="text-left">Ø4.0 largo 170mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-061</td>
                                        <td class="text-left">Ø4.0 largo 180mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-062</td>
                                        <td class="text-left">Ø4.0 largo 190mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-063</td>
                                        <td class="text-left">Ø4.0 largo 200mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-064</td>
                                        <td class="text-left">Ø4.0 largo 210mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-065</td>
                                        <td class="text-left">Ø4.0 largo 220mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-066</td>
                                        <td class="text-left">Ø4.0 largo 230mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-067</td>
                                        <td class="text-left">Ø4.0 largo 240mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">33-068</td>
                                        <td class="text-left">Ø4.0 largo 250mm</td>
                                        <td class="text-left">Acero</td>
                                    </tr>                                   
                                </tbody>
                            </table>
                        </details>
                    </div>
                    <Pdf path='https://drive.google.com/file/d/1Afh03s-mPvAtEGNRkRpOdFzBy85me0QA/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default Detensor
