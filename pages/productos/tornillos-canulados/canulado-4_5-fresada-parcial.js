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

    const titulo = 'Tornillo canulado Ø4.5 punta fresada rosca parcial';
    const img = 'canulados-4_5-punta-fresada';

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
            <Redirecter category="Tornillos canulados" product="Tornillo Canulado Ø4.5 punta fresada" />
            <NavProd />
            <ItemS>
                <TitleItem className="title-item">{titulo}</TitleItem>
                <ContentItem>
                    <ImageDiv className="image-div">
                        <ItemImg src={`/img/items/tornillos-canulados/${img}.webp`} alt={`${titulo} Bioprotece`} className="item-img" data-aos="fade-right" />
                    </ImageDiv>
                    <div class="info-div">

                        <table class="tabla-chica" data-aos="fade-left">
                            <thead>
                                <tr>
                                    <th class="text-left">Cod</th>
                                    <th class="text-left">Descripción</th>
                                    <th class="text-left">Material</th>
                                </tr>
                            </thead>
                            <tbody class="table-hover">
                                <tr>
                                    <td class="text-left code">60-160</td>
                                    <td class="text-left">Ø4.5 largo 12mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">60-161</td>
                                    <td class="text-left">Ø4.5 largo 14mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">60-162</td>
                                    <td class="text-left">Ø4.5 largo 16mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">60-163</td>
                                    <td class="text-left">Ø4.5 largo 18mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">60-164</td>
                                    <td class="text-left">Ø4.5 largo 20mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">60-165</td>
                                    <td class="text-left">Ø4.5 largo 22mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">60-166</td>
                                    <td class="text-left">Ø4.5 largo 24mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">60-167</td>
                                    <td class="text-left">Ø4.5 largo 26mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">60-168</td>
                                    <td class="text-left">Ø4.5 largo 28mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">60-169</td>
                                    <td class="text-left">Ø4.5 largo 30mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">60-170</td>
                                    <td class="text-left">Ø4.5 largo 32mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">60-171</td>
                                    <td class="text-left">Ø4.5 largo 34mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">60-172</td>
                                    <td class="text-left">Ø4.5 largo 36mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">60-173</td>
                                    <td class="text-left">Ø4.5 largo 38mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">60-174</td>
                                    <td class="text-left">Ø4.5 largo 40mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">60-175</td>
                                    <td class="text-left">Ø4.5 largo 42mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">60-176</td>
                                    <td class="text-left">Ø4.5 largo 44mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">60-177</td>
                                    <td class="text-left">Ø4.5 largo 46mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">60-178</td>
                                    <td class="text-left">Ø4.5 largo 48mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">60-179</td>
                                    <td class="text-left">Ø4.5 largo 50mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">60-180</td>
                                    <td class="text-left">Ø4.5 largo 55mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">60-181</td>
                                    <td class="text-left">Ø4.5 largo 60mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">60-182</td>
                                    <td class="text-left">Ø4.5 largo 65mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">60-183</td>
                                    <td class="text-left">Ø4.5 largo 70mm</td>
                                    <td class="text-left">Titanio</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                    <Pdf path='https://drive.google.com/file/d/1s2XAuJ_PukBokkztLj3ASJ0U6isWRJoR/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default CanuladoFresada