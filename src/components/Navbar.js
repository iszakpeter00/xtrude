import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/logo2.png'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <nav className='navbar'>
                <a href='/xtrude' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </div>
                <div className={click ? "nav-menu active" : "nav-menu"}>
                    <Link className='nav-item' activeClass='current' to="home" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Kezdőlap</Link>
                    <Link className='nav-item' activeClass='current' to="about" spy={true} smooth={true} offset={5} duration={500} onClick={closeMenu}>Rólunk</Link>
                    <Link className='nav-item' activeClass='current' to="services" spy={true} smooth={true} offset={5} duration={500} onClick={closeMenu}>Szolgáltatások</Link>
                    <Link className='nav-item' activeClass='current' to="products" spy={true} smooth={true} offset={5} duration={500} onClick={closeMenu}>Mintatermékek</Link>
                    <Link className='nav-item' activeClass='current' to="contact" spy={true} smooth={true} offset={5} duration={500} onClick={closeMenu}>Kapcsolat</Link>
                    <a className='nav-item' onClick={closeMenu} href="/xtrude/akademia">Akadémia</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
