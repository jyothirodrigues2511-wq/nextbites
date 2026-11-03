export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  {
    id: "pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian"
  },
  {
    id: "pasta",
    title: "Creamy Pasta",
    emoji: "🍝",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "Italian"
  },
  {
    id: "salad",
    title: "Fresh Salad",
    emoji: "🥗",
    minutes: 15,
    difficulty: "Easy",
    cuisine: "Healthy"
  },
  {
    id: "pancakes",
    title: "Pancakes",
    emoji: "🥞",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "American"
  }
];