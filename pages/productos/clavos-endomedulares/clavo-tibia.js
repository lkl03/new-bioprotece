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


const ClavoTibia = () => {

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

    const titulo = 'Clavo de tibia';
    const img = 'clavo-tibia';





    return (
        <>
            <Redirecter category="Clavos endomedulares" product="Clavo de tibia" />
            <NavProd />
            <ItemS>
                <TitleItem className="title-item">{titulo}</TitleItem>
                <ContentItem>
                    <ImageDiv className="image-div">
                        <ItemImg src={`/img/items/clavos-endomedulares/${img}.webp`} alt={`${titulo} Bioprotece`} className="item-img" data-aos="fade-right" />
                    </ImageDiv>
                    <div className="info-div multitables">

                        <details open>
                            <summary className="firstsum">Clavo de tibia Ø8</summary>
                            <table className="tabla-chica mini">
                                <thead>
                                    <tr>
                                        <th className="text-left">Código</th>
                                        <th className="text-left">Medida</th>
                                        <th className="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody className="table-hover">
                                    <tr>
                                        <td className="text-left code">29-061</td>
                                        <td className="text-left">Ø8 x 270mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">29-062</td>
                                        <td className="text-left">Ø8 x 285mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">29-063</td>
                                        <td className="text-left">Ø8 x 300mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">29-064</td>
                                        <td className="text-left">Ø8 x 315mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">29-065</td>
                                        <td className="text-left">Ø8 x 330mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">29-066</td>
                                        <td className="text-left">Ø8 x 345mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>

                                    <tr className="lastr">
                                        <td className="text-left code">29-066</td>
                                        <td className="text-left">Ø8 x 360mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details>
                            <summary>Clavo de tibia Ø9</summary>
                            <table className="tabla-chica mini">
                                <thead>
                                    <tr>
                                        <th className="text-left">Código</th>
                                        <th className="text-left">Medida</th>
                                        <th className="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody className="table-hover">
                                    <tr>
                                        <td className="text-left code">29-068</td>
                                        <td className="text-left">Ø9 x 270mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">29-069</td>
                                        <td className="text-left">Ø9 x 285mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">29-070</td>
                                        <td className="text-left">Ø9 x 300mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">29-071</td>
                                        <td className="text-left">Ø9 x 315mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">29-072</td>
                                        <td className="text-left">Ø9 x 330mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">29-073</td>
                                        <td className="text-left">Ø9 x 345mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">29-181</td>
                                        <td className="text-left">Ø9 x 360mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details>
                            <summary>Clavo de tibia Ø10</summary>
                            <table className="tabla-chica mini">
                                <thead>
                                    <tr>
                                        <th className="text-left">Código</th>
                                        <th className="text-left">Medida</th>
                                        <th className="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody className="table-hover">
                                    <tr>
                                        <td className="text-left code">29-183</td>
                                        <td className="text-left">Ø10 x 270mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">29-074</td>
                                        <td className="text-left">Ø10 x 285mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">29-075</td>
                                        <td className="text-left">Ø10 x 300mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">29-076</td>
                                        <td className="text-left">Ø10 x 315mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">29-077</td>
                                        <td className="text-left">Ø10 x 330mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">29-078</td>
                                        <td className="text-left">Ø10 x 345mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">29-079</td>
                                        <td className="text-left">Ø10 x 360mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">29-184</td>
                                        <td className="text-left">Ø10 x 375mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details>
                            <summary>Clavo de tibia Ø11</summary>
                            <table className="tabla-chica mini">
                                <thead>
                                    <tr>
                                        <th className="text-left">Código</th>
                                        <th className="text-left">Medida</th>
                                        <th className="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody className="table-hover">
                                    <tr>
                                        <td className="text-left code">29-185</td>
                                        <td className="text-left">Ø11 x 270mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">29-080</td>
                                        <td className="text-left">Ø11 x 285mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">29-081</td>
                                        <td className="text-left">Ø11 x 300mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">29-082</td>
                                        <td className="text-left">Ø11 x 315mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">29-083</td>
                                        <td className="text-left">Ø11 x 330mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">29-084</td>
                                        <td className="text-left">Ø11 x 345mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">29-186</td>
                                        <td className="text-left">Ø11 x 360mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">29-187</td>
                                        <td className="text-left">Ø11 x 375mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details>
                            <summary>Clavo de tibia Ø12</summary>
                            <table className="tabla-chica mini">
                                <thead>
                                    <tr>
                                        <th className="text-left">Código</th>
                                        <th className="text-left">Medida</th>
                                        <th className="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody className="table-hover">
                                    <tr>
                                        <td className="text-left code">29-188</td>
                                        <td className="text-left">Ø12 x 270mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">29-189</td>
                                        <td className="text-left">Ø12 x 285mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">29-190</td>
                                        <td className="text-left">Ø12 x 300mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">29-195</td>
                                        <td className="text-left">Ø12 x 315mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">29-196</td>
                                        <td className="text-left">Ø12 x 330mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">29-197</td>
                                        <td className="text-left">Ø12 x 345mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">29-198</td>
                                        <td className="text-left">Ø12 x 360mm</td>
                                        <td className="text-left">Titanio</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">29-199</td>
                                        <td className="text-left">Ø12 x 375mm</td>
                                        <td className="text-left">Titanio</td>
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

export default ClavoTibia
