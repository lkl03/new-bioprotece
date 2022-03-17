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

    const titulo = 'Canulado Ø3.5 punta fresada';
    const img = 'canulados-3_5-punta-fresada';

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
            <Redirecter category="Tornillos canulados" product="Tornillo Canulado Ø3.5 punta fresada" />
            <NavProd />
            <ItemS>
                <TitleItem className="title-item">{titulo}</TitleItem>
                <ContentItem>
                    <ImageDiv className="image-div">
                        <ItemImg src={`/img/items/tornillos-canulados/${img}.webp`} alt={`${titulo} Bioprotece`} className="item-img" data-aos="fade-right" />
                    </ImageDiv>
                    <div class="info-div multitables">

                        <details open>
                            <summary class="firstsum">Canulado Ø3.5 rosca parcial</summary>

                            <table class="tabla-chica mini" data-aos="fade-left">
                                <thead>
                                    <tr>
                                        <th class="text-left">Código</th>
                                        <th class="text-left">Longitud</th>
                                        <th class="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody class="table-hover">
                                    <tr>
                                        <td class="text-left code">60-137</td>
                                        <td class="text-left">10mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-138</td>
                                        <td class="text-left">12mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-139</td>
                                        <td class="text-left">14mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-140</td>
                                        <td class="text-left">16mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-141</td>
                                        <td class="text-left">18mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-142</td>
                                        <td class="text-left">20mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-143</td>
                                        <td class="text-left">22mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-144</td>
                                        <td class="text-left">24mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-145</td>
                                        <td class="text-left">26mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-146</td>
                                        <td class="text-left">28mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details>
                            <summary class="firstsum">Canulado Ø3.5 rosca parcial +30mm</summary>

                            <table class="tabla-chica mini" data-aos="fade-left">
                                <thead>
                                    <tr>
                                        <th class="text-left">Código</th>
                                        <th class="text-left">Largo</th>
                                        <th class="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody class="table-hover">
                                    <tr>
                                        <td class="text-left code">60-147</td>
                                        <td class="text-left">30mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-148</td>
                                        <td class="text-left">32mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-149</td>
                                        <td class="text-left">34mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-150</td>
                                        <td class="text-left">36mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-151</td>
                                        <td class="text-left">38mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-152</td>
                                        <td class="text-left">40mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-153</td>
                                        <td class="text-left">42mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-154</td>
                                        <td class="text-left">44mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-257</td>
                                        <td class="text-left">45mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-155</td>
                                        <td class="text-left">46mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-156</td>
                                        <td class="text-left">48mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-157</td>
                                        <td class="text-left">50mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-158</td>
                                        <td class="text-left">55mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-159</td>
                                        <td class="text-left">60mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details>
                            <summary class="firstsum">Canulado Ø3.5 rosca total</summary>

                            <table class="tabla-chica mini" data-aos="fade-left">
                                <thead>
                                    <tr>
                                        <th class="text-left">Código</th>
                                        <th class="text-left">Longitud</th>
                                        <th class="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody class="table-hover">
                                    <tr>
                                        <td class="text-left code">60-354</td>
                                        <td class="text-left">10mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-355</td>
                                        <td class="text-left">12mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-356</td>
                                        <td class="text-left">14mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-357</td>
                                        <td class="text-left">16mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-358</td>
                                        <td class="text-left">18mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-359</td>
                                        <td class="text-left">20mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-360</td>
                                        <td class="text-left">22mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-361</td>
                                        <td class="text-left">24mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-362</td>
                                        <td class="text-left">26mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-363</td>
                                        <td class="text-left">28mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details>
                            <summary class="firstsum">Canulado Ø3.5 rosca total +30mm</summary>

                            <table class="tabla-chica mini" data-aos="fade-left">
                                <thead>
                                    <tr>
                                        <th class="text-left">Código</th>
                                        <th class="text-left">Largo</th>
                                        <th class="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody class="table-hover">
                                    <tr>
                                        <td class="text-left code">60-364</td>
                                        <td class="text-left">30mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-365</td>
                                        <td class="text-left">32mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-366</td>
                                        <td class="text-left">34mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-367</td>
                                        <td class="text-left">36mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-368</td>
                                        <td class="text-left">38mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-369</td>
                                        <td class="text-left">40mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-370</td>
                                        <td class="text-left">42mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-371</td>
                                        <td class="text-left">44mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-378</td>
                                        <td class="text-left">45mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-372</td>
                                        <td class="text-left">46mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-373</td>
                                        <td class="text-left">48mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-374</td>
                                        <td class="text-left">50mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-375</td>
                                        <td class="text-left">55mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-376</td>
                                        <td class="text-left">60mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                    </div>
                    <Pdf path='https://drive.google.com/file/d/1U0QmKmG9uvrzQd5PhXmax8VCjjjt1k1g/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default CanuladoFresada
