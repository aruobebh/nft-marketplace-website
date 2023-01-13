import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

  return (
    <div className='app__navbar'>
        <a className='logo' href="">KRYPTO</a>
        <ul className={click ? 'app__navbar-list active' : 'app__navbar-list'}>
            <li className="nav-item"><a href="">about</a></li>
            <li className="nav-item"><a href="">pricing</a></li>
            <li className="nav-item"><a href="">contact</a></li>
            <li className="nav-item"><a href="">buy nfts</a></li>
        </ul>
        <div className="app__navbar-hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={30} style={{color: '#f8f8f8'}}/>) : <FaBars size={30} style={{color: '#f8f8f8'}} />}
            
        </div>
    </div>
  )
}

export default Navbar