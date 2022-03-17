import React from 'react'

const SecondSection = () => {
  return (
    <>
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
    </>
  )
}

export default SecondSection