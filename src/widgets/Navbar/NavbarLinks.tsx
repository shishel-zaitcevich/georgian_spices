import React from 'react';
import styles from './Navbar.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { useModal } from '@/context/ModalContext';
import CollaborationModal from './CollaborationModal';

interface PathLink {
  name: string;
  path: string; // обязательно
  modalType?: never; // запрещаем случайно передать modalType
}

interface ModalLink {
  name: string;
  modalType: 'collaboration'; // строго только это значение
  path?: never; // запрещаем path
}

// 2. Объединяем в union
type NavLink = PathLink | ModalLink;

// 3. Теперь тип props остаётся прежним
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

// const NavbarLinks: React.FC<NavbarLinksProps> = ({ links }) => {
//   return (
//     <nav className={styles.navLinks}>
//       {links.map((link) => (
//         <Link key={link.path} to={link.path} className={styles.link}>
//           {link.name}
//         </Link>
//       ))}
//     </nav>
//   );
// };

// export default NavbarLinks;

const NavbarLinks: React.FC<NavbarLinksProps> = ({ links }) => {
  const { openModal } = useModal();

  const handleModalOpen = (type?: string) => {
    if (type === 'collaboration') {
      openModal(<CollaborationModal />);
    }
  };

  return (
    <nav className={styles.navLinks}>
      {links.map((link) =>
        link.path ? (
          <Link key={link.name} to={link.path} className={styles.link}>
            {link.name}
          </Link>
        ) : (
          <button
            key={link.name}
            className={styles.link}
            onClick={() => handleModalOpen(link.modalType)}
          >
            {link.name}
          </button>
        ),
      )}
    </nav>
  );
};

export default NavbarLinks;
