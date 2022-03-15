import React, { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'
import Dropdown from './Dropdown'
import {
    Header,
    HeaderContainer,
    Logo,
    NavLink,
    Navitem,
    MenuIcon,
    Prod,
    NavMenu,
    NavMenuActive
} from './NavbarStyled'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    


    return (
        <>
           <Header>
                <HeaderContainer>
            
                    <Link href='/' >
                        <Logo src='/img/logo-header3.png' />
                    </Link>

                    <MenuIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MenuIcon>
                    
                    <NavMenu >
                        <Navitem>
                            <Link href='/' onClick={closeMobileMenu}>
                               <NavLink> Inicio </NavLink>
                            </Link>
                        </Navitem>

                        <Navitem>
                            <Link href='/#certification' onClick={closeMobileMenu}>
                                <NavLink> Sobre Nosotros </NavLink>
                            </Link>
                        </Navitem>

                        <Navitem>
                            <Link href='/equipamiento' onClick={closeMobileMenu}>
                                <NavLink> Nuestro equipamiento </NavLink>
                            </Link>
                        </Navitem>

                        <Navitem onClick={() => setDropdown(!dropdown)} >
                            <Prod href='/#productos' onClick={closeMobileMenu}>
                                Productos <faCaretDown />
                            </Prod>
                        </Navitem>

                        <Navitem>
                            <Link href='/#contact-form' onClick={closeMobileMenu}>
                                <NavLink> Contacto </NavLink>
                            </Link>
                            {dropdown && <Dropdown />}
                        </Navitem>
                        
                    </NavMenu>
                </HeaderContainer>
           </Header> 
        </>
    )
}

export default Navbar
