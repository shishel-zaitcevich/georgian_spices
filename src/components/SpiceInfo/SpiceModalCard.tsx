import React from 'react';

import styles from './SpiceModalCard.module.scss';

import SpiceDetails from './SpiceDetails/SpiceDetails';
import SpiceGallery from './SpiceGallery/SpiceGallery';

const RecepiesPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.modalContent}>
        <SpiceGallery />
        <SpiceDetails />
      </div>
    </div>
  );
};

export default RecepiesPage;
