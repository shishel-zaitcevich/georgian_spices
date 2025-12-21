import React from 'react';

import Button from '@/shared/Button/Button';
import { Recipe } from '../data/recipes';

import styles from './RecipeCard.module.scss';
import { useModal } from '@/context/ModalContext';
import RecipeModalCard from '@/components/RecipeModalCard/RecipeModalCard';

interface RecieCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecieCardProps> = ({ recipe }) => {
  const { openModal } = useModal();

  const handleCardClick = () => {
    openModal(<RecipeModalCard recipeId={String(recipe?.id)} />);
    console.log(String(recipe?.id), 'recipeId');
  };

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
          <Button variant="orange" className={styles.button} onClick={handleCardClick}>
            View Recipe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
