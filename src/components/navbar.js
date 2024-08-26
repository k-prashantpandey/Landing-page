import React from 'react'
import { useState } from 'react'
import './navbar.css'
import Logo from '../assets/wordpress-icon.png'
import {Link} from 'react-scroll'


const Nevbar = () => {
const [showMenu, setShowMenu] = useState(false);

return(
    <div className='nav '>

<nav className='navbar bg-purple-100 w-full lg:px-24'>
    <div className='web'>
        <img src={Logo} alt='Logo' className='logo' />
        <span className='text'>WebDev</span>
    </div>

    <div className='nav-links'>
        <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className='nav-links-item' >Home</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='nav-links-item' >Clients</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='nav-links-item' >About</Link>
        <Link activeClass='active' to='product' spy={true} smooth={true} offset={-100} duration={500} className='nav-links-item' >Product</Link>
        <Link activeClass='active' to='testimonial' spy={true} smooth={true} offset={-100} duration={500} className='nav-links-item' >Testimonial</Link>
    </div>

<div className='btns'>
<button className='btn1' onClick={() => {
    document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'})
    }}>Login</button>

<button className='btn2' onClick={() => {
    document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'})
    }}>Sign-up</button>
</div>


{/*     <img src={Menu} alt='menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
 */}
    <div className='navMenu' style={{display : showMenu? 'flex' : 'none'}}>
        <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className= 'Menu-item' onClick={() => setShowMenu(false)} >Home</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className= 'Menu-item' onClick={() => setShowMenu(false)} >Clients</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className= 'Menu-item' onClick={() => setShowMenu(false)} >About</Link>
        <Link activeClass='active' to='product' spy={true} smooth={true} offset={-100} duration={500} className= 'Menu-item' onClick={() => setShowMenu(false)} >Product</Link>
        <Link activeClass='active' to='testimonial' spy={true} smooth={true} offset={-100} duration={500} className= 'Menu-item' onClick={() => setShowMenu(false)} >Testimonial</Link>

    </div>


    </nav>
    </div>

)
}

export default Nevbar