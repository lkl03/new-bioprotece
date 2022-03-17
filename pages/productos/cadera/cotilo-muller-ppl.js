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

    const titulo = 'Cotilo Müller C/PPL'
    const img = 'cotilo-muller'

    return (
        <>
            <Redirecter category="Cadera" product="Cotilo Muller c/PPL" />
            <NavProd />
            <ItemS>
                <TitleItem className="title-item">{titulo}</TitleItem>
                <ContentItem>
                    <ImageDiv className="image-div">
                        <ItemImg src={`/img/items/cadera/${img}.webp`} alt={`${titulo} Bioprotece`} className="item-img" data-aos="fade-right" />
                    </ImageDiv>
                    <div className="info-div">

                        <table className="tabla-chica" data-aos="fade-left">
                            <thead>
                                <tr>
                                    <th className="text-left">Cod</th>
                                    <th className="text-left">Ø Int.</th>
                                    <th className="text-left">Ø Ext.</th>
                                    <th className="text-left">Material</th>
                                </tr>
                            </thead>
                            <tbody className="table-hover">
                                <tr>
                                    <td className="text-left code">14-025</td>
                                    <td className="text-left">28</td>
                                    <td className="text-center">40</td>
                                    <td className="text-left">UHMWPE</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">14-026</td>
                                    <td className="text-left">28</td>
                                    <td className="text-center">42</td>
                                    <td className="text-left">UHMWPE</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">14-027</td>
                                    <td className="text-left">28</td>
                                    <td className="text-center">45</td>
                                    <td className="text-left">UHMWPE</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">14-028</td>
                                    <td className="text-left">28</td>
                                    <td className="text-center">46</td>
                                    <td className="text-left">UHMWPE</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">14-029</td>
                                    <td className="text-left">28</td>
                                    <td className="text-center">47</td>
                                    <td className="text-left">UHMWPE</td>
                                </tr>
                                <tr className="lastr">
                                    <td className="text-left code">14-030</td>
                                    <td className="text-left">28</td>
                                    <td className="text-center">48</td>
                                    <td className="text-left">Acero</td>
                                </tr>
                                <tr className="lastr">
                                    <td className="text-left code">14-031</td>
                                    <td className="text-left">28</td>
                                    <td className="text-center">50</td>
                                    <td className="text-left">Acero</td>
                                </tr>
                                <tr className="lastr">
                                    <td className="text-left code">14-032</td>
                                    <td className="text-left">28</td>
                                    <td className="text-center">52</td>
                                    <td className="text-left">Acero</td>
                                </tr>
                                <tr className="lastr">
                                    <td className="text-left code">14-033</td>
                                    <td className="text-left">28</td>
                                    <td className="text-center">54</td>
                                    <td className="text-left">Acero</td>
                                </tr>
                                <tr className="lastr">
                                    <td className="text-left code">14-034</td>
                                    <td className="text-left">28</td>
                                    <td className="text-center">56</td>
                                    <td className="text-left">Acero</td>
                                </tr>
                                <tr className="lastr">
                                    <td className="text-left code">14-035</td>
                                    <td className="text-left">28</td>
                                    <td className="text-center">58</td>
                                    <td className="text-left">Acero</td>
                                </tr>
                                <tr className="lastr">
                                    <td className="text-left code">14-036</td>
                                    <td className="text-left">32</td>
                                    <td className="text-center">45</td>
                                    <td className="text-left">UHMWPE</td>
                                </tr>
                                <tr className="lastr">
                                    <td className="text-left code">14-037</td>
                                    <td className="text-left">32</td>
                                    <td className="text-center">50</td>
                                    <td className="text-left">UHMWPE</td>
                                </tr>
                                <tr className="lastr">
                                    <td className="text-left code">14-038</td>
                                    <td className="text-left">32</td>
                                    <td className="text-center">54</td>
                                    <td className="text-left">Acero</td>
                                </tr>
                                <tr className="lastr">
                                    <td className="text-left code">14-039</td>
                                    <td className="text-left">32</td>
                                    <td className="text-center">58</td>
                                    <td className="text-left">Acero</td>
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
