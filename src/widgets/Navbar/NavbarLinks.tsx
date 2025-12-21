import React from 'react';
import styles from './Navbar.module.scss';
import { Link, NavLink } from 'react-router-dom';

interface NavLink {
  name: string;
  path: string;
}

interface NavbarLinksProps {
  links: NavLink[];
}

// export const NavbarLinks: React.FC<NavbarLinksProps> = ({ links }) => {
//   return (
//     <nav className={styles.navLinks}>
//       {links.map(({ name, path }) => (
//         <a key={name} href={path} className={styles.link}>
//           {name}
//         </a>
//       ))}
//     </nav>
//   );
// };

const NavbarLinks: React.FC<NavbarLinksProps> = ({ links }) => {
  return (
    <nav className={styles.navLinks}>
      {links.map((link) => (
        <Link key={link.path} to={link.path} className={styles.link}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavbarLinks;
