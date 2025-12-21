import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const NavbarLogo: React.FC = () => (
  <div className={styles.logo}>
    <Link to="/" className={styles.logoLink}>
      <div className={styles.logoIcon}>
        <img src="/img/georgian_logo.png" alt="logo" />
      </div>
      <h2 className={styles.logoText}>Georgian Spices</h2>
    </Link>
  </div>
);

export default NavbarLogo;
