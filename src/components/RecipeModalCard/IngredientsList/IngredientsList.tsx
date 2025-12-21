import React from 'react';
import styles from './IngredientsList.module.scss';

const IngredientsList: React.FC = () => (
  <div className={styles.ingredients}>
    <div className={styles.titleRow}>
      <h3>Ingredients</h3>
    </div>
    <ul>
      {[
        '500g All-purpose flour',
        '300g Mixed minced meat (beef & pork)',
        '1 large Onion, finely chopped',
        '2 cloves Garlic, minced',
        '2 tbsp Georgian Spice Blend',
        '1 tsp Chili flakes (optional)',
        'Fresh cilantro, chopped',
      ].map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

export default IngredientsList;
