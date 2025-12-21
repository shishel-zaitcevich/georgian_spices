import React from 'react';
import styles from './RecipeGrid.module.scss';
import { RECIPES } from '../data/recipes';
import RecipeCard from '../RecipeCard/RecipeCard';
import Button from '@/shared/Button/Button';

const RecipeGrid: React.FC = () => {
  return (
    <section className={styles.gridSection}>
      <h2 className={styles.title}>Latest Creations</h2>
      <div className={styles.grid}>
        {RECIPES.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <div className={styles.loadMore}>
        {/* <button className={styles.loadButton}>Load More Recipes</button> */}
        <Button variant="transparent">Load More Recipes</Button>
      </div>
    </section>
  );
};

export default RecipeGrid;
