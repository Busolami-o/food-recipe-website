// Recipe Database - All recipes stored with unique IDs
const recipeDatabase = {
  jollof: {
    id: 'jollof',
    title: 'Jollof Rice',
    description: 'The famous West-African party dish.',
    image: 'images/Jollof Rice .jpg',
    ingredients: [
      '4 cups Rice',
      'Tomatoes & pepper mix',
      'Onions',
      'Seasoning cubes',
      'Vegetable oil',
      'Salt'
    ],
    steps: [
      'Blend tomatoes and pepper.',
      'Fry mixture in oil with onions.',
      'Add stock, salt and seasoning.',
      'Add rice and cook until soft.'
    ]
  },

  ofada: {
    id: 'ofada',
    title: 'Ofada Stew',
    description: 'A rich, spicy, and flavorful Nigerian stew made with green peppers, assorted meats, and locally bleached palm oil. It\'s usually served with Ofada rice, a traditional unpolished rice from Nigeria, giving it a unique taste and aroma. This stew is beloved for its bold flavors and slightly smoky, aromatic finish.',
    image: 'images/Ofada Stew.jpg',
    ingredients: [
      'Green bell peppers',
      'Green rodo',
      'Onions',
      'Seasoning cubes and salt',
      'Palm oil',
      'Assorted meats (shaki, beef, ponmo)',
      'Boiled eggs',
      'Locust beans (Iru)'
    ],
    steps: [
      'Blend peppers roughly (not smooth).',
      'Bleach palm oil: heat palm oil on low heat until it changes color; do not let it smoke too much.',
      'Add chopped onions and fry till soft.',
      'Add iru and stir for 1 to 2 minutes.',
      'Pour in the blended pepper mix and fry until the oil floats on top.',
      'Add cooked meats + stock and season with cubes, salt, and crayfish if using.',
      'Cook until thick and rich.',
      'Add boiled eggs and simmer for 2 minutes before serving.',
      'Serve with Ofada rice.'
    ]
  },

  moinmoin: {
    id: 'moinmoin',
    title: 'Moin Moin',
    description: 'A steamed bean pudding made from blended beans, peppers, and onions, often enriched with eggs or fish. Soft, flavorful, and nutritious a Nigerian breakfast or side dish favorite.',
    image: 'images/moin moin.jpg',
    ingredients: [
      'Peeled beans',
      'Pepper/onion blend',
      'Vegetable oil',
      'Seasoning & salt',
      'Boiled egg and fish'
    ],
    steps: [
      'Blend beans with pepper and onion smoothly.',
      'Add oil, seasoning, salt.',
      'Pour into bowls, leaves or nylons and add egg or fish if using.',
      'Steam for 45–60 mins until firm.'
    ]
  },

  akara: {
    id: 'akara',
    title: 'Akara',
    description: 'Deep-fried bean cakes that are crisp on the outside and soft inside. Popular as a breakfast snack or street food in Nigeria.',
    image: 'images/akara.jpg',
    ingredients: [
      'Peeled beans',
      'Pepper',
      'Onion',
      'Salt',
      'Vegetable oil for frying'
    ],
    steps: [
      'Blend peeled beans with little water until thick and smooth.',
      'Pour into a bowl, add chopped pepper and onion.',
      'Add salt to taste and mix well.',
      'Heat oil in a deep pan until hot.',
      'Scoop batter into oil in small balls.',
      'Fry until golden brown on all sides.',
      'Remove and drain on paper towels.'
    ]
  },

  cfr: {
    id: 'cfr',
    title: 'Chinese Fried Rice',
    description: 'A colorful and flavorful fried rice dish cooked with vegetables, eggs, soy sauce, and optional proteins like chicken or shrimp. It\'s easy to customize and is a quick, satisfying meal that blends aromatic flavors with the crunch of fresh vegetables, making it a favorite across Nigeria and the world.',
    image: 'images/Chinese fried rice.jpg',
    ingredients: [
      'Cooked rice (preferably from the previous day)',
      'Carrots, peas, sweet corn',
      'Spring onions and Onions',
      'Seasoning cubes',
      'Vegetable oil',
      'Salt',
      'Soy sauce (optional)',
      'Eggs (optional)',
      'Cooked chicken, shrimp, or other protein (optional)'
    ],
    steps: [
      'Heat oil in a pan, add beaten eggs, scramble, and remove.',
      'Add more oil, sauté onions and veggies for 2 to 3 mins.',
      'Add cooked rice and stir well.',
      'Add soy sauce (little at a time) and seasoning.',
      'Add cooked protein and scrambled eggs if using.',
      'Stir-fry for another 5 mins and serve hot.'
    ]
  },

  crispychickenwings: {
    id: 'crispychickenwings',
    title: 'Crispy Chicken Wings',
    description: 'Golden, crunchy, and seasoned to perfection, these wings are fried until crispy on the outside while remaining juicy and tender inside. Perfect as a snack or party appetizer.',
    image: 'images/crispy chicken .jpg',
    ingredients: [
      'Chicken Wings',
      'Pepper',
      'Corn Flour',
      'Seasoning cubes',
      'Vegetable oil',
      'Salt'
    ],
    steps: [
      'Wash wings and pat dry.',
      'Season with salt, Seasoning cubes, garlic, ginger and pepper.',
      'Add 1-2 tbsp cornflour and mix.',
      'Heat oil and fry on medium heat until golden and crispy.',
      'Drain on paper towels and serve hot.'
    ]
  },

  eforiro: {
    id: 'eforiro',
    title: 'Efo Riro (Vegetable Soup)',
    description: 'A hearty Nigerian soup made with fresh leafy vegetables, palm oil, assorted meats, and spices. Rich in flavor and nutrients, it\'s typically served with rice or swallow like pounded yam.',
    image: 'images/Efo riro.jpg',
    ingredients: [
      'Ugwu',
      'Blended pepper mix with onions',
      'Meat, Fish, Ponmo, Stockfish and any other protein of your choice',
      'Seasoning cubes and salt',
      'Palm oil',
      'Locust Beans'
    ],
    steps: [
      'Boil meat with seasoning.',
      'Heat palm oil, add iru, then pepper mix and fry well.',
      'Add meat, stock, crayfish, and cook 5 to 7 mins.',
      'Add washed vegetables.',
      'Stir and cook for 3 to 5 mins and do not overcook.'
    ]
  },

  beefstew: {
    id: 'beefstew',
    title: 'Nigerian Beef Stew',
    description: 'A classic, thick, tomato-based stew cooked with tender chunks of beef, spices, and herbs. It\'s a versatile dish, perfect for pairing with rice, yam, or bread.',
    image: 'images/Nigerian Beef Stew.jpg',
    ingredients: [
      'Beef',
      'Blended Tomatoes, pepper and onions',
      'Tomato paste',
      'Seasoning cubes and salt',
      'Vegetable oil',
      'Garlic/ginger'
    ],
    steps: [
      'Season beef and boil.',
      'Heat oil, fry paste for 2 mins, then add pepper blend.',
      'Fry until thick and no longer sour.',
      'Add beef, stock, season again, simmer 10 mins.'
    ]
  },

  ogbono: {
    id: 'ogbono',
    title: 'Ogbono Soup',
    description: 'A traditional Nigerian soup thickened with ogbono seeds, giving it a smooth, slightly slimy texture. Cooked with meats, fish, and leafy vegetables, it\'s delicious with pounded yam or fufu.',
    image: 'images/ogbono.jpg',
    ingredients: [
      'Ogbono powder',
      'Palm oil',
      'Meat, fish, stockfish',
      'Ugu or bitterleaf',
      'Seasoning & salt',
      'Pepper'
    ],
    steps: [
      'Boil meat.',
      'Heat palm oil lightly, add ogbono and melt.',
      'Add meat stock gradually while stirring to thicken.',
      'Add meats, pepper, crayfish.',
      'Add vegetables and boil for 3 mins.'
    ]
  },

  ohasoup: {
    id: 'ohasoup',
    title: 'Oha Soup',
    description: 'A traditional soup from the southeastern part of Nigeria, made with tender oha leaves, cocoyam paste, assorted meats, and spices. Rich, aromatic, and perfect with fufu or pounded yam.',
    image: 'images/Oha Soup.jpg',
    ingredients: [
      'Oha leaves',
      'Cocoyam paste or ofe thickener',
      'Palm oil',
      'Meat, stockfish and crayfish',
      'Uziza leaves',
      'Seasoning & salt'
    ],
    steps: [
      'Boil meats until soft.',
      'Add palm oil and cocoyam paste to the pot.',
      'Add crayfish, pepper, stockfish.',
      'Add uziza leaves.',
      'Finally add oha leaves and boil for 3 mins.'
    ]
  },

  stirfryspag: {
    id: 'stirfryspag',
    title: 'Stir Fry Spaghetti',
    description: 'A quick and colorful pasta dish sautéed with vegetables, meats, and a savory sauce. Fast, flavorful, and perfect for lunch or dinner.',
    image: 'images/Stirfryspag.jpg',
    ingredients: [
      'Spaghetti',
      'Veggies (carrot, pepper, onion, cabbage)',
      'Sausages/shredded chicken',
      'Soy sauce',
      'Seasoning & spices',
      'Vegetable oil'
    ],
    steps: [
      'Parboil spaghetti with salt; drain.',
      'Stir-fry sausage/chicken in oil.',
      'Add veggies and seasoning.',
      'Add spaghetti + soy sauce.',
      'Toss for 2 to 3 mins.'
    ]
  },

  peppersoup: {
    id: 'peppersoup',
    title: 'Peppersoup',
    description: 'A spicy, aromatic Nigerian soup made with your choice of meat or fish, peppers, and local spices. Light, warming, and perfect for any occasion.',
    image: 'images/peppersoup.jpg',
    ingredients: [
      'Vegetable oil for frying',
      'Pepper soup spice',
      'Pepper',
      'Onion',
      'Seasoning cubes & salt',
      'Scent leaves or basil'
    ],
    steps: [
      'Wash protein properly. Season with salt, cubes, onions, pepper; boil.',
      'Add pepper soup spice once meat starts to soften.',
      'Add more water if needed and allow to cook well.',
      'Add scent leaves and boil for 2 minutes.',
      'Serve hot'
    ]
  },

  seafoodpasta: {
    id: 'seafoodpasta',
    title: 'Seafood Pasta',
    description: 'Pasta tossed with a medley of seafood, creamy or tomato-based sauce, and herbs. Elegant, flavorful, and perfect for seafood lovers.',
    image: 'images/seafoodpasta.jpg',
    ingredients: [
      'Pasta (spaghetti, linguine, or penne)',
      'Shrimps, calamari, mussels, or fish',
      'Butter or olive oil',
      'Garlic',
      'Tomatoes or cooking cream',
      'Seasoning (salt, cubes, oregano, black pepper)'
    ],
    steps: [
      'Boil pasta with salt until firm and drain.',
      'Add garlic in butter or oil.',
      'Add seafood and stir till lightly cooked.',
      'Add tomato sauce or cream and season.',
      'Add pasta into the sauce and toss.',
      'Cook for 2 to 3 minutes and serve.'
    ]
  },

  shawarma: {
    id: 'shawarma',
    title: 'Shawarma',
    description: 'A popular street food of spiced, grilled meat wrapped with vegetables in soft flatbread. Flavorful, juicy, and perfect for a quick meal.',
    image: 'images/shawarma.jpg',
    ingredients: [
      'Chicken breast',
      'Shawarma bread/wrap',
      'Cabbage and carrot',
      'Ketchup, mayonnaise, chili sauce',
      'Sausages'
    ],
    steps: [
      'Season chicken and pan-fry or grill till done. Slice into strips.',
      'Fry the Sausages.',
      'Mix mayo + ketchup + chili to form shawarma sauce.',
      'Spread sauce on the wrap.',
      'Add chicken, sausages, cabbage, carrot.',
      'Wrap it up tightly and toast in a pan.'
    ]
  },

  pizza: {
    id: 'pizza',
    title: 'Pepperoni Pizza',
    description: 'A cheesy, oven-baked pizza topped with tangy tomato sauce and spicy pepperoni slices. Crispy edges with a soft, flavorful center.',
    image: 'images/pizza.jpg',
    ingredients: [
      'Pizza dough',
      'Pizza sauce',
      'Mozzarella cheese',
      'Pepperoni slices'
    ],
    steps: [
      'Roll out your dough on a floured surface.',
      'Spread pizza sauce evenly.',
      'Add mozzarella cheese and top with pepperoni.',
      'Bake in a very hot oven (200 to 250°C) for 12 to 15 mins.'
    ]
  },

  puffpuff: {
    id: 'puffpuff',
    title: 'Puff Puff',
    description: 'Puff Puff is a soft, golden, deep-fried dough ball that\'s slightly sweet. It\'s a popular Nigerian snack often served at parties, street stalls, or breakfast. Crispy on the outside and fluffy inside, it\'s a simple comfort food that\'s loved by kids and adults alike.',
    image: 'images/puff.jpg',
    ingredients: [
      '2 cups flour',
      '1/2 cup sugar',
      '1 tbsp yeast',
      'Warm water',
      'A pinch of salt',
      'Oil for frying'
    ],
    steps: [
      'Mix flour, sugar, salt, and yeast in a bowl.',
      'Add warm water gradually until the batter is thick but stretchy.',
      'Cover and allow to rise for 45 to 60 minutes.',
      'Heat oil in a deep pot.',
      'Scoop batter into hot oil and fry until golden brown.',
      'Drain on paper towels and serve warm.'
    ]
  },

  beefburger: {
    id: 'beefburger',
    title: 'Beef Burger',
    description: 'Juicy, seasoned beef patties sandwiched in soft buns with fresh vegetables and cheese. A classic comfort food loved worldwide.',
    image: 'images/beef burger .jpg',
    ingredients: [
      'Minced beef',
      'Salt, pepper, garlic powder',
      'Burger buns',
      'Cheese slices',
      'Lettuce, tomato, onion',
      'Oil or butter'
    ],
    steps: [
      'Form minced beef into patties; season both sides.',
      'Pan-sear patties until cooked.',
      'Place cheese on patty to melt.',
      'Toast buns lightly in butter.',
      'Assemble: bottom bun → lettuce → patty → tomato → onion → top bun.'
    ]
  },

  meatpie: {
    id: 'meatpie',
    title: 'Meat Pie',
    description: 'Golden, flaky pastry filled with seasoned minced meat, potatoes, and carrots. A Nigerian snack favorite, perfect for parties or lunchboxes.',
    image: 'images/meatpie.jpg',
    ingredients: [
      'For dough: flour, cold butter, salt, cold water',
      'For filling: minced meat, potatoes (diced), carrots, onion, seasoning',
      'Vegetable oil',
      'Egg (for egg wash)'
    ],
    steps: [
      'Mix flour + butter until crumbly. Add water to form a firm dough.',
      'Cook minced meat with onion, potatoes, carrots, seasoning.',
      'Roll dough flat, cut into circles.',
      'Add filling and fold, sealing edges with a fork.',
      'Brush with egg wash.',
      'Bake for 30 to 35 mins until golden.'
    ]
  },

  grilledfish: {
    id: 'grilledfish',
    title: 'Grilled Fish',
    description: 'Whole fish seasoned and grilled to perfection, with crispy skin and tender flesh. Served with sides, it\'s a flavorful, healthy choice.',
    image: 'images/grilledfish.jpg',
    ingredients: [
      'Tilapia or catfish',
      'Pepper mix (blended pepper, onion, garlic, ginger)',
      'Seasoning & salt',
      'Vegetable oil',
      'Lemon (optional)'
    ],
    steps: [
      'Clean fish and make slits to allow seasoning in.',
      'Rub pepper mix generously over and inside fish.',
      'Marinate 30 minutes to 1 hour.',
      'Grill on hot charcoal or grill pan until cooked through.',
      'Serve with sliced onions or lemon.'
    ]
  },

  chococake: {
    id: 'chococake',
    title: 'Chocolate Cake',
    description: 'Moist, rich, and decadent, this cake is flavored with cocoa and often layered or frosted. A favorite dessert for birthdays, celebrations, or any sweet craving.',
    image: 'images/Chococake.jpg',
    ingredients: [
      'Flour',
      'Cocoa powder',
      'Sugar',
      'Eggs',
      'Milk',
      'Butter or oil',
      'Baking powder',
      'Vanilla extract'
    ],
    steps: [
      'Mix all dry ingredients in a bowl (flour, cocoa, sugar, baking powder).',
      'Add wet ingredients (eggs, milk, melted butter, vanilla).',
      'Mix until smooth and lump-free.',
      'Grease baking pan and pour in batter.',
      'Bake at 180°C (350°F) for 30-35 minutes or until a toothpick comes out clean.'
    ]
  }
};

