import React from 'react';

import styles from './Hero.module.scss';

import HeroButton from './HeroButton';
import HeroContent from './HeroContent';
import { IMAGES } from '@/constants/constants';

interface HeroProps {
  onExplore?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className={styles.heroContainer}>
      <div
        className={styles.heroBackground}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("${IMAGES.hero}")`,
        }}
      >
        <HeroContent />
        <HeroButton onClick={onExplore ?? (() => {})} />
      </div>
    </section>
  );
};

export default Hero;
