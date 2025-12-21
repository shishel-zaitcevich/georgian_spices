import React from 'react';
import styles from './Navbar.module.scss';

const NavbarMobile: React.FC = () => (
  <div className={styles.mobileMenu}>
    <button className={styles.iconButton}>
      <span className="material-symbols-outlined">menu</span>
    </button>
  </div>
);

export default NavbarMobile;
