import React from 'react';
import styles from './SpiceDetails.module.scss';
import { formatPrice } from '../utils/formatPrice';

const SpiceDetails: React.FC = () => {
  return (
    <div className={styles.details}>
      <h2 className={styles.title}>The Tbilisi Essentials Collection</h2>
      <p className={styles.price}>{formatPrice(45)}</p>

      <p className={styles.description}>
        Sourced directly from the Kakheti region, this collection embodies the soul of Georgian
        cuisine. Each blend is handcrafted using traditional sun-drying methods passed down through
        generations of local families.
      </p>

      <div className={styles.infoBlock}>
        <strong>Culinary Uses:</strong>
        <p>Best for Khinkali dumplings, cheese Khachapuri, and grilled pork skewers (Mtsvadi).</p>
      </div>

      <div className={styles.infoBlock}>
        <strong>Origins:</strong>
        <p>Harvested in Kakheti & Svaneti, Georgia.</p>
      </div>

      <div className={styles.spices}>
        <h3>Included Spices</h3>
        <div className={styles.chips}>
          {['Blue Fenugreek', 'Marigold', 'Svanetian Salt', 'Dried Adjika'].map((spice) => (
            <span key={spice} className={styles.chip}>
              {spice}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpiceDetails;
