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


const Endbotton = () => {

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

    const titulo = 'Clavo de tibia multiacerrojado';
    const img = 'clavo-tibia-multiacerrojado';





    return (
        <>
        <Redirecter category="Clavos endomedulares" product="Clavo de tibia multiacerrojado" />
            <NavProd />
            <ItemS>
                <TitleItem className="title-item">{titulo}</TitleItem>
                <ContentItem>
                    <ImageDiv className="image-div">
                        <ItemImg src={`/img/items/clavos-endomedulares/${img}.webp`} alt={`${titulo} Bioprotece`} className="item-img" data-aos="fade-right" />
                    </ImageDiv>
                    <div className="info-div multitables">
                        <details open>
                            <summary class="firstsum">Clavo de tibia multiacerrojado Ø8</summary>
                            <table class="tabla-chica mini" data-aos="fade-left">
                                <thead>
                                    <tr>
                                        <th class="text-left">Código</th>
                                        <th class="text-left">Medida</th>
                                        <th class="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody class="table-hover">
                                    <tr>
                                        <td class="text-left code">29-145</td>
                                        <td class="text-left">Ø8 x 270mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">29-146</td>
                                        <td class="text-left">Ø8 x 285mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">29-147</td>
                                        <td class="text-left">Ø8 x 300mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">29-148</td>
                                        <td class="text-left">Ø8 x 315mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">29-149</td>
                                        <td class="text-left">Ø8 x 330mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr class="lastr">
                                        <td class="text-left code">29-150</td>
                                        <td class="text-left">Ø8 x 345mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details>
                            <summary>Clavo de tibia multiacerrojado Ø9</summary>
                            <table class="tabla-chica mini" data-aos="fade-left">
                                <thead>
                                    <tr>
                                        <th class="text-left">Código</th>
                                        <th class="text-left">Medida</th>
                                        <th class="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody class="table-hover">
                                    <tr>
                                        <td class="text-left code">29-151</td>
                                        <td class="text-left">Ø9 x 270mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">29-152</td>
                                        <td class="text-left">Ø9 x 285mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">29-153</td>
                                        <td class="text-left">Ø9 x 300mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">29-154</td>
                                        <td class="text-left">Ø9 x 315mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">29-155</td>
                                        <td class="text-left">Ø9 x 330mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr class="lastr">
                                        <td class="text-left code">29-156</td>
                                        <td class="text-left">Ø9 x 345mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details>
                            <summary>Clavo de tibia multiacerrojado Ø10</summary>
                            <table class="tabla-chica mini" data-aos="fade-left">
                                <thead>
                                    <tr>
                                        <th class="text-left">Código</th>
                                        <th class="text-left">Medida</th>
                                        <th class="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody class="table-hover">
                                    <tr>
                                        <td class="text-left code">29-157</td>
                                        <td class="text-left">Ø10 x 270mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">29-158</td>
                                        <td class="text-left">Ø10 x 285mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">29-159</td>
                                        <td class="text-left">Ø10 x 300mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">29-160</td>
                                        <td class="text-left">Ø10 x 315mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">29-161</td>
                                        <td class="text-left">Ø10 x 330mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr class="lastr">
                                        <td class="text-left code">29-162</td>
                                        <td class="text-left">Ø10 x 345mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details>
                            <summary>Clavo de tibia multiacerrojado Ø11</summary>
                            <table class="tabla-chica mini" data-aos="fade-left">
                                <thead>
                                    <tr>
                                        <th class="text-left">Código</th>
                                        <th class="text-left">Medida</th>
                                        <th class="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody class="table-hover">
                                    <tr>
                                        <td class="text-left code">29-163</td>
                                        <td class="text-left">Ø11 x 270mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">29-164</td>
                                        <td class="text-left">Ø11 x 285mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">29-165</td>
                                        <td class="text-left">Ø11 x 300mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">29-166</td>
                                        <td class="text-left">Ø11 x 315mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">29-167</td>
                                        <td class="text-left">Ø11 x 330mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr class="lastr">
                                        <td class="text-left code">29-168</td>
                                        <td class="text-left">Ø11 x 345mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr class="lastr">
                                        <td class="text-left code">29-169</td>
                                        <td class="text-left">Ø11 x 360mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr class="lastr">
                                        <td class="text-left code">29-170</td>
                                        <td class="text-left">Ø11 x 375mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr class="lastr">
                                        <td class="text-left code">29-171</td>
                                        <td class="text-left">Ø11 x 390mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                    </div>

                    <Pdf path='https://drive.google.com/file/d/1lUHxh5BN_OQqxRGHZ_YLxsIwBibFr-3H/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default Endbotton
