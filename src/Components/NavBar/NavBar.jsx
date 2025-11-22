import React, { useRef, useState } from 'react';
import reactLogo from "../../assets/reactLogo.svg.jpg"
import './NavBar.css';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
const NavBar = () => {
  const [menu, setMenu] = useState(""); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const menuRef = useRef();
  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
      setIsMenuOpen(true);
    }
  };
  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-350px";
      setIsMenuOpen(false);
    }
  };
  return (
    <div className='navbar'>
      <img className='w-30 h-30' src={reactLogo} alt='reactLogo' />
      <img src={Menu_open} alt="menu open" className='nav_mob_open' onClick={openMenu} />
      <ul ref={menuRef} className='nav_menu'>
        {isMenuOpen && (
          <img src={menu_close} alt="menu close" className='nav_mob_close' onClick={closeMenu} />
        )}
        <li>
          <AnchorLink className="anchor_link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="underline" />}
        </li>

        <li>
          <AnchorLink className="anchor_link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="underline" />}
        </li>

        <li>
          <AnchorLink className="anchor_link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="underline" />}
        </li>

        <li>
          <AnchorLink className="anchor_link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className="anchor_link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
      </ul>
      <div className="nav_connect">
        <AnchorLink className="anchor_link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default NavBar;








