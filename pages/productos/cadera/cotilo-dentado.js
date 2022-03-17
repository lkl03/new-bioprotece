import React, {useEffect} from 'react'
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

    const titulo = 'Cotilo tipo Charnley dentado'
    const img = 'cotilo-dentado'

    return (
        <>
            <Redirecter category="Cadera" product="Cotilo Dentado" />
            <NavProd />
            <ItemS>
                <TitleItem className="title-item">{titulo}</TitleItem>
                <ContentItem>
                    <ImageDiv className="image-div">
                        <ItemImg src={`/img/items/cadera/${img}.webp`} alt={`${titulo} Bioprotece`} className="item-img" data-aos="fade-right" />
                    </ImageDiv>
                    <div className="info-div">

                        <table class="tabla-chica" data-aos="fade-left">
                            <thead>
                                <tr>
                                    <th class="text-left">Cod</th>
                                    <th class="text-left">Ø Int.</th>
                                    <th class="text-left">Ø Ext.</th>
                                    <th class="text-left">Material</th>
                                </tr>
                            </thead>
                            <tbody class="table-hover">
                                <tr>
                                    <td class="text-left code">14-001</td>
                                    <td class="text-left">22</td>
                                    <td class="text-center">40</td>
                                    <td class="text-left">UHMWPE</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">14-002</td>
                                    <td class="text-left">22</td>
                                    <td class="text-center">43</td>
                                    <td class="text-left">UHMWPE</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">14-003</td>
                                    <td class="text-left">22</td>
                                    <td class="text-center">47</td>
                                    <td class="text-left">UHMWPE</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">14-005</td>
                                    <td class="text-left">22</td>
                                    <td class="text-center">50</td>
                                    <td class="text-left">UHMWPE</td>
                                </tr>
                                <tr>
                                    <td class="text-left code">14-006</td>
                                    <td class="text-left">28</td>
                                    <td class="text-center">54</td>
                                    <td class="text-left">UHMWPE</td>
                                </tr>
                                <tr class="lastr">
                                    <td class="text-left code">14-011</td>
                                    <td class="text-left">28</td>
                                    <td class="text-center">40</td>
                                    <td class="text-left">Acero</td>
                                </tr>
                                <tr class="lastr">
                                    <td class="text-left code">14-012</td>
                                    <td class="text-left">28</td>
                                    <td class="text-center">43</td>
                                    <td class="text-left">Acero</td>
                                </tr>
                                <tr class="lastr">
                                    <td class="text-left code">14-013</td>
                                    <td class="text-left">28</td>
                                    <td class="text-center">47</td>
                                    <td class="text-left">Acero</td>
                                </tr>
                                <tr class="lastr">
                                    <td class="text-left code">14-014</td>
                                    <td class="text-left">28</td>
                                    <td class="text-center">50</td>
                                    <td class="text-left">Acero</td>
                                </tr>
                                <tr class="lastr">
                                    <td class="text-left code">14-015</td>
                                    <td class="text-left">28</td>
                                    <td class="text-center">54</td>
                                    <td class="text-left">Acero</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>

                    <Pdf path='https://drive.google.com/file/d/1BvrI1YuikrP3nJHifrobs7eUlkbqQLBE/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default Endbotton
