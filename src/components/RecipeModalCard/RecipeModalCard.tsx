import React from 'react';
import styles from './RecipeModalCard.module.scss';
import IngredientsList from './IngredientsList/IngredientsList';
import InstructionsList from './InstructionsList/InstructionsList';

import RecipeHeader from './RecipeHeader/RecipeHeader';
import RecipeMeta from './RecipeMeta/RecipeMeta';
import { modalRecipesData } from './data/modalRecipesData';

interface Props {
  recipeId: string;
}

const RecipeModalCard: React.FC<Props> = ({ recipeId }) => {
  const recipe = modalRecipesData.find((r: { id: string }) => r.id === recipeId);
  if (!recipe) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.leftImage} style={{ backgroundImage: `url("${recipe.image}")` }} />

      <div className={styles.content}>
        <RecipeHeader name={recipe.name} description={recipe.description} tags={recipe.tags} />
        <RecipeMeta meta={recipe.meta} />
        <div className={styles.recipeBody}>
          <IngredientsList ingredients={recipe.ingredients} />
          <InstructionsList steps={recipe.instructions} />
        </div>
      </div>
    </div>
  );
};

export default RecipeModalCard;
