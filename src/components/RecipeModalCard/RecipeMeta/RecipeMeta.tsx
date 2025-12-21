import React from 'react';
import styles from './RecipeMeta.module.scss';
import { formatTime } from '../utils/formatTime';

const RecipeMeta: React.FC = () => (
  <div className={styles.meta}>
    <div>
      <span className="material-symbols-outlined">schedule</span>
      <p>Prep</p>
      <strong>{formatTime(45)}</strong>
    </div>
    <div>
      <span className="material-symbols-outlined">skillet</span>
      <p>Cook</p>
      <strong>{formatTime(15)}</strong>
    </div>
    <div>
      <span className="material-symbols-outlined">group</span>
      <p>Serves</p>
      <strong>4 People</strong>
    </div>
  </div>
);

export default RecipeMeta;
