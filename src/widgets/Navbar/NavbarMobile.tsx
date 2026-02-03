import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavbarMobile.module.scss';

import { navLinks } from './Navbar';
import NavbarLogo from './NavbarLogo';
import { useModal } from '@/context/ModalContext';
import CollaborationModal from './CollaborationModal';
import classNames from 'classnames';

// const NavbarMobile: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <>
//       <button className={styles.burgerButton} onClick={toggleMenu} aria-label="Открыть меню">
//         <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
//       </button>

//       {isOpen && (
//         <div className={styles.overlay} onClick={toggleMenu}>
//           <nav className={styles.menu} onClick={(e) => e.stopPropagation()}>
//             <div className={styles.header}>
//               <NavbarLogo />
//               <button className={styles.closeButton} onClick={toggleMenu} aria-label="Закрыть меню">
//                 <span className="material-symbols-outlined">close</span>
//               </button>
//             </div>

//             <ul className={styles.links}>
//               {navLinks.map((link) => (
//                 <li key={link.path}>
//                   <NavLink
//                     to={link.path}
//                     className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
//                     onClick={toggleMenu}
//                   >
//                     {link.name}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       )}
//     </>
//   );
// };

// export default NavbarMobile;

const NavbarMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const { openModal } = useModal();

  const handleModalOpen = (type?: string) => {
    if (type === 'collaboration') {
      openModal(<CollaborationModal />);
    }
  };

  return (
    <>
      <button className={styles.burgerButton} onClick={toggleMenu} aria-label="Открыть меню">
        <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
      </button>

      {isOpen && (
        <div className={styles.overlay} onClick={closeMenu}>
          <nav className={styles.menu} onClick={(e) => e.stopPropagation()}>
            <div className={styles.header}>
              <NavbarLogo />
              <button className={styles.closeButton} onClick={closeMenu} aria-label="Закрыть меню">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <ul className={styles.links}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.path ? (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
                      onClick={closeMenu}
                      end // ← важно для главной страницы ('/')
                    >
                      {link.name}
                    </NavLink>
                  ) : (
                    <button
                      className={classNames(styles.link, styles.btn)}
                      onClick={() => {
                        closeMenu();
                        handleModalOpen(link.modalType);
                      }}
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavbarMobile;
