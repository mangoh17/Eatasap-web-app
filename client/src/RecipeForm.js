import { useState, useEffect } from 'react';

const BASE_URL = 'http://localhost:5050'

const RecipeForm = () => {
  const [recipe, setRecipe] = useState({
      title: '',
      ingredients: ''
  })
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(`${BASE_URL}/api/recipes`);
      const data = await response.json();
      const recipes = data.recipes

      setRecipes(recipes)
    }

    fetchRecipes()
  }, []);

  const addRecipe = async () => {
    try {
      await fetch(`${BASE_URL}/api/recipes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(recipe)
      })
      window.location.reload()
    }  catch(error) {
      setError('Oops...something went wrong')
    } 
};

  const deleteRecipe = async (id) =>{
    try {
      await fetch(`${BASE_URL}/api/recipes/:id`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ input: recipe})
      })

      window.location.reload()
    } catch(error) {
        setError('Oops...something went wrong')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    addRecipe()
  }

  const handleChange = (e) => {
    const inputEL = e.target
    const name = inputEL.name;
    const value = inputEL.value

    setRecipe(recipe => ({...recipe, [name]: value}))
  }
  
  return (
    <div className="Add-recipe">
      <section>
        <h2>Recipes</h2>

        {error && <div><p>{error}</p></div>}

        <ul>
          {recipes.map(recipe => (
            <li key={recipe.id}>
              <span>{recipe.title} - {recipe.ingredients}</span>
              <button onClick={() => deleteRecipe(recipe.id)}>X</button>
            </li>
          ))}
        </ul>
      </section>

      <form className="Recipe-form" onSubmit={handleSubmit}>
        <label>Recipe Title</label>
        <input
          onChange={handleChange}
          name="title"
          value={recipe.title}
          type="text"
          placeholder="Recipe title"
        />

        <label>Ingredients</label>
        <input
          onChange={handleChange}
          name="ingredients"
          value={recipe.ingredients}
          type="text"
          placeholder="Ingredients"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default RecipeForm