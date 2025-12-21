import React from 'react';

import styles from './SignatureBlends.module.scss';
import { Blend } from '@/types/types';
import Button from '@/shared/Button/Button';

interface BlendCardProps {
  blend: Blend;
  onClick?: () => void;
}

const BlendCard: React.FC<BlendCardProps> = ({ blend, onClick }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image} style={{ backgroundImage: `url("${blend.image}")` }}></div>

      <div className={styles.content}>
        <div>
          <p className={styles.name}>{blend.name}</p>
          <p className={styles.description}>{blend.description}</p>
        </div>

        {/* <button className={styles.button}>View Blend</button> */}
        <Button variant="outlined" onClick={onClick}>
          View Blend
        </Button>
      </div>
    </div>
  );
};

export default BlendCard;
