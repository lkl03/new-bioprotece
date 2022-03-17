import React, {useEffect} from 'react'
import {
    ItemS,
    TitleItem,
    ContentItem,
    ItemImg,
    ImageDiv,
} from '../../../styles/StyledItems'
import ScrollArrow from '../../../components/Generales/ScrollArrow'
import Pdf from '/components/Generales/pdf'
import NavProd from '../../../components/Navbar/NavProd'
import Redirecter from '../../../components/Redirecter'
import Caja from '../../../components/Generales/Caja'


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

    const titulo = 'Endobotton'
    const img = 'endobotton'

    return (
        <>
            <Redirecter category="Artroscopía" product="Endobotton" />
            <NavProd />
            <ItemS>
                <TitleItem className="title-item">{titulo}</TitleItem>
                <ContentItem>
                    <ImageDiv className="image-div">
                        <ItemImg src={`/img/items/artroscopia/${img}.webp`} alt={`${titulo} Bioprotece`} className="item-img" data-aos="fade-right" />
                    </ImageDiv>
                    <div className="info-div">
                        <table className="tabla-chica" data-aos="fade-left">
                            <thead>
                                <tr>
                                    <th className="text-left">Cod</th>
                                    <th className="text-left">Medida</th>
                                    <th className="text-left">Material</th>
                                </tr>
                            </thead>
                            <tbody className="table-hover">
                                <tr>
                                    <td className="text-left code">65-037</td>
                                    <td className="text-left">10mm</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">65-038</td>
                                    <td className="text-left">15mm</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">65-039</td>
                                    <td className="text-left">20mm</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">65-040</td>
                                    <td className="text-left">25mm</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">65-041</td>
                                    <td className="text-left">30mm</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr className="lastr">
                                    <td className="text-left code">65-042</td>
                                    <td className="text-left">35mm</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr className="lastr">
                                    <td className="text-left code">65-043</td>
                                    <td className="text-left">Sindesmosis</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr className="lastr">
                                    <td className="text-left code">65-044</td>
                                    <td className="text-left">Regulable Izado sup</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr className="lastr">
                                    <td className="text-left code">65-045</td>
                                    <td className="text-left">Autoajustable Izado inf</td>
                                    <td className="text-left">Titanio</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                    <Pdf path='https://drive.google.com/file/d/1AVYGAVXB3bWLlk9qP77Un-r_aqt3meYG/view?usp=sharing' />
                    <Caja path='https://drive.google.com/file/d/1-Za57SSw9VcW54OQcgvhVOOcVuKwKJHJ/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default Endbotton
