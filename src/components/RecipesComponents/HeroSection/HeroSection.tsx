import React from 'react';
import styles from './HeroSection.module.scss';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.textBox}>
          <h1>Discover the Taste of Georgia</h1>
          <h2>
            Explore authentic recipes featuring our premium spice blends. From classic Khinkali to
            spicy Ajika roasts, bring the Caucasus mountains to your kitchen.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
