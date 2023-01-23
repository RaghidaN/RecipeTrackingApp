import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // Ability for the <RecipeList /> component to list and delete an existing recipe.
    const addRecipe = (recipeToAdd) => setRecipes([ ...recipes, recipeToAdd]);
    const deleteRecipe = (recipeToDelete) => {
    setRecipes((currentRecipes) => currentRecipes.filter((recipe, index) => index !== recipeToDelete))
  }

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe = {deleteRecipe} />
      <RecipeCreate addRecipe = {addRecipe} />
    </div>
  );
}

export default App;
