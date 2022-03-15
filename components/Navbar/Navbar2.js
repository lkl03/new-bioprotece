import React, { useState, useEffect } from "react";
import {
    Container,
    LogoContainer,
    Wrapper,
    Menu,
    MenuItem,
    MenuItemLink,
    MobileIcon,
    Prod
} from "./NavbarElements"
import {
    FaBars,
    FaCaretDown
} from "react-icons/fa";
import Link from 'next/link'
import { IconContext } from "react-icons";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { DropdownMenu, DropLi, DropLink } from './NavbarStyled';
import { Menu1, Menu2, Menu3 } from './MenuItems';


const Navbar = () => {
    useEffect(() => {
        AOS.init();
    })


    const [showMobileMenu, setShowMobileMenu] = useState(true);

    const [dropdown, setDropdown] = useState(false);

    const [navbar, setNavbar] = useState(false);

    const cerrar = () => {
        setShowMobileMenu(!showMobileMenu);
        setDropdown(false)
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
        <Container className={navbar ? 'scrolled' : ''}>
            <Wrapper>
                <IconContext.Provider value={{ style: { fontSize: "2em" } }}>

                    <Link href='/'>
                        <LogoContainer src='/img/logo-header3.webp' />
                    </Link>

                    <MobileIcon onClick={() => cerrar()}>
                        <FaBars color='white' size='1.5em' />
                    </MobileIcon>

                    <Menu open={showMobileMenu} >

                        <MenuItem onClick={() => cerrar()}>
                            <MenuItemLink href='/#home' >
                                <a>
                                    Inicio
                                </a>
                            </MenuItemLink>
                        </MenuItem>

                        <MenuItem onClick={() => cerrar()}>
                            <MenuItemLink href='/#certificaciones'>
                                <a>
                                    Sobre nosotros
                                </a>
                            </MenuItemLink>
                        </MenuItem>

                        <MenuItem onClick={() => cerrar()}>
                            <MenuItemLink href='/equipamiento'>
                                <a>
                                    Nuestro Equipamiento
                                </a>
                            </MenuItemLink>
                        </MenuItem>

                        <MenuItem >
                            <Prod href='/productos' onClick={() => setDropdown(!dropdown)}>
                                <a>
                                    Productos <FaCaretDown size='0.8em' />
                                </a>
                            </Prod>
                        </MenuItem>

                        <MenuItem onClick={() => cerrar()}>
                            <MenuItemLink href='/#contactanos'>
                                <a>
                                    Contacto
                                </a>
                            </MenuItemLink>

                        </MenuItem>
                        {dropdown && <DropdownMenu data-aos='fade-right'>
                            <ul>
                                {Menu1.map((item, index) => {
                                    return (
                                        <DropLi key={item} onClick={() => cerrar()}>
                                            <Link href={item.path}  >
                                                <DropLink>{item.title}</DropLink>
                                            </Link>
                                        </DropLi>
                                    )
                                })}
                            </ul>

                            <ul>
                                {Menu2.map((item, index) => {
                                    return (
                                        <DropLi key={item} onClick={() => cerrar()}>
                                            <Link href={item.path}  >
                                                <DropLink>{item.title}</DropLink>
                                            </Link>
                                        </DropLi>
                                    )
                                })}
                            </ul>

                            <ul>
                                {Menu3.map((item, index) => {
                                    return (
                                        <DropLi key={item} onClick={() => cerrar()}>
                                            <Link href={item.path}>
                                                <DropLink>{item.title}</DropLink>
                                            </Link>
                                        </DropLi>
                                    )
                                })}
                            </ul>

                        </DropdownMenu>}
                    </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>
    );
};

export default Navbar;