import React from 'react'
import Link from 'next/link'

const FourthSection = () => {
    return (
        <div style={{background: '#ffffff', boxShadow: 'inset 0px -33px 25px rgba(64, 64, 64, 0.2)'}}>
            <div className='fourthContainer'>
                <div className='fourthContainer_left'>
                    <div className='fourthContainer_left-img'>
                        <img src="./img/additive1.webp" alt="additive 1 bioprotece" />
                    </div>
                </div>
                <div className='fourthContainer_right'>
                    <h3 className='fourthContainer_right-sectionTitle'>Fabricación aditiva: <br /> impresión 3D en titanio</h3>
                    <p className='fourthContainer_right-sectionText'>
                        Además del forjado, también fabricamos implantes médicos de estructura compleja
                        combinando las tecnologías <span>CAD</span> (diseño asistido por computadora)
                        y <span>MPBF</span> (fusión de polvo metálico en una cama de impresión).
                    </p>
                    <Link href="/equipamiento/impresion3d">
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