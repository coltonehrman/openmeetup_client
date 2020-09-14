import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const MENU = {
    GROUPS: 'GROUPS',
    CATEGORIES: 'CATEGORIES'
  };

  const toggleActiveSubMenu = (subMenu) => {
    if (activeSubMenu === subMenu) setActiveSubMenu(null);
    else setActiveSubMenu(subMenu);
  };

  const isActiveSubMenu = (subMenu) => activeSubMenu === subMenu;

  return (
    <>
      <div className="main-menu-content">
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            
            <li>
              <Link to="/all-groups">groups <FiChevronDown /></Link>
              <ul className="dropdown-menu-item">
                <li><Link to="/all-groups">all groups</Link></li>
                <li><Link to="/add-group">add group</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/all-categories">categories <FiChevronDown /></Link>
              <ul className="dropdown-menu-item">
                <li><Link to="/all-categories">all categories</Link></li>
                <li><Link to="/add-category">add category</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <div className="side-menu-open" onClick={() => setNavOpen(!navOpen)}>
        <span className="menu__bar"></span>
        <span className="menu__bar"></span>
        <span className="menu__bar"></span>
      </div>

      <div className={`side-nav-container ${navOpen ? 'active' : ''}`}>
        <div className="humburger-menu">
          <div className="humburger-menu-lines side-menu-close" onClick={() => setNavOpen(!navOpen)}></div>
        </div>

        <div className="side-menu-wrap">
          <ul className="side-menu-ul">
            <li>
              <Link to="/">home</Link>
            </li>

            <li className={`${isActiveSubMenu(MENU.GROUPS) ? 'active' : ''}`}>
              <Link to="/all-groups">groups</Link> <span className="la-angle-down" onClick={() => toggleActiveSubMenu(MENU.GROUPS)}><FiChevronDown /></span>
              <ul className="dropdown-menu-item">
                <li><Link to="/all-groups">all groups</Link></li>
                <li><Link to="/add-group">add group</Link></li>
              </ul>
            </li>

            <li className={`${isActiveSubMenu(MENU.CATEGORIES) ? 'active' : ''}`}>
              <Link to="/all-categories">categories</Link> <span className="la-angle-down" onClick={() => toggleActiveSubMenu(MENU.CATEGORIES)}><FiChevronDown /></span>
              <ul className="dropdown-menu-item">
                <li><Link to="/all-categories">all categories</Link></li>
                <li><Link to="/add-category">add category</Link></li>
              </ul>
            </li>
          </ul>

          <div className="side-nav-button">
            <Link to="/login" className="theme-btn">login</Link>
            <Link to="/sign-up" className="theme-btn">Sign up</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
