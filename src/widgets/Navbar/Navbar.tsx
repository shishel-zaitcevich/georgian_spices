import React, { memo } from 'react';
import styles from './Navbar.module.scss';
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
// import NavbarActions from './NavbarActions'
import NavbarMobile from './NavbarMobile';

export const navLinks = [
  { name: 'Koti', path: '/' },
  { name: 'Meistä', path: '/about' },
  { name: 'Reseptit', path: '/recipes' },
  { name: 'Yhteystiedot', path: '/contacts' },
  { name: 'Yhteistyö', modalType: 'collaboration' },
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

export default memo(Navbar);
