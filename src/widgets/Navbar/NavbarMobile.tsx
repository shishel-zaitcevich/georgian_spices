// import React from 'react';
// import styles from './Navbar.module.scss';

// const NavbarMobile: React.FC = () => (
//   <div className={styles.mobileMenu}>
//     <button className={styles.iconButton}>
//       <span className="material-symbols-outlined">menu</span>
//     </button>
//   </div>
// );

// export default NavbarMobile;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavbarMobile.module.scss';

import { navLinks } from './Navbar';
import NavbarLogo from './NavbarLogo';

const NavbarMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <button className={styles.burgerButton} onClick={toggleMenu} aria-label="Открыть меню">
        <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
      </button>

      {isOpen && (
        <div className={styles.overlay} onClick={toggleMenu}>
          <nav className={styles.menu} onClick={(e) => e.stopPropagation()}>
            <div className={styles.header}>
              <NavbarLogo />
              <button className={styles.closeButton} onClick={toggleMenu} aria-label="Закрыть меню">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <ul className={styles.links}>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavbarMobile;
