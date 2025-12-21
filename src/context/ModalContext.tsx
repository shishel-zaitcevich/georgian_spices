import Modal from '@/widgets/Modal/Modal';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  content: ReactNode | null;
  isOpen: boolean;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<ReactNode | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (modalContent: ReactNode) => {
    setContent(modalContent);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // Необязательно: можно очистить контент с задержкой для анимации выхода
    setTimeout(() => setContent(null), 300);
  };

  return (
    <ModalContext.Provider value={{ content, isOpen, openModal, closeModal }}>
      {children}
      <GlobalModal isOpen={isOpen} onClose={closeModal}>
        {content}
      </GlobalModal>
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return context;
};

const GlobalModal: React.FC<{ isOpen: boolean; onClose: () => void; children: ReactNode }> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return <Modal isOpen={isOpen} onClose={onClose} children={children} />;
};
