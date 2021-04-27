import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../assests/assets/x.svg"
import { ReactComponent as MenuIcon } from "../assests/assets/menu.svg";
import {Link} from 'react-scroll';
import '../scss/main.scss';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="headers">
      <div className="logo-nav">
       <h3 style={{cursor:'pointer'}}><Link activeClass="home" to="header" spy={true} smooth={true}>Saral Karki</Link></h3>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
          <Link onClick={closeMobileMenu}  to="home" spy={true} smooth={true}>Home</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link  onClick={closeMobileMenu} to="about" spy={true} smooth={true}>About</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link onClick={closeMobileMenu} to="skills" spy={true} smooth={true}>Skills</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link onClick={closeMobileMenu} to="projects" spy={true} smooth={true}>Projects</Link>
          </li>
        </ul>
      
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
