import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'orange' | 'transparent' | 'outlined';
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'orange', onClick, className }) => (
  <button onClick={onClick} className={classNames(className, styles.button, styles[variant])}>
    {children}
  </button>
);

export default Button;
