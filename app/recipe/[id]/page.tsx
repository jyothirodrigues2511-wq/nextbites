import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";

export function generateStaticParams() {
  return recipes.map((recipe) => ({ id: recipe.id }));
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);
  if (!recipe) notFound();

  return (
    <main className="detail">
      <Link href="/" className="back">
        ← All recipes
      </Link>
      <div className="detail-art">{recipe.emoji}</div>
      <h1>{recipe.title}</h1>
      <div className="card-meta">
        <span>⏱ {recipe.minutes} min</span>
        <span>{recipe.difficulty}</span>
        <span>{recipe.cuisine}</span>
      </div>

      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Steps</h2>
      <ol>
        {recipe.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </main>
  );
}
