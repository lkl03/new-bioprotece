import React from 'react'

const ThirdSection = () => {
  return (
    <div style={{background: '#1e1e1e', boxShadow: 'inset 0px -33px 25px rgba(64, 64, 64, 0.2)'}}>
        <div className='thirdContainer'>
            <div className='thirdContainer_left'>
                <h3 className='thirdContainer_left-sectionTitle'>Nuestro proceso</h3>
                <p className='thirdContainer_left-sectionText'>
                    El proceso de fabricación comienza desde el forjado y no desde el mecanizado, 
                    lo que nos permite comercializar piezas que poseen muy buena resistencia y tenacidad, 
                    ya que podemos controlar el flujo del metal y la estructura del grano. 
                    Una pieza forjada posee mayor resistencia a las solicitaciones dinámicas. 
                </p>
            </div>
            <div className='thirdContainer_right'>
                <div className='thirdContainer_right-img'>
                    <img src="./img/Render3.webp" alt="render 3 bioprotece" />
                </div>
            </div>
            <div className='pieza n3'>
                <img src="./img/Artroscopia 6.webp" alt='artroscopia 6 bioprotece'/>
            </div>
        </div>
    </div>
  )
}

export default ThirdSection