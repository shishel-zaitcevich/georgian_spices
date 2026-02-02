import React, { memo } from 'react';

import SpiceGallery from './SpiceGallery/SpiceGallery';
import SpiceDetails from './SpiceDetails/SpiceDetails';
import { Product } from '@/types/types';

import styles from './SpiceModalCard.module.scss';

type SpiceModalCardProps = {
  product: Product;
};

const SpiceModalCard: React.FC<SpiceModalCardProps> = ({ product }) => {
  return (
    <div className={styles.page}>
      <div className={styles.modalContent}>
        <SpiceGallery />
        <SpiceDetails product={product} />
      </div>
    </div>
  );
};

export default memo(SpiceModalCard);
