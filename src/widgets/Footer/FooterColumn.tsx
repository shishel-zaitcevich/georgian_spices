import React from 'react';
import styles from './Footer.module.scss';
import NavbarLinks from '../Navbar/NavbarLinks';

interface FooterColumnProps {
  title: string;
  links?: string[];
}

export const navLinks = [
  { name: 'Koti', path: '/' },
  { name: 'Meistä', path: '/about' },
  { name: 'Reseptit', path: '/recipes' },
  { name: 'Yhteystiedot', path: '/contacts' },
  { name: 'Yhteistyö', modalType: 'collaboration' },
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
      <NavbarLinks links={navLinks} className={styles.navbar} />
    </ul>
  </div>
);

export default FooterColumn;
