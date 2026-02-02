import React, { memo } from 'react';

import styles from './Hero.module.scss';

import HeroContent from './HeroContent';
import { IMAGES } from '@/constants/constants';
import Button from '@/shared/Button/Button';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroContainer}>
      <div
        className={styles.heroBackground}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("${IMAGES.hero}")`,
        }}
      >
        <HeroContent />

        <Button variant="orange">
          <a href="#signature-blends">Tutustu kokoelmaan</a>
        </Button>
      </div>
    </section>
  );
};

export default memo(Hero);