/**
 * Retrieves recipe information by recipe ID
 * @param {string} recipeId - The unique ID of the recipe
 * @returns {object|null} - Returns the recipe object if found, null otherwise
 */
function getRecipeById(recipeId) {
  if (!recipeId) {
    console.error('Recipe ID is required');
    return null;
  }

  const recipe = recipeDatabase[recipeId];

  if (!recipe) {
    console.warn(`Recipe with ID "${recipeId}" not found in database`);
    return null;
  }

  return recipe;
}

/**
 * Retrieves all recipes from the database
 * @returns {object} - Returns all recipes
 */
function getAllRecipes() {
  return recipeDatabase;
}

/**
 * Retrieves a list of all recipe IDs
 * @returns {array} - Array of all recipe IDs
 */
function getAllRecipeIds() {
  return Object.keys(recipeDatabase);
}

/**
 * Retrieves recipe count
 * @returns {number} - Total number of recipes
 */
function getRecipeCount() {
  return Object.keys(recipeDatabase).length;
}

/**
 * Searches recipes by title (case-insensitive)
 * @param {string} searchTerm - The search term
 * @returns {array} - Array of matching recipes
 */
function searchRecipesByTitle(searchTerm) {
  if (!searchTerm) {
    return [];
  }

  const term = searchTerm.toLowerCase();
  return Object.values(recipeDatabase).filter(recipe =>
    recipe.title.toLowerCase().includes(term)
  );
}

/**
 * Retrieves recipe ingredients by ID
 * @param {string} recipeId - The unique ID of the recipe
 * @returns {array|null} - Returns the ingredients array if found, null otherwise
 */
function getRecipeIngredients(recipeId) {
  const recipe = getRecipeById(recipeId);
  return recipe ? recipe.ingredients : null;
}

/**
 * Retrieves recipe steps by ID
 * @param {string} recipeId - The unique ID of the recipe
 * @returns {array|null} - Returns the steps array if found, null otherwise
 */
function getRecipeSteps(recipeId) {
  const recipe = getRecipeById(recipeId);
  return recipe ? recipe.steps : null;
}
