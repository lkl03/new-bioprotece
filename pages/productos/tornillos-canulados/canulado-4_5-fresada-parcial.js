import React, { useState, useEffect } from 'react'
import {
    TitleItem,
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
            <div className='itemS'>
                <TitleItem className="title-item">{titulo}</TitleItem>
                <div className='contentItem'>
                    <div className="contentItem-flex">
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}} id='render'>
                            <div style={{width: '100%', height: '100%'}}>
                                <iframe style={{width: '100%', height: '100%'}} src="/img/productos/tornillos-canulados/Canulado-4.5/Canulado-4.5.html"
                                    allowFullScreen
                                    frameBorder="0"
                                    scrolling="no">
                                </iframe>
                            </div>
                        </div>
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
                                        <td className="text-left code">60-160</td>
                                        <td className="text-left">Ø4.5 largo 12mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-161</td>
                                        <td className="text-left">Ø4.5 largo 14mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-162</td>
                                        <td className="text-left">Ø4.5 largo 16mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-163</td>
                                        <td className="text-left">Ø4.5 largo 18mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-164</td>
                                        <td className="text-left">Ø4.5 largo 20mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-165</td>
                                        <td className="text-left">Ø4.5 largo 22mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-166</td>
                                        <td className="text-left">Ø4.5 largo 24mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-167</td>
                                        <td className="text-left">Ø4.5 largo 26mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-168</td>
                                        <td className="text-left">Ø4.5 largo 28mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-169</td>
                                        <td className="text-left">Ø4.5 largo 30mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-170</td>
                                        <td className="text-left">Ø4.5 largo 32mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-171</td>
                                        <td className="text-left">Ø4.5 largo 34mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-172</td>
                                        <td className="text-left">Ø4.5 largo 36mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-173</td>
                                        <td className="text-left">Ø4.5 largo 38mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-174</td>
                                        <td className="text-left">Ø4.5 largo 40mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-175</td>
                                        <td className="text-left">Ø4.5 largo 42mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-176</td>
                                        <td className="text-left">Ø4.5 largo 44mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-177</td>
                                        <td className="text-left">Ø4.5 largo 46mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-178</td>
                                        <td className="text-left">Ø4.5 largo 48mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-179</td>
                                        <td className="text-left">Ø4.5 largo 50mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-180</td>
                                        <td className="text-left">Ø4.5 largo 55mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-181</td>
                                        <td className="text-left">Ø4.5 largo 60mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-182</td>
                                        <td className="text-left">Ø4.5 largo 65mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">60-183</td>
                                        <td className="text-left">Ø4.5 largo 70mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>
                    </div>
                    <div className="contentItem-last">
                        <Pdf path='https://drive.google.com/file/d/1s2XAuJ_PukBokkztLj3ASJ0U6isWRJoR/view?usp=sharing' />
                    </div>
                </div>

                <ScrollArrow />
            </div>

        </>
    )
}

export default CanuladoFresada