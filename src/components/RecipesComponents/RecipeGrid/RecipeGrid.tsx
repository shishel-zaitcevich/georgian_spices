import React, { useState } from 'react';
import styles from './RecipeGrid.module.scss';
import { RECIPES } from '../data/recipes';
import RecipeCard from '../RecipeCard/RecipeCard';
import Button from '@/shared/Button/Button';

const RecipeGrid: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const visibleRecipes = RECIPES.slice(0, visibleCount);
  const hasMore = visibleCount < RECIPES.length;

  return (
    <section className={styles.gridSection}>
      <h2 className={styles.title}>Latest Creations</h2>

      <div className={styles.grid}>
        {visibleRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {hasMore && (
        <div className={styles.loadMore}>
          <Button variant="transparent" onClick={handleLoadMore}>
            Load More Recipes
          </Button>
        </div>
      )}
    </section>
  );
};

export default RecipeGrid;
