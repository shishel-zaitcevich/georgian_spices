import React, { memo } from 'react';

import styles from './HomePage.module.scss';
import Hero from '@/components/HomeComponents/Hero/Hero';
// import PopularSpices from '@/components/HomeComponents/PopularSpices/PopularSpices';
import SignatureBlends from '@/components/HomeComponents/SignatureBlends/SignatureBlends';
import CTASection from '@/widgets/CTASection/CTASection';

const HomePage: React.FC = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <SignatureBlends />
      {/* <PopularSpices /> */}
      <CTASection />
    </main>
  );
};

export default memo(HomePage);
