import React from 'react';
import styles from './HeroAbout.module.scss';
import Button from '@/shared/Button/Button';

const HeroAbout: React.FC = () => (
  <section className={styles.hero}>
    <div className={styles.overlay}>
      <div className={styles.text}>
        <h1>The Soul of the Caucasus in Every Jar</h1>
        <h2>
          Discover the authentic flavors of Georgia, sourced directly from the sun-drenched valleys
          of Kakheti.
        </h2>
        <div className={styles.buttons}>
          <Button variant="orange">Read Our Story</Button>
          <Button variant="transparent">View Products</Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroAbout;
