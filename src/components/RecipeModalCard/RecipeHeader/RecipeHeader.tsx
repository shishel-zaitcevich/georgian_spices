import React from 'react';
import styles from './RecipeHeader.module.scss';

const RecipeHeader: React.FC = () => (
  <div className={styles.header}>
    <div className={styles.tags}>
      <span className={styles.primaryTag}>Traditional</span>
      <span className={styles.secondaryTag}>Meat</span>
    </div>
    <h1>Khinkali (Georgian Dumplings)</h1>
    <p>
      A classic Georgian dumpling dish made with twisted knobs of dough, stuffed with meat and
      spices. The key to eating them is to slurp the broth inside first!
    </p>
  </div>
);

export default RecipeHeader;
