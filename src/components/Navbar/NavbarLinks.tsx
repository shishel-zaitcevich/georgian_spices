import React from 'react';
import styles from './Navbar.module.scss';

const links = ['About Us', 'Recipes', 'Contacts'];

const NavbarLinks: React.FC = () => (
  <nav className={styles.navLinks}>
    {links.map((link) => (
      <a key={link} href="#" className={styles.link}>
        {link}
      </a>
    ))}
  </nav>
);

export default NavbarLinks;
