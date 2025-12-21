import React from 'react';
import styles from './Footer.module.scss';
import NavbarLinks from '../Navbar/NavbarLinks';

interface FooterColumnProps {
  title: string;
  links?: string[];
}

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Recipes', path: '/recipes' },
  { name: 'Contacts', path: '/contacts' },
];

const FooterColumn: React.FC<FooterColumnProps> = ({ title }) => (
  <div className={styles.column}>
    <h4 className={styles.columnTitle}>{title}</h4>
    <ul className={styles.linkList}>
      {/* {links.map((link) => (
        <li key={link}>
          <a href="#" className={styles.link}>
            {link}
          </a>
        </li>
      ))} */}
      <NavbarLinks links={navLinks} />
    </ul>
  </div>
);

export default FooterColumn;
