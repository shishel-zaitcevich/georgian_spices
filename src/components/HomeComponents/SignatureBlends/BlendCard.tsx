import React, { memo } from 'react';

import styles from './SignatureBlends.module.scss';
import { Product } from '@/types/types';
import Button from '@/shared/Button/Button';

export interface BlendCardProps {
  product: Product;
  onClick?: () => void;
}

const BlendCard: React.FC<BlendCardProps> = ({ product, onClick }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image} style={{ backgroundImage: `url("${product.image}")` }}></div>

      <div className={styles.content}>
        <div>
          <p className={styles.name}>{product.name}</p>
          <p className={styles.description}>{product.description}</p>
        </div>

        {/* <button className={styles.button}>View Blend</button> */}
        <Button variant="outlined" onClick={onClick}>
          View Blend
        </Button>
      </div>
    </div>
  );
};

export default memo(BlendCard);
