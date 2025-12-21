import React from 'react';
import styles from './IngredientsList.module.scss';
import { Ingredient } from '../types/modalRecipeType';

interface Props {
  ingredients?: Ingredient[];
}

const IngredientsList: React.FC<Props> = ({ ingredients = [] }) => (
  <div className={styles.ingredients}>
    <div className={styles.titleRow}>
      <h3>Ingredients</h3>
    </div>
    <ul>
      {ingredients.map((item, i) => (
        <li key={i} className={item.highlight ? styles.highlight : undefined}>
          {/* {item.highlight && <span className="material-symbols-outlined">face_shake</span>} */}
          <span>
            {item.amount && <strong>{item.amount} </strong>}
            {item.name}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default IngredientsList;
