import React, { memo } from 'react';

import styles from './RecipesPage.module.scss';
import HeroSection from '@/components/RecipesComponents/HeroSection/HeroSection';
import RecipeGrid from '@/components/RecipesComponents/RecipeGrid/RecipeGrid';

const RecipesPage: React.FC = () => {
  return (
    <main className={styles.page}>
      <HeroSection />
      <RecipeGrid />
    </main>
  );
};

export default memo(RecipesPage);
