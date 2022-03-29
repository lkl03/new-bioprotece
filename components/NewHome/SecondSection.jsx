import React from 'react'

const SecondSection = () => {
  return (
    <div style={{background: '#ffffff', boxShadow: 'inset 0px -33px 25px rgba(64, 64, 64, 0.2)'}}>
        <div id='sobre-nosotros' className='secondContainer'>
            <div className='secondContainer_left'>
                <h3 className='secondContainer_left-sectionTitle'>Sobre nosotros</h3>
                <p className='secondContainer_left-sectionText'>
                    BIOPROTECE S.A. es una empresa nacional que fabrica prótesis médicas implantables, 
                    con toda la experiencia y trayectoria adquirida en 15 años de presencia en el mercado. 
                    La fabricación de sus piezas comienza con el proceso de “forjado”, 
                    éste proceso marca la diferencia con el resto de los fabricantes.
                </p>
            </div>
            <div className='secondContainer_right'>
                <div className='secondContainer_right-img'>
                    <img src="./img/pic3-export.webp" alt="pic 3 bioprotece" />
                </div>
            </div>
            <div className='pieza n2'>
                <img src="./img/Artroscopia 4.webp" alt='artroscopia 4 bioprotece'/>
            </div>
        </div>
    </div>
  )
}

export default SecondSection