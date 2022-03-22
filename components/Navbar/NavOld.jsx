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

    const [dropdown, setDropdown] = useState(false);

    const [navbar, setNavbar] = useState(false);

    const cerrar = () => {
        setShowMobileMenu(!showMobileMenu);
        setDropdown(true)
    }

    const dropDown = () => {
        cerrar()
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

        window.addEventListener('scroll', changeBackground);
    })

    return (
        <>
            <header className={navbar ? 'scrolled' : 'scrolled'}>
                <div className="wrapper">
                    <Link href='/#'>
                        <img className="logo-header" src='/img/logo-header3.webp' />
                    </Link>

                    <div className="mobile-icon" onClick={() => cerrar()}>
                        <FaBars color="white" size='1.5em' />
                    </div>

                    <ul className="menu" open={showMobileMenu}>
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
                        {dropdown && <div class="dropdown-menu" data-aos='fade-right'>
                            <ul className="list">
                                {Menu1.map((item, index) => {
                                    return (
                                        <li className="dropLi" key={item} onClick={() => cerrar()}>
                                            <div className="circle"
                                                style={{ backgroundImage: `url(${item.img})` }}
                                            >
                                            </div>

                                            <Link href={item.path}  >
                                                <a>{item.title}</a>

                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>

                            <ul className="list">
                                {Menu2.map((item, index) => {
                                    return (
                                        <li className="dropLi" key={item} onClick={() => cerrar()}>
                                            <div className="circle"
                                                style={{ backgroundImage: `url(${item.img})` }}
                                            >
                                            </div>

                                            <Link href={item.path}  >
                                                <a>{item.title}</a>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>

                            <ul className="list">
                                {Menu3.map((item, index) => {
                                    return (
                                        <li className="dropLi" key={item} onClick={() => cerrar()}>
                                            <div className="circle"
                                                style={{ backgroundImage: `url(${item.img})` }}
                                            >
                                            </div>
                                            <Link href={item.path}  >
                                                <a>{item.title}</a>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>}
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Nav