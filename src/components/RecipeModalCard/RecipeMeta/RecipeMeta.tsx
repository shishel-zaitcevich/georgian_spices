import React from 'react';
import styles from './RecipeMeta.module.scss';
import { formatTime } from '../utils/formatTime';
import { RecipeMetaInfo } from '../types/modalRecipeType';

interface Props {
  meta: RecipeMetaInfo;
}

const RecipeMeta: React.FC<Props> = ({ meta }) => {
  if (!meta) {
    return <div className={styles.meta}>Loading...</div>;
  }

  return (
    <div className={styles.meta}>
      <div>
        <span className="material-symbols-outlined">schedule</span>
        <p>Prep</p>
        <strong>{formatTime(meta.prepTime)}</strong>
      </div>
      <div>
        <span className="material-symbols-outlined">skillet</span>
        <p>Cook</p>
        <strong>{formatTime(meta.cookTime)}</strong>
      </div>
      <div>
        <span className="material-symbols-outlined">group</span>
        <p>Serves</p>
        <strong>{meta.serves}</strong>
      </div>
    </div>
  );
};

export default RecipeMeta;
