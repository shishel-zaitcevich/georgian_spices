import React from 'react';
import styles from './Navbar.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { useModal } from '@/context/ModalContext';
import CollaborationModal from './CollaborationModal';
import classNames from 'classnames';

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
  className?: string;
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({ links, className }) => {
  const { openModal } = useModal();

  const handleModalOpen = (type?: string) => {
    if (type === 'collaboration') {
      openModal(<CollaborationModal />);
    }
  };

  return (
    <nav className={classNames(styles.navLinks, className)}>
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
