export interface RecipeTag {
  label: string;
  type: 'primary' | 'secondary';
}

export interface Ingredient {
  amount?: string;
  name: string;
  highlight?: boolean;
  link?: string;
}

export interface InstructionStep {
  title: string;
  description: string;
}

export interface RecipeMetaInfo {
  prepTime: number; // minutes
  cookTime: number; // minutes
  serves: string;
}

export interface ModalRecipe {
  id: string;
  name: string;
  description: string;
  tags: RecipeTag[];
  image: string;
  meta: RecipeMetaInfo;
  ingredients: Ingredient[];
  instructions: InstructionStep[];
  featuredProduct?: {
    name: string;
    cta: string;
  };
}
