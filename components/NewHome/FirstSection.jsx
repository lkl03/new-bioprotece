import React, { useEffect } from 'react'
import { FaFacebookF, FaLinkedin, FaPhoneAlt, FaAngleDoubleDown } from 'react-icons/fa'
import { HiChevronDoubleDown } from 'react-icons/hi'
import Link from 'next/link'

const FirstSection = () => {

    useEffect(() => {
        let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            if (slides.length > 0) {
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slideIndex++;
                if (slideIndex > slides.length) { slideIndex = 1 }
                slides[slideIndex - 1].style.display = "block";
                setTimeout(showSlides, 3000);
            }
            return
        }
    }, [])

    return (
        <div style={{background: 'linear-gradient(60.7deg, #1348c4 -1.81%, #0188d3 73.84%)', boxShadow: 'inset 0px -33px 25px rgba(64, 64, 64, 0.2)'}}>
            <div className='container'>
                <div className='container_left'>
                    <h1 className='container_left-title'>Fabricación y comercialización de implantes médicos</h1>
                    <ul className='container_left-social'>
                        <li className='container_left-social-icon'>
                            <a href="https://www.facebook.com/Bioprotece/" target='blank'>
                                <FaFacebookF />
                            </a>
                        </li>
                        <li className='container_left-social-icon'>
                            <a href="https://ar.linkedin.com/company/bioprotece-sa" target='blank'>
                                <FaLinkedin />
                            </a>
                        </li>
                        <li className='container_left-social-icon last'>
                            <FaPhoneAlt />
                        </li>
                        <li className='container_left-social-icon last'>
                            <p>
                                (054-11) <a href="tel:+54 9 11 4738-6758">4738-6758</a> | <a href="tel:+54 9 11 4767-5822">4767-5822</a>
                            </p>
                        </li>
                    </ul>
                </div>
                <div className='container_right'>
                    <div className='container_right-img mySlides fade'>
                        <Link href="/productos/osteosintesis-3-5/volar-anatomica-doble/">
                            <a>
                                <img src="./img/pic2.webp" alt="volar-anatomica-doble Bioprotece" />
                            </a>
                        </Link>
                    </div>
                    <div className='container_right-img mySlides fade'>
                        <Link href="/productos/poliaxial/poliaxial-derecha/">
                            <a>
                                <img src="./img/pic3.webp" alt="placa poliaxial derecha 2.4 Bioprotece" />
                            </a>
                        </Link>
                    </div>
                    <div className='container_right-img mySlides fade'>
                        <Link href="/productos/osteosintesis-3-5/olecranon-titanio-bloqueada/">
                            <a>
                                <img src="./img/pic4.webp" alt="olecranon 3.5 Bioprotece" />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='pieza n1'>
                    <img src="./img/Artroscopia 2.webp" alt='artroscopia 2 bioprotece' />
                </div>
            </div>

            <a href='#sobre-nosotros' className='indicator'>
                <HiChevronDoubleDown />
            </a>

        </div>
    )
}

export default FirstSection