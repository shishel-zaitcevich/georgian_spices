import React from 'react';

import styles from './PopularSpices.module.scss';
import { Product } from '@/types/types';

interface SpiceCardProps {
  spice: Product;
  onAddToCart?: (p: Product) => void;
}

const SpiceCard: React.FC<SpiceCardProps> = ({ spice, onAddToCart }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image} style={{ backgroundImage: `url("${spice.image}")` }}></div>

      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <p className={styles.name}>{spice.name}</p>
            <p className={styles.description}>{spice.description}</p>
          </div>
          <p className={styles.price}>${spice.price.toFixed(2)}</p>
        </div>

        <button
          className={styles.button}
          onClick={() => onAddToCart?.(spice)}
          disabled={!onAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SpiceCard;
