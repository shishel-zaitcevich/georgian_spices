import React from 'react';
import styles from './Navbar.module.scss';
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
// import NavbarActions from './NavbarActions';
import NavbarMobile from './NavbarMobile';

const Navbar: React.FC = () => {
  return (
    <header className={styles.navbar}>
      <NavbarLogo />

      <div className={styles.navRight}>
        <NavbarLinks />
        {/* <NavbarActions /> */}
      </div>

      <NavbarMobile />
    </header>
  );
};

export default Navbar;
