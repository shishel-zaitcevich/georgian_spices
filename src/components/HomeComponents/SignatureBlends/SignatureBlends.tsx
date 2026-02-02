import React, { memo } from 'react';

import BlendCard from './BlendCard';
import styles from './SignatureBlends.module.scss';

import { Product } from '@/types/types';
import { SIGNATURE_BLENDS } from '@/constants/constants';
import SpiceModalCard from '@/components/SpiceInfo/SpiceModalCard';

import { useModal } from '@/context/ModalContext';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const SignatureBlends: React.FC = () => {
  const { openModal } = useModal();

  const handleCardClick = (product: Product) => {
    openModal(<SpiceModalCard product={product} />);
  };

  return (
    <section className={styles.signatureBlends} id="signature-blends">
      <h2 className={styles.title}>Tutustu ainutlaatuisiin sekoituksiimme</h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1.2}
        // navigation
        breakpoints={{
          640: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3.2,
          },
        }}
        className={styles.slider}
      >
        {SIGNATURE_BLENDS.map((blend) => (
          <SwiperSlide key={blend.id}>
            <BlendCard product={blend} onClick={() => handleCardClick(blend)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default memo(SignatureBlends);
