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


const Herbert = () => {

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
                    <div class="info-div multitables">

                        <details open>
                            <summary class="firstsum">Tornillo Mini Herbert Ø2.0</summary>

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
                                        <td class="text-left code">62-070</td>
                                        <td class="text-left">10</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">62-071</td>
                                        <td class="text-left">12</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">62-072</td>
                                        <td class="text-left">14</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">62-073</td>
                                        <td class="text-left">16</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">62-074</td>
                                        <td class="text-left">18</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">62-075</td>
                                        <td class="text-left">20</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">62-076</td>
                                        <td class="text-left">22</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">62-077</td>
                                        <td class="text-left">24</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">62-078</td>
                                        <td class="text-left">26</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">62-079</td>
                                        <td class="text-left">28</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">62-080</td>
                                        <td class="text-left">30</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details>
                            <summary class="firstsum">Tornillo Mini Herbert Ø2.5</summary>

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
                                        <td class="text-left code">62-171</td>
                                        <td class="text-left">10</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">62-172</td>
                                        <td class="text-left">12</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">62-173</td>
                                        <td class="text-left">14</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">62-174</td>
                                        <td class="text-left">16</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">62-175</td>
                                        <td class="text-left">18</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">62-176</td>
                                        <td class="text-left">20</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">62-177</td>
                                        <td class="text-left">22</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">62-178</td>
                                        <td class="text-left">24</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">62-179</td>
                                        <td class="text-left">26</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">62-180</td>
                                        <td class="text-left">28</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">62-181</td>
                                        <td class="text-left">30</td>
                                        <td class="text-left">Titanio</td>
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
