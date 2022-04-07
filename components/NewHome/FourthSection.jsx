import React from 'react'
import Link from 'next/link'

const FourthSection = () => {
    return (
        <div style={{background: '#ffffff', boxShadow: 'inset 0px -33px 25px rgba(64, 64, 64, 0.2)'}}>
            <div className='fourthContainer'>
                <div className='fourthContainer_left'>
                    <div className='fourthContainer_left-img' id="helpTextShow">
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50rem', height: '25rem' }} id='render'>
                            <div style={{ width: '100%', height: '100%' }}>
                            <iframe style={{ width: '100%', height: '100%' }} src="/img/productos/home/Cotilo-34/Cotilo-34.html"
                                allowFullScreen={false}
                                frameBorder="0"
                                scrolling="no">
                            </iframe>
                            </div>
                        </div>
                        <p id="helpText">Deslizá la imagen para verla en realidad aumentada</p>
                    </div>
                </div>
                <div className='fourthContainer_right'>
                    <h3 className='fourthContainer_right-sectionTitle'>Implantes a medida: <br /> Impresión 3D</h3>
                    <p className='fourthContainer_right-sectionText'>
                        Además del proceso de forjado, también fabricamos implantes a medida de estructura compleja 
                        combinando las tecnologías <span>CAD</span> (diseño asistido por computadora), <span>MPBF</span> (fusión de polvo metálico en una cama de impresión) 
                        y <span>FDM</span> (modelado por deposición fundida)
                    </p>
                    <Link href="/productos/implantes-a-medida">
                        <button type='button' className='fourthContainer_right-sectionButton'>
                            Más Info
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FourthSection