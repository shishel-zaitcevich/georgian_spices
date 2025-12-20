import React from 'react';
import styles from './Footer.module.scss';

interface FooterColumnProps {
  title: string;
  links: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div className={styles.column}>
    <h4 className={styles.columnTitle}>{title}</h4>
    <ul className={styles.linkList}>
      {links.map((link) => (
        <li key={link}>
          <a href="#" className={styles.link}>
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterColumn;
