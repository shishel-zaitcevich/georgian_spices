import React from 'react';

import styles from './SignatureBlends.module.scss';
import { Blend } from '@/types';

interface BlendCardProps {
  blend: Blend;
}

const BlendCard: React.FC<BlendCardProps> = ({ blend }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image} style={{ backgroundImage: `url("${blend.image}")` }}></div>

      <div className={styles.content}>
        <div>
          <p className={styles.name}>{blend.name}</p>
          <p className={styles.description}>{blend.description}</p>
        </div>

        <button className={styles.button}>View Blend</button>
      </div>
    </div>
  );
};

export default BlendCard;
