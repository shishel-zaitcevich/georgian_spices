import React from 'react';

import styles from './HomePage.module.scss';
import Hero from '@/components/Hero/Hero';
import PopularSpices from '@/components/PopularSpices/PopularSpices';
import SignatureBlends from '@/components/SignatureBlends/SignatureBlends';

const HomePage: React.FC = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <SignatureBlends />
      <PopularSpices />
    </main>
  );
};

export default HomePage;
