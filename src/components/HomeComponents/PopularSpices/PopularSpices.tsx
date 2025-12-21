import React from 'react';

import SpiceCard from './SpiceCard';
import styles from './PopularSpices.module.scss';

import { Product } from '@/types/types';
import { POPULAR_SPICES } from '@/constants/constants';

interface PopularSpicesProps {
  onAddToCart?: (p: Product) => void;
}

const PopularSpices: React.FC<PopularSpicesProps> = ({ onAddToCart }) => {
  return (
    <section className={styles.popularSpices} id="popular-spices">
      <h2 className={styles.title}>Our Most Popular Spices</h2>

      <div className={styles.grid}>
        {POPULAR_SPICES.map((spice) => (
          <SpiceCard
            key={spice.id}
            spice={spice}
            // Only pass onAddToCart if it's defined, to match non-optional props
            {...(onAddToCart ? { onAddToCart } : {})}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularSpices;
