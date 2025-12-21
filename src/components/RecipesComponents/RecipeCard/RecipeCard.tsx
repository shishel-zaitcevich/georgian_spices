import React from 'react';

import Button from '@/shared/Button/Button';
import { Recipe } from '../utils/recipes';

import styles from './RecipeCard.module.scss';

const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image} style={{ backgroundImage: `url(${recipe.image})` }}>
        <div className={styles.rating}>
          <span className="material-symbols-outlined">star</span>
          <span>{recipe.rating}</span>
        </div>
      </div>

      <div className={styles.content}>
        <div>
          <p className={styles.meta}>{recipe.meta}</p>
          <h3>{recipe.title}</h3>
          <p className={styles.desc}>{recipe.description}</p>
        </div>
        <div className={styles.footer}>
          <Button variant="orange" className={styles.button}>
            View Recipe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
