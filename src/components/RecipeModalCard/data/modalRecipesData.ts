import { ModalRecipe } from '../types/modalRecipeType';

export const modalRecipesData: ModalRecipe[] = [
  {
    id: '3',
    name: 'Khinkali (Georgian Dumplings)',
    description:
      'A classic Georgian dumpling dish made with twisted knobs of dough, stuffed with meat and spices. The key to eating them is to slurp the broth inside first!',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAiX61cXJ82A07l0MPoitPxpsdarXuOxpmjSWKhHAp3Lixno6WYXH-hogEaQU1xw9hxvxN6eENACqvrLjvZggbHaLOIqksWLfzwULLijgIc2SLxgZzIbHxz89BCo9EeEXUjvYzV-E-LL9FV_0bPi0s_Kr1_0CxPFIuzxOstaZ3dIGt8DOKF33Fo8e9g-JK_7ZQewoBtpv3DxZFthslw8crvFg8_iIM4bkZhxFZxkV-WT9KuGUeyzFHlzXLsDE8uBbBBoyxzwfcKcCfz',
    tags: [
      { label: 'Traditional', type: 'primary' },
      { label: 'Meat', type: 'secondary' },
    ],
    meta: {
      prepTime: 45,
      cookTime: 15,
      serves: '4 People',
    },
    ingredients: [
      { amount: '500g', name: 'All-purpose flour' },
      { amount: '300g', name: 'Mixed minced meat (beef & pork)' },
      { amount: '1 large', name: 'Onion, finely chopped' },
      { amount: '2 cloves', name: 'Garlic, minced' },
      {
        amount: '2 tbsp',
        name: 'Georgian Spice Blend',
        highlight: true,
        link: '#',
      },
      { amount: '1 tsp', name: 'Chili flakes (optional)' },
      { name: 'Fresh cilantro, chopped' },
    ],
    instructions: [
      {
        title: 'Prepare the Dough',
        description:
          'Mix flour, salt, and water to form a stiff dough. Knead well for about 5–7 minutes until smooth. Let it rest for 30 minutes covered.',
      },
      {
        title: 'Make the Filling',
        description:
          'In a bowl, mix the minced meat, onions, garlic, and the Georgian Spice Blend. Add water gradually to make the mixture juicy.',
      },
      {
        title: 'Assemble',
        description:
          'Roll out dough circles. Place a tablespoon of filling in the center. Pleat the dough edges together at the top to seal, forming a knob.',
      },
      {
        title: 'Cook',
        description:
          'Boil salted water in a large pot. Gently drop Khinkali in and cook for 10–12 minutes. Serve hot with black pepper.',
      },
    ],
    featuredProduct: {
      name: 'Georgian Spice Blend',
      cta: 'Add Spices to Cart',
    },
  },
];
