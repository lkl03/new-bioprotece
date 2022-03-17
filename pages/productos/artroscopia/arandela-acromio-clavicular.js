import React, {useEffect} from 'react'
import {
    ItemS,
    TitleItem,
    ContentItem,
    ItemImg,
    ImageDiv,
    InfoDiv,
    TablaChica,
} from '../../../styles/StyledItems'
import ScrollArrow from '../../../components/Generales/ScrollArrow'
import Pdf from '../../../components/Generales/Pdf'
import NavProd from '../../../components/Navbar/NavProd'
import Redirecter from '../../../components/Redirecter'
import Caja from '../../../components/Generales/Caja'


const ArandelaClavicular = () => {

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
    
    return (
        <>
            <Redirecter category="Artroscopía" product="Arandela para acromio clavicular" />
            <NavProd />
            <ItemS>
                <TitleItem className="title-item">Arandela para acromio clavicular</TitleItem>
                <ContentItem>
                    <ImageDiv className="image-div">
                        <ItemImg src="/img/items/artroscopia/arandela.webp" alt="Arandela clavicular Bioprotece" className="item-img" data-aos="fade-right" />
                    </ImageDiv>
                    <div className="info-div">
                        <table className="tabla-chica" data-aos="fade-left">
                            <thead>
                                <tr>
                                    <th className="text-left">Cod</th>
                                    <th className="text-left">Diamétro</th>
                                    <th className="text-left">Material</th>
                                </tr>
                            </thead>
                            <tbody className="table-hover">
                                <tr>
                                    <td className="text-left code">65-037</td>
                                    <td className="text-left">9mm</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">65-038</td>
                                    <td className="text-left">10mm</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                                <tr>
                                    <td className="text-left code">65-039</td>
                                    <td className="text-left">11mm</td>
                                    <td className="text-left">Titanio</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Pdf path='https://drive.google.com/file/d/196S-2cT7wQriy6e5b28XTaFFBbtPKnEw/view?usp=sharing' />
                    <Caja path='https://drive.google.com/file/d/1Doo50DZ68Uaf7jhnkNFyZ6GtQ9t_Zhxp/view?usp=sharing' />
                </ContentItem>
                
                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default ArandelaClavicular
