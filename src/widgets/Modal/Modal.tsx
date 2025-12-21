import React from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.backdrop} onClick={onClose}></div>

      <div className={styles.container}>
        <button className={styles.closeButton} onClick={onClose}>
          <span className="material-symbols-outlined">close</span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
