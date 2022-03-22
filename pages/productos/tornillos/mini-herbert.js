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


const Herbert = () => {
    
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

    const titulo = 'Tornillo mini Herbert Ø2.0 y Ø2.5';
    const img = 'mini-herbert';


    return (
        <>
            <Redirecter category="Tornillos" product="Tornillo mini Herbert Ø2.0 y Ø2.5" />
            <NavProd /> 
            <ItemS>
                <TitleItem className="title-item">{titulo}</TitleItem>
                <ContentItem>
                    <ImageDiv className="image-div">
                        <ItemImg src={`/img/items/tornillos/${img}.webp`} alt={`${titulo} Bioprotece`} className="item-img" data-aos="fade-right" />
                    </ImageDiv>
                    <div className="info-div multitables">

                        <details open>
                            <summary className="firstsum">Tornillo Mini Herbert Ø2.0</summary>

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
                                        <td className="text-left code">62-070</td>
                                        <td className="text-left">10</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">62-071</td>
                                        <td className="text-left">12</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">62-072</td>
                                        <td className="text-left">14</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">62-073</td>
                                        <td className="text-left">16</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">62-074</td>
                                        <td className="text-left">18</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">62-075</td>
                                        <td className="text-left">20</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">62-076</td>
                                        <td className="text-left">22</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">62-077</td>
                                        <td className="text-left">24</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">62-078</td>
                                        <td className="text-left">26</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">62-079</td>
                                        <td className="text-left">28</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">62-080</td>
                                        <td className="text-left">30</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details>
                            <summary className="firstsum">Tornillo Mini Herbert Ø2.5</summary>

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
                                        <td className="text-left code">62-171</td>
                                        <td className="text-left">10</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">62-172</td>
                                        <td className="text-left">12</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">62-173</td>
                                        <td className="text-left">14</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">62-174</td>
                                        <td className="text-left">16</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">62-175</td>
                                        <td className="text-left">18</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">62-176</td>
                                        <td className="text-left">20</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">62-177</td>
                                        <td className="text-left">22</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">62-178</td>
                                        <td className="text-left">24</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">62-179</td>
                                        <td className="text-left">26</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">62-180</td>
                                        <td className="text-left">28</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">62-181</td>
                                        <td className="text-left">30</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>
                    </div>
                    <Pdf path='https://drive.google.com/file/d/1FJf5mgAy4yjjD6B0sU4Ib6x21pCXdW2i/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default Herbert
