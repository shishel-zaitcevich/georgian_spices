import React from 'react';

import BlendCard from './BlendCard';
import styles from './SignatureBlends.module.scss';
import { SIGNATURE_BLENDS } from '@/constants';
import { Blend } from '@/types';

const SignatureBlends: React.FC = () => {
  return (
    <section className={styles.signatureBlends}>
      <h2 className={styles.title}>Discover Our Signature Blends</h2>

      <div className={styles.scrollContainer}>
        <div className={styles.blendList}>
          {SIGNATURE_BLENDS.map((blend) => {
            const convertedBlend = {
              ...blend,
              id: typeof blend.id === 'string' ? Number(blend.id) : blend.id,
            } as Blend;
            return <BlendCard key={blend.id} blend={convertedBlend} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default SignatureBlends;
