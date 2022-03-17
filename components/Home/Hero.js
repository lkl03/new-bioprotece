import React from 'react'
import { FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa'
import {
    HeroS,
    HeroGrid,
    Content,
    Title,
    VideoBg,
    Description,
    Btn,
    Overlay,
    SocialM,
    SocialContact,
    SlideShow,
    SliderImg
} from './StyledHero'


const Hero = () => {
    return (
        <HeroS className="home" id="home">

            <VideoBg src="/video/background-video.mp4" muted loop autoPlay />
            <Overlay />
            <HeroGrid className="h-grid">
                <Content className="content">
                    <Title>Fabricación y comercialización de implantes médicos</Title>
                    <Description className="p-text">BIOPROTECE S.A. es una empresa nacional que fabrica prótesis médicas implantables, con toda la experiencia y trayectoria adquirida en 15 años de presencia en el mercado. La fabricación de sus piezas comienza con el proceso de “forjado”,
                        éste proceso marca la diferencia con el resto de los fabricantes. </Description>
                    <Btn className="btn" href="#certification">Más info</Btn>
                    <SocialM className="social">
                        <li><a href="https://www.facebook.com/Bioprotece/" target="_blank" rel="noreferrer"><FaFacebookF size='1.3em' /></a></li>
                        <li><a href="https://www.instagram.com/bioproteces.a/" target="_blank" rel="noreferrer"><FaInstagram size='1.3em' /></a></li>
                        <SocialContact className="social-contact">
                            <li><FaPhoneAlt color='white' size='1.2em'/></li>
                            <li>
                                <p className="p-social">(054-11) 4738-6758 | 4767-5822</p>
                            </li>
                        </SocialContact>
                        
                    </SocialM>
                </Content>
                <SlideShow id="slideshow">
                    <div className="active">
                        <a href="./items/osteosintesis3-5/volar-anatomica-doble.html">
                            <SliderImg className="img-slider" src="./img/pic2.png?format=webp" alt="volar-anatomica-doble Bioprotece" />
                        </a>
                    </div>
                </SlideShow>
                
            </HeroGrid>
        </HeroS>
        
    )
}

  
export default Hero
