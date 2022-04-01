import React, { useState, useEffect } from "react";
import {
    FaBars,
    FaCaretDown
} from "react-icons/fa";
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Menu1, Menu2, Menu3 } from './MenuItems';


const Nav = () => {
    useEffect(() => {
        AOS.init();
    })


    const [showMobileMenu, setShowMobileMenu] = useState(true);

    const [blackHeader, setBlackHeader] = useState(true)

    const [dropdown, setDropdown] = useState(false);

    const [navbar, setNavbar] = useState(false);

    const cerrar = () => {
        setShowMobileMenu(!showMobileMenu);
        setDropdown(false)
    }

    const dropDown = () => {
        setDropdown(!dropdown)
    }

    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY >= 108) {
                setNavbar(true)
            } else {
                setNavbar(false);
            }
        }

        const widthCalculator = () => {
            window.innerWidth > 1280 ? setShowMobileMenu(false) : ''
            window.innerWidth > 768 ? window.addEventListener('scroll', changeBackground) : ''
        }
        widthCalculator()

    })

    return (
        <>
            <header className={navbar ? 'scrolled' : ''}> 
                <div className="wrapper">
                    <Link href='/#'>
                        <img className="logo-header" src='/img/logo-header3.webp' />
                    </Link>

                    <div className="mobile-icon" onClick={() => cerrar()}>
                        <FaBars color="white" size='1.5em' />
                    </div>

                    <ul className="menu" style={showMobileMenu ? {display: 'none'} : {display: 'flex'}}>
                        <li onClick={() => cerrar()}>
                            <Link href='/#'>
                                <a>Inicio</a>
                            </Link>
                        </li>

                        <li onClick={() => cerrar()}>
                            <Link href='/#sobre-nosotros'>
                                <a>Sobre nosotros</a>
                            </Link>
                        </li>

                        <li onClick={() => cerrar()}>
                            <Link href='/equipamiento'>
                                <a>Nuestro equipamiento</a>
                            </Link>
                        </li>

                        <li onClick={() => dropDown()}>

                            <a>
                                Productos <FaCaretDown size='1em' />
                            </a>

                        </li>

                        <li onClick={() => cerrar()}>
                            <Link href='/#contactanos'>
                                <a>Contacto</a>
                            </Link>
                        </li>
                        {dropdown && <div className="dropdown-menu" data-aos='fade-right'>
                            <ul className="list">
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='../artroscopia'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../../img/productos/Artroscopia/img1.webp)` }}></a>
                                    </Link>
                                    <Link href='../artroscopia'  >
                                        <a>artroscopia</a>
                                    </Link>
                                </li>
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='../cadera'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../../img/productos/Cadera/img3.webp)` }}></a>
                                    </Link>
                                    <Link href='../cadera'  >
                                        <a>cadera</a>
                                    </Link>
                                </li>
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='../clavos-endomedulares'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../../img/productos/clavos-endomedulares/img4.webp)` }}></a>
                                    </Link>
                                    <Link href='../clavos-endomedulares'  >
                                        <a>clavos endomedulares</a>
                                    </Link>
                                </li>
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='../clavos-placa'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../../img/productos/clavos-placa/img3.webp)` }}></a>
                                    </Link>
                                    <Link href='../clavos-placa'  >
                                        <a>clavos placa</a>
                                    </Link>
                                </li>
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='../fijacion-interna'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../../img/productos/fijacion-interna/img4.webp)` }}></a>
                                    </Link>
                                    <Link href='../fijacion-interna'  >
                                        <a>fijacion interna</a>
                                    </Link>
                                </li>
                            </ul>

                            <ul className="list">
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='../mini-placas'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../../img/productos/mini-placas/img3.webp)` }}></a>
                                    </Link>
                                    <Link href='../mini-placas'  >
                                        <a>mini placas</a>
                                    </Link>
                                </li>
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='../osteosintesis-4-5'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../../img/productos/Osteosintesis-4-5/img3.webp)` }}></a>
                                    </Link>
                                    <Link href='../osteosintesis-4-5'  >
                                        <a>osteosintesis 4.5</a>
                                    </Link>
                                </li>
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='../osteosintesis-3-5'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../../img/productos/Osteosintesis-3-5/img2.webp)` }}></a>
                                    </Link>
                                    <Link href='../osteosintesis-3-5'  >
                                        <a>osteosintesis 3.5</a>
                                    </Link>
                                </li>
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='../poliaxial'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../../img/productos/poliaxial/img1.webp)` }}></a>
                                    </Link>
                                    <Link href='../poliaxial'  >
                                        <a>poliaxial</a>
                                    </Link>
                                </li>
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='../rodilla'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../../img/productos/Rodilla/img4.webp)` }}></a>
                                    </Link>
                                    <Link href='../rodilla'  >
                                        <a>rodilla</a>
                                    </Link>
                                </li>
                            </ul>

                            <ul className="list">
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='../espaciadores'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../../img/productos/espaciadores/img1.webp)` }}></a>
                                    </Link>
                                    <Link href='../espaciadores'  >
                                        <a>espaciadores</a>
                                    </Link>
                                </li>
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='../tornillos'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../../img/productos/tornillos/img3.webp)` }}></a>
                                    </Link>
                                    <Link href='../tornillos'  >
                                        <a>tornillos</a>
                                    </Link>
                                </li>
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='../tornillos-canulados'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../../img/productos/tornillos-canulados/img4.webp)` }}></a>
                                    </Link>
                                    <Link href='../tornillos-canulados'  >
                                        <a>tornillos canulados</a>
                                    </Link>
                                </li>
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='https://drive.google.com/file/d/1kDUxElboZO1AaSa8pRP3PWAp15h6W_fR/view'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../../img/img1.webp)` }}></a>
                                    </Link>
                                    <Link href='https://drive.google.com/file/d/1kDUxElboZO1AaSa8pRP3PWAp15h6W_fR/view'  >
                                        <a>catálogo completo</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>}
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Nav