import React, {useState} from 'react';
import './navbar.css';
import {GiHamburgerMenu} from "react-icons/gi";


import { BrowserRouter } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';

 
const Navbar = () => {
  const [showMediaIcons, setshowMediaIcons] = useState(false);
  return (
    <BrowserRouter id="navbar">
        <nav className='main-nav' >
          <div className='logo'>
            <h2>Dishank Kumar Yadav</h2>
          </div>
            <div className='hamburger-menu'>
              <a href="#" onClick={() => setshowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu/>
              </a>
            </div>
          <div className={showMediaIcons ? 'menu-link mobile-menu-link': 'menu-link'}>
            <ul>
              <li>
              <Link to="#navbar">
              <a href="">Home</a>
              </Link>
              </li>
              <li>
                <Link to="#projectSection">
                <a href="">Projects</a>
                </Link>
              </li>
              <li>
                <Link to="#skillsSection">
                <a href="">Skills</a>
                </Link>
              </li>
              <li>
                <Link to="#contactSection">
                <a href="">Contact</a>
                </Link>
              </li>
              <li><a href="https://drive.google.com/file/d/1nAMAx5pS7LKnnqulBWLD4xa4LqAygqQK/view?usp=sharing" target='_blank'>Resume</a></li>
            </ul>
          </div>
        </nav>
    </BrowserRouter>
  );
};

export default Navbar;