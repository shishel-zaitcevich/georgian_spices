import React, { useState } from 'react';

import BlendCard from './BlendCard';
import styles from './SignatureBlends.module.scss';

import { Blend } from '@/types/types';
import { SIGNATURE_BLENDS } from '@/constants/constants';
import SpiceModalCard from '@/components/SpiceInfo/SpiceModalCard';
import Modal from '@/widgets/Modal/Modal';

const SignatureBlends: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => setIsOpen(true);
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
            return <BlendCard key={blend.id} blend={convertedBlend} onClick={onClick} />;
          })}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <SpiceModalCard />
      </Modal>
    </section>
  );
};

export default SignatureBlends;
