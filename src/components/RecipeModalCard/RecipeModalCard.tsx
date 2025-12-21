import React from 'react';
import styles from './RecipeModalCard.module.scss';
import IngredientsList from './IngredientsList/IngredientsList';
import InstructionsList from './InstructionsList/InstructionsList';

import RecipeHeader from './RecipeHeader/RecipeHeader';
import RecipeMeta from './RecipeMeta/RecipeMeta';

const RecipeModalCard: React.FC = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.leftImage} />

      <div className={styles.content}>
        <RecipeHeader />
        <RecipeMeta />
        <div className={styles.recipeBody}>
          <IngredientsList />
          <InstructionsList />
        </div>
      </div>
    </div>
  );
};

export default RecipeModalCard;
