import React from 'react';
import styles from './Hero.module.scss';

const HeroContent: React.FC = () => (
  <div className={styles.heroContent}>
    <h1 className={styles.heroTitle}>Experience the Authentic Flavors of Georgia</h1>
    <p className={styles.heroSubtitle}>
      Discover a world of rich, aromatic spices, handcrafted from traditional recipes.
    </p>
  </div>
);

export default HeroContent;
