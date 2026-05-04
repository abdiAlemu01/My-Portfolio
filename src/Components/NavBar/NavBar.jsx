import React, { useRef, useState } from 'react';
import './NavBar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import profile_img from '../../assets/profile_img.svg.jpg';
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
      <img src={profile_img} alt="profile" className='nav_profile_img' />
      <img src={Menu_open} alt="menu open" className='nav_mob_open' onClick={openMenu} />
      <ul ref={menuRef} className='nav_menu'>
        {isMenuOpen && (
          <img src={menu_close} alt="menu close" className='nav_mob_close' onClick={closeMenu} />
        )}
        <li>
          <AnchorLink className="anchor_link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className="anchor_link" offset={150} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className="anchor_link" offset={150} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className="anchor_link" offset={150} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor_link" offset={150} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav_connect">
        <AnchorLink className="anchor_link" offset={150} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default NavBar;








