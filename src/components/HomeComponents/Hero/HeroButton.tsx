import React from 'react';
import styles from './Hero.module.scss';

interface HeroButtonProps {
  onClick: () => void;
}

const HeroButton: React.FC<HeroButtonProps> = ({ onClick }) => (
  <button onClick={onClick} className={styles.heroButton}>
    Explore the Collection
  </button>
);

export default HeroButton;
