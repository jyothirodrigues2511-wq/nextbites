import RecipeGrid from "./components/RecipeGrid";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main className="home">
      <h1>Find your next bite. 🍴</h1>

      <p className="subtitle">
        Discover delicious recipes for every mood!
      </p>

      <RecipeGrid recipes={recipes} />
    </main>
  );
}
