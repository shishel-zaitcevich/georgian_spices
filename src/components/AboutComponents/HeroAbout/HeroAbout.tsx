import React, { memo } from 'react';
import styles from './HeroAbout.module.scss';
import Button from '@/shared/Button/Button';
import { Link } from 'react-router-dom';

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
          <Button variant="orange">
            {/* <Link to={'#story'}>Read Our Story</Link> */}
            <a href="#story">Read Our Story</a>
          </Button>
          {/* <a href="#popular-spices" className={styles.heroButton}>
            Explore the Collection
          </a> */}
          <Button variant="transparent" className={styles.buttonAbout}>
            <Link to={'/'}> View Products</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default memo(HeroAbout);
