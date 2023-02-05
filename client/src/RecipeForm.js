import { useState, useEffect } from 'react';

const BASE_URL = 'http://localhost:5050'

const RecipeForm = () => {
  const [recipe, setRecipe] = useState({
      title: '',
      ingredients: ''
  })
  
  const [error, setError] = useState('')

  

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
    <div className="recipe">
      
        <h2 className="h2-header">.</h2>

      

      <form className="form" onSubmit={handleSubmit}>
        <label>Recipe Title</label>
        <div className='input-item'>
        <input
          onChange={handleChange}
          name="title"
          value={recipe.title}
          type="text"
          placeholder="Recipe title"
        />
        </div>

        <div className='input-item'>  
        <label>Ingredients</label>
        <textarea
          onChange={handleChange}
          name="ingredients"
          value={recipe.ingredients}
          type="text"
          placeholder="Ingredients"
        />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default RecipeForm