import React, { useState, useEffect } from 'react'
import { Menu1, Menu2, Menu3 } from './MenuItems';
import Link from 'next/link'
import { DropdownMenu, DropLi, DropLink } from './NavbarStyled';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Dropdown = () => {
    useEffect(() => {
        AOS.init();
    })

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const [drop, setdrop] = useState(false);

    const cerrarDrop = () => {
        setdrop(!drop)
    }

    return (
        <>
            <DropdownMenu onClick={handleClick} data-aos='fade-right' className={drop ? 'closed' : ''}>
                <ul>
                    {Menu1.map((item, index) => {
                        return (
                            <DropLi key={index} onClick={() => cerrarDrop()}>
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
                            <DropLi key={index}>
                                <Link href={item.path} onClick={() =>
                                    setClick(false)} >
                                    <DropLink>{item.title}</DropLink>
                                </Link>
                            </DropLi>
                        )
                    })}
                </ul>

                <ul>
                    {Menu3.map((item, index) => {
                        return (
                            <DropLi key={index}>
                                <Link href={item.path} onClick={() =>
                                    setClick(false)} >
                                    <DropLink>{item.title}</DropLink>
                                </Link>
                            </DropLi>
                        )
                    })}
                </ul>

            </DropdownMenu>
        </>
    )
}

export default Dropdown
