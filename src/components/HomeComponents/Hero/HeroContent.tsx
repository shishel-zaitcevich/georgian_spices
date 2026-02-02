import React from 'react';
import styles from './Hero.module.scss';

const HeroContent: React.FC = () => (
  <div className={styles.heroContent}>
    <h1 className={styles.heroTitle}>
      Georgia keittiössäsi – suomalainen ruoka kohtaa georgialaiset mausteet.
    </h1>
    <p className={styles.heroSubtitle}>
      Kutsu makumatkalle: maistele suosikkiruokiamme ja muokkaa ne oman makusi mukaan huolella
      tehdyillä, aidoilla georgialaisilla mausteilla.
    </p>
  </div>
);

export default HeroContent;
