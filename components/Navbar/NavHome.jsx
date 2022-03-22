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
            <header className={navbar ? 'scrolled' : 'home'} >
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
                                    <Link href='../productos/artroscopia'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../img/productos/Artroscopia/img1.webp)` }}></a>
                                    </Link>
                                    <Link href='../productos/artroscopia'  >
                                        <a>artroscopia</a>
                                    </Link>
                                </li>
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='../productos/cadera'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../img/productos/Cadera/img3.webp)` }}></a>
                                    </Link>
                                    <Link href='../productos/cadera'  >
                                        <a>cadera</a>
                                    </Link>
                                </li>
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='../productos/clavos-endomedulares'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../img/productos/clavos-endomedulares/img4.webp)` }}></a>
                                    </Link>
                                    <Link href='../productos/clavos-endomedulares'  >
                                        <a>clavos endomedulares</a>
                                    </Link>
                                </li>
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='../productos/clavos-placa'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../img/productos/clavos-placa/img3.webp)` }}></a>
                                    </Link>
                                    <Link href='../productos/clavos-placa'  >
                                        <a>clavos placa</a>
                                    </Link>
                                </li>
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='../productos/fijacion-interna'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../img/productos/fijacion-interna/img4.webp)` }}></a>
                                    </Link>
                                    <Link href='../productos/fijacion-interna'  >
                                        <a>fijacion interna</a>
                                    </Link>
                                </li>
                            </ul>

                            <ul className="list">
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='../productos/mini-placas'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../img/productos/mini-placas/img3.webp)` }}></a>
                                    </Link>
                                    <Link href='../productos/mini-placas'  >
                                        <a>mini placas</a>
                                    </Link>
                                </li>
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='../productos/osteosintesis-4-5'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../img/productos/Osteosintesis-4-5/img3.webp)` }}></a>
                                    </Link>
                                    <Link href='../productos/osteosintesis-4-5'  >
                                        <a>osteosintesis 4.5</a>
                                    </Link>
                                </li>
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='../productos/osteosintesis-3-5'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../img/productos/Osteosintesis-3-5/img2.webp)` }}></a>
                                    </Link>
                                    <Link href='../productos/osteosintesis-3-5'  >
                                        <a>osteosintesis 3.5</a>
                                    </Link>
                                </li>
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='../productos/poliaxial'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../img/productos/poliaxial/img1.webp)` }}></a>
                                    </Link>
                                    <Link href='../productos/poliaxial'  >
                                        <a>poliaxial</a>
                                    </Link>
                                </li>
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='../productos/rodilla'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../img/productos/Rodilla/img4.webp)` }}></a>
                                    </Link>
                                    <Link href='../productos/rodilla'  >
                                        <a>rodilla</a>
                                    </Link>
                                </li>
                            </ul>

                            <ul className="list">
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='../productos/espaciadores'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../img/productos/tornillos-canulados/img4.webp)` }}></a>
                                    </Link>
                                    <Link href='../productos/espaciadores'  >
                                        <a>espaciadores</a>
                                    </Link>
                                </li>
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='../productos/tornillos'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../img/productos/tornillos/img3.webp)` }}></a>
                                    </Link>
                                    <Link href='../productos/tornillos'  >
                                        <a>tornillos</a>
                                    </Link>
                                </li>
                                <li className="dropLi" onClick={() => cerrar()}>
                                    <Link href='../productos/tornillos-canulados'  >
                                        <a className="circle" style={{ backgroundImage: `url(../../img/productos/tornillos-canulados/img4.webp)` }}></a>
                                    </Link>
                                    <Link href='../productos/tornillos-canulados'  >
                                        <a>tornillos canulados</a>
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