import React from 'react';
import styles from './Navbar.module.scss';
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
// import NavbarActions from './NavbarActions'
import NavbarMobile from './NavbarMobile';

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Recipes', path: '/recipes' },
  { name: 'Contacts', path: '/contacts' },
];

const Navbar: React.FC = () => {
  return (
    <header className={styles.navbar}>
      <NavbarLogo />

      <div className={styles.navRight}>
        <NavbarLinks links={navLinks} />
        {/* <NavbarActions /> */}
      </div>

      <NavbarMobile />
    </header>
  );
};

export default Navbar;
