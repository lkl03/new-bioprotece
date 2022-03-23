import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <BlackS>
                <footer data-aos="fade-in">
                    <div className="content">
                        <div className="top">
                            <div className="logo-details">
                                <span className="logo_name">Bioprotece SA</span>
                            </div>
                            <div className="media-icons">
                                <a href="https://www.facebook.com/Bioprotece/" target="_blank" rel="noreferrer"><FaFacebookF size="1.3em" color='white' className="fa fa-facebook fa-lg jump" /></a>
                                <a href="https://ar.linkedin.com/company/bioprotece-sa" target="_blank" rel="noreferrer"><FaLinkedin size="1.3em" color="white" className="fa fa-instagram fa-lg jump" /></a>
                            </div>
                        </div>
                        <div className="link-boxes">
                            <ul className="box">
                                <li className="link_name">Productos</li>
                                <li><Link href="/productos/artroscopia">Artroscopia</Link></li>
                                <li><Link href="/productos/cadera">Cadera</Link></li>
                                <li><Link href="/productos/clavos-endomedulares">Clavos Endomedulares</Link></li>
                                <li><Link href="/productos/clavos-placa">Clavos Placa</Link></li>
                                <li><Link href="/productos/fijacion-interna">Fijación Interna</Link></li>
                            </ul>
                            <ul className="box">
                                <li className="link_nameh">Other services</li>
                                <li><Link href="/productos/mini-placas">Mini Placas</Link></li>
                                <li><Link href="/productos/osteosintesis-4-5">Osteosíntesis 4.5</Link></li>
                                <li><Link href="/productos/osteosintesis-3-5">Osteosíntesis 3.5</Link></li>
                                <li><Link href="/productos/poliaxial">Poliaxial</Link></li>
                                <li><Link href="/productos/rodilla">Rodilla</Link></li>
                            </ul>
                            <ul className="box">
                                <li className="link_nameh">Other services</li>
                                <li><Link href="/productos/espaciadores">Espaciadores</Link></li>
                                <li><Link href="/productos/tornillos">Tornillos</Link></li>
                                <li><Link href="/productos/tornillos-canulados">Tornillos canulados</Link></li>
                                <li><a href="#" /></li>
                            </ul>
                            <ul className="box lastone">
                                <li className="link_name">Contacto</li>
                                <li className="c-li"><a className="c-number">(054-11) 4738-6758</a></li>
                                <li className="c-li"><a className="c-number">(054-11) 4767-5822</a></li>
                                <li><a href="mailto:consultas@bioprotece.com?Subject=Consulta%20Web%20">consultas@bioprotece.com</a></li>
                            </ul>
                        </div></div></footer>
            </BlackS>
        </>
    )
}

export default Footer

export const BlackS = styled.div`
    background-color: black;
`