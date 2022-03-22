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

const ClavoFemur = () => {

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

    const titulo = 'Clavo endomedular de fémur acero';
    const img = 'clavo-endomedular-femur-acero';

    const [openIndex, setOpenIndex] = useState(-1) // -1 or the index you want to be open by default

    const openTab = (index) => {
        setOpenIndex(index)
    }

    const closeAll = () => {
        setOpenIndex(-1)
    }


    return (
        <>
        <Redirecter category="Clavos endomedulares" product="Clavo Fémur Acero" />
            <NavProd />
            <ItemS>
                <TitleItem className="title-item">{titulo}</TitleItem>
                <ContentItem>
                    <ImageDiv className="image-div">
                        <ItemImg src={`/img/items/clavos-endomedulares/${img}.webp`} alt={`${titulo} Bioprotece`} className="item-img" data-aos="fade-right" />
                    </ImageDiv>
                    <div className="info-div multitables">

                        <details open={openIndex} onClick={() => closeAll()}>
                            <summary className="firstsum">Clavo endomedular de femur Ø9</summary>
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
                                        <td className="text-left code">30-001</td>
                                        <td className="text-left">Ø9 x 300mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">30-002</td>
                                        <td className="text-left">Ø9 x 320mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">30-003</td>
                                        <td className="text-left">Ø9 x 340mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">30-004</td>
                                        <td className="text-left">Ø9 x 360mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">30-005</td>
                                        <td className="text-left">Ø9 x 380mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">30-006</td>
                                        <td className="text-left">Ø9 x 400mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">30-007</td>
                                        <td className="text-left">Ø9 x 420mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">30-008</td>
                                        <td className="text-left">Ø9 x 440mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">30-009</td>
                                        <td className="text-left">Ø9 x 460mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details onClick={() => closeAll()}>
                            <summary className="firstsum">Clavo endomedular de femur Ø10</summary>
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
                                        <td className="text-left code">30-010</td>
                                        <td className="text-left">Ø10 x 300mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">30-011</td>
                                        <td className="text-left">Ø10 x 320mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">30-012</td>
                                        <td className="text-left">Ø10 x 340mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">30-013</td>
                                        <td className="text-left">Ø10 x 360mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">30-014</td>
                                        <td className="text-left">Ø10 x 380mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">30-015</td>
                                        <td className="text-left">Ø10 x 400mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">30-016</td>
                                        <td className="text-left">Ø10 x 420mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">30-017</td>
                                        <td className="text-left">Ø10 x 440mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">30-018</td>
                                        <td className="text-left">Ø10 x 460mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details onClick={() => closeAll()}>
                            <summary className="firstsum">Clavo endomedular de femur Ø11</summary>
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
                                        <td className="text-left code">30-019</td>
                                        <td className="text-left">Ø11 x 300mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">30-020</td>
                                        <td className="text-left">Ø11 x 320mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">30-021</td>
                                        <td className="text-left">Ø11 x 340mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">30-022</td>
                                        <td className="text-left">Ø11 x 360mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">30-023</td>
                                        <td className="text-left">Ø11 x 380mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">30-024</td>
                                        <td className="text-left">Ø11 x 400mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">30-025</td>
                                        <td className="text-left">Ø11 x 420mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">30-026</td>
                                        <td className="text-left">Ø11 x 440mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">30-027</td>
                                        <td className="text-left">Ø11 x 460mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details onClick={() => closeAll()}>
                            <summary className="firstsum">Clavo endomedular de femur Ø12</summary>
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
                                        <td className="text-left code">30-028</td>
                                        <td className="text-left">Ø12 x 300mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">30-029</td>
                                        <td className="text-left">Ø12 x 320mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">30-030</td>
                                        <td className="text-left">Ø12 x 340mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">30-031</td>
                                        <td className="text-left">Ø12 x 360mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">30-032</td>
                                        <td className="text-left">Ø12 x 380mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">30-033</td>
                                        <td className="text-left">Ø12 x 400mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">30-034</td>
                                        <td className="text-left">Ø12 x 420mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">30-035</td>
                                        <td className="text-left">Ø12 x 440mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">30-036</td>
                                        <td className="text-left">Ø12 x 460mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details onClick={() => closeAll()} >
                            <summary className="firstsum">Clavo endomedular de femur Ø13</summary>
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
                                        <td className="text-left code">30-037</td>
                                        <td className="text-left">Ø13 x 300mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">30-038</td>
                                        <td className="text-left">Ø13 x 320mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">30-039</td>
                                        <td className="text-left">Ø13 x 340mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">30-040</td>
                                        <td className="text-left">Ø13 x 360mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left code">30-041</td>
                                        <td className="text-left">Ø13 x 380mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">30-042</td>
                                        <td className="text-left">Ø13 x 400mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">30-043</td>
                                        <td className="text-left">Ø13 x 420mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">30-044</td>
                                        <td className="text-left">Ø13 x 440mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>
                                    <tr className="lastr">
                                        <td className="text-left code">30-045</td>
                                        <td className="text-left">Ø13 x 460mm</td>
                                        <td className="text-left">Acero</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                    </div>
                    <Pdf path='https://drive.google.com/file/d/1EUenJhGvMk2ua24gAKeaTjkWQ7iU44bN/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default ClavoFemur
