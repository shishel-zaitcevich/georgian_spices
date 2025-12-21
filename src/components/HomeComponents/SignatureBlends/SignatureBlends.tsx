import React from 'react';

import BlendCard from './BlendCard';
import styles from './SignatureBlends.module.scss';

import { Blend } from '@/types/types';
import { SIGNATURE_BLENDS } from '@/constants/constants';
import SpiceModalCard from '@/components/SpiceInfo/SpiceModalCard';

import { useModal } from '@/context/ModalContext';

const SignatureBlends: React.FC = () => {
  const { openModal } = useModal();

  const handleCardClick = () => {
    openModal(<SpiceModalCard />);
  };

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
            return <BlendCard key={blend.id} blend={convertedBlend} onClick={handleCardClick} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default SignatureBlends;
