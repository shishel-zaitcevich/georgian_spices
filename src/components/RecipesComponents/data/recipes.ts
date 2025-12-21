export interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  meta: string;
  rating: string;
}

export const RECIPES: Recipe[] = [
  {
    id: 1,
    title: 'Spicy Ajika Roast Chicken',
    description:
      'A savory, spicy twist on a classic roast using our authentic red Ajika paste. Perfect for Sunday dinner.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCp6RmrauCzB3CKWLnmtsEpA1D2GZ78_BGKlDZNZaQH8gczKuihJwrt8Ril8eLpvLtwzKsXlaQXzyWNaRykwrSpQDZrE0Lf6W9BDMFA1h1wEe3AT7iqdoNtMyS3AysiHEfd9WXm3usITOu_1Ti0hrz9c0oqhhFS7vnPXW63wzpcrvsfUqj7IPf9sezM3A_r8igoROl_y21FM4UypLDDBWVxk3751j3dyGBbXT3eEZOrMAvBJ84FiSe5fzrBXwSjZnw0rBv_Cowj9LMf',
    meta: 'Main Course • 60 mins',
    rating: '4.8',
  },
  {
    id: 2,
    title: 'Adjaruli Khachapuri',
    description:
      'The iconic Georgian cheese boat. Soft dough, sulguni cheese, and a runny egg yolk.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYb72saOqaowCJhWuUwiZQLnuuiaENj9H0_AJK7zONrSy2BICzrajAb9GjDBwAhECGE9G8CUF_MrMUzZQ5qu6RFb1OZt6-6AwBLcgYpefewdEiM4y5j9rJctMnZCIpaCa3Ic9JWEzVNsCnJ-1--J21L_rqzTBtFSqhPgfpcknDD9PdtowSLzJzrv8qZr0HzJ4t76aCF-XVShA9j23iCZsJpChLqBHvqBhh3uvIUwETFyTvcBotgGaT3SSW49R93VomV5LPEPzJ3JFE',
    meta: 'Baking • 45 mins',
    rating: '4.9',
  },
  {
    id: 3,
    title: 'Traditional Meat Khinkali',
    description:
      'Juicy meat dumplings seasoned with our signature Khmeli Suneli blend and fresh cilantro.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuALCIPgxBrTcoXkZVedMw-YHrqbWDzq_dIlGvutI2ruWKDUKJzisN_zZujaxBme7Fwrg4_SmEoLRsuXeGqtgIlTFSa44IiERbeomelBzubrFchizG3lX3Oc08N7-L5Gjj8crf7tl7GM14sGJ5mX-k3EljivLsx2LKGYmactwVMm9frgA9359KKfVP_61SZxOAttEtiJQHJrZ0JaCpO2qfobHVaM9NI2Nen3saajt8otsZp-95WX9s97DYV-6gDM7dJRtHWZHtohWePG',
    meta: 'Main Course • 90 mins',
    rating: '5.0',
  },
  {
    id: 4,
    title: 'Spinach Pkhali',
    description:
      'A healthy and colorful appetizer made with spinach, walnuts, vinegar, and Blue Fenugreek.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6bXsbBKlL2FPScfnTIOtN1i9eUXBjVRu1LWoYvsxdFsV2fUgjComVZwET7Uj6k73-jTaryxfeoRYATeyJZsmYMCC8NogF1DrBXhLWm-gMOVNBysoj2tyAiOkeBu6dbGl3u_MvSryn2y9TU4qdnpo72oYvm47JTe7cwOntsuJin-_HOPXoMw2nvxFywW-UhXPv2YLwN7c9vJPElqI5u9z-aAlIaPD4kFAIhuAdBi7PmIY5tWOWxw4d5f_14Uc-F8cTwXaFzuZe0p_Q',
    meta: 'Appetizer • 30 mins',
    rating: '4.7',
  },
  {
    id: 5,
    title: 'Lobio Bean Stew',
    description: 'Rich and flavorful red kidney bean stew served in a clay pot with cornbread.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAHFSznr51aoIn-IFq2owjvCnkqWNG0_XBOHQXAjRIG7FmfB-f2cVKZR-Nuu0DkYxS4CfAbj0Zf8pTljPhyEy1rLAnHTNKLghCzDvLFff_iRj4ebQVlzwL4u-6pNmXWxUvqB0irc9_O6f9dVZqISVyG63E5X4LXHySN4XSCOoXAuqsbE9h9NTPf9Xhy_d8J0edbeCgf9rAmNqS9BB6hTdLVZ7ROWuJ1eEwmyss-HekiPqU8sLopiKev5weGXkNHzT-RmOAV_j7kraiG',
    meta: 'Vegan • 50 mins',
    rating: '4.6',
  },
  {
    id: 6,
    title: 'Svanetian Grilled Veggies',
    description:
      'Simple grilled seasonal vegetables elevated with the unique aroma of Svanetian Salt.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ80G6K-Im2FAXaW487axPfX_R2zoKjt-K2eWaFtA6rVmmfDiLQJLPn0NFW4PTOY9_xIleTPw7LCv64QyaUqQ6tzzO02doZ_9INSB8JpivYWIoGNZg7-xcak9hXvtEpNEz0524J3ZMTzthkyDOCeDh_QHLwtVwTSoPht5iTPOgwuzIU0AtArbi6ZO1ykdnJJrAa6AkYFzKLFOZPm-wmSDpcygmGOe91CV-qOweLM-PCBg7TuUCR2TKgpO5XG85mm-nNRlSh3Fl4KHk',
    meta: 'Side Dish • 25 mins',
    rating: '4.5',
  },
  {
    id: 7,
    title: 'Spinach Pkhali',
    description:
      'A healthy and colorful appetizer made with spinach, walnuts, vinegar, and Blue Fenugreek.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6bXsbBKlL2FPScfnTIOtN1i9eUXBjVRu1LWoYvsxdFsV2fUgjComVZwET7Uj6k73-jTaryxfeoRYATeyJZsmYMCC8NogF1DrBXhLWm-gMOVNBysoj2tyAiOkeBu6dbGl3u_MvSryn2y9TU4qdnpo72oYvm47JTe7cwOntsuJin-_HOPXoMw2nvxFywW-UhXPv2YLwN7c9vJPElqI5u9z-aAlIaPD4kFAIhuAdBi7PmIY5tWOWxw4d5f_14Uc-F8cTwXaFzuZe0p_Q',
    meta: 'Appetizer • 30 mins',
    rating: '4.7',
  },
  {
    id: 8,
    title: 'Lobio Bean Stew',
    description: 'Rich and flavorful red kidney bean stew served in a clay pot with cornbread.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAHFSznr51aoIn-IFq2owjvCnkqWNG0_XBOHQXAjRIG7FmfB-f2cVKZR-Nuu0DkYxS4CfAbj0Zf8pTljPhyEy1rLAnHTNKLghCzDvLFff_iRj4ebQVlzwL4u-6pNmXWxUvqB0irc9_O6f9dVZqISVyG63E5X4LXHySN4XSCOoXAuqsbE9h9NTPf9Xhy_d8J0edbeCgf9rAmNqS9BB6hTdLVZ7ROWuJ1eEwmyss-HekiPqU8sLopiKev5weGXkNHzT-RmOAV_j7kraiG',
    meta: 'Vegan • 50 mins',
    rating: '4.6',
  },
  {
    id: 9,
    title: 'Svanetian Grilled Veggies',
    description:
      'Simple grilled seasonal vegetables elevated with the unique aroma of Svanetian Salt.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ80G6K-Im2FAXaW487axPfX_R2zoKjt-K2eWaFtA6rVmmfDiLQJLPn0NFW4PTOY9_xIleTPw7LCv64QyaUqQ6tzzO02doZ_9INSB8JpivYWIoGNZg7-xcak9hXvtEpNEz0524J3ZMTzthkyDOCeDh_QHLwtVwTSoPht5iTPOgwuzIU0AtArbi6ZO1ykdnJJrAa6AkYFzKLFOZPm-wmSDpcygmGOe91CV-qOweLM-PCBg7TuUCR2TKgpO5XG85mm-nNRlSh3Fl4KHk',
    meta: 'Side Dish • 25 mins',
    rating: '4.5',
  },
];
