import React from 'react';
import styles from './RecipeHeader.module.scss';
import { RecipeTag } from '../types/modalRecipeType';

interface Props {
  name: string;
  description: string;
  tags: RecipeTag[];
}

const RecipeHeader: React.FC<Props> = ({ name, description, tags }) => (
  <div className={styles.header}>
    <div className={styles.tags}>
      {tags?.map((t) => (
        <span
          key={t.label}
          className={t.type === 'primary' ? styles.primaryTag : styles.secondaryTag}
        >
          {t.label}
        </span>
      ))}
    </div>
    <h1>{name}</h1>
    <p>{description}</p>
  </div>
);

export default RecipeHeader;
