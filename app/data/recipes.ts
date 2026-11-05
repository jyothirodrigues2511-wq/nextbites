export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Basil", "Olive oil"],
    steps: [
      "Heat the oven as high as it will go.",
      "Stretch the dough into a round base.",
      "Spread the sauce and add torn mozzarella.",
      "Bake until the crust blisters, then top with basil and olive oil.",
    ],
  },
  {
    id: "veg-biryani",
    title: "Veg Biryani",
    emoji: "🍛",
    minutes: 60,
    difficulty: "Hard",
    cuisine: "Indian",
    ingredients: ["Basmati rice", "Mixed vegetables", "Yogurt", "Biryani masala", "Fried onions", "Saffron milk"],
    steps: [
      "Parboil the rice with whole spices.",
      "Marinate the vegetables in yogurt and masala, then cook until tender.",
      "Layer the vegetables, rice, fried onions and saffron milk in a heavy pot.",
      "Seal the pot and cook on low heat for 20 minutes.",
    ],
  },
  {
    id: "avocado-toast",
    title: "Avocado Toast",
    emoji: "🥑",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "American",
    ingredients: ["Sourdough bread", "Ripe avocado", "Lemon juice", "Chilli flakes", "Salt"],
    steps: [
      "Toast the bread until golden.",
      "Mash the avocado with lemon juice and salt.",
      "Spread on the toast and finish with chilli flakes.",
    ],
  },
  {
    id: "sushi-rolls",
    title: "Sushi Rolls",
    emoji: "🍣",
    minutes: 50,
    difficulty: "Hard",
    cuisine: "Japanese",
    ingredients: ["Sushi rice", "Nori sheets", "Rice vinegar", "Cucumber", "Avocado", "Soy sauce"],
    steps: [
      "Cook the rice and season it with rice vinegar.",
      "Place a nori sheet on a bamboo mat and spread a thin layer of rice.",
      "Add sliced cucumber and avocado along one edge.",
      "Roll tightly, slice into pieces and serve with soy sauce.",
    ],
  },
  {
    id: "tacos",
    title: "Street Tacos",
    emoji: "🌮",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Mexican",
    ingredients: ["Corn tortillas", "Seasoned beans", "Onion", "Coriander", "Lime", "Salsa"],
    steps: [
      "Warm the tortillas on a dry pan.",
      "Heat the beans with a little spice.",
      "Fill each tortilla and top with onion, coriander and salsa.",
      "Squeeze lime over the top before serving.",
    ],
  },
  {
    id: "pad-thai",
    title: "Pad Thai",
    emoji: "🍜",
    minutes: 30,
    difficulty: "Medium",
    cuisine: "Thai",
    ingredients: ["Rice noodles", "Tofu", "Bean sprouts", "Peanuts", "Tamarind paste", "Lime"],
    steps: [
      "Soak the noodles in warm water until pliable.",
      "Fry the tofu until crisp and set aside.",
      "Toss the noodles in a hot pan with tamarind sauce.",
      "Add the tofu and sprouts, then top with peanuts and lime.",
    ],
  },
  {
    id: "pancakes",
    title: "Fluffy Pancakes",
    emoji: "🥞",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "American",
    ingredients: ["Flour", "Milk", "Egg", "Baking powder", "Sugar", "Butter"],
    steps: [
      "Whisk the dry ingredients together.",
      "Mix in the milk, egg and melted butter until just combined.",
      "Pour small rounds onto a buttered pan.",
      "Flip when bubbles form and cook until golden.",
    ],
  },
  {
    id: "greek-salad",
    title: "Greek Salad",
    emoji: "🥗",
    minutes: 15,
    difficulty: "Easy",
    cuisine: "Greek",
    ingredients: ["Tomatoes", "Cucumber", "Red onion", "Feta", "Olives", "Olive oil", "Oregano"],
    steps: [
      "Chop the tomatoes, cucumber and onion into chunks.",
      "Combine in a bowl with olives.",
      "Top with feta, drizzle with olive oil and sprinkle oregano.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
