import RecipeForm from "./RecipeForm";
import {useState, useEffect} from "react";
import axios from 'axios';

const BASE_URL = 'http://localhost:5050'

const ComRecipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [recipe, setRecipe] = useState()
    const [error, setError] = useState();

    const getRecipes = async () => {
      const response = await axios
      (`/recipes`,{
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        } },
   );
      const data = await response.json();
      setRecipes(data.hits);
    }

    useEffect(() => {
      getRecipes();
    }, [])

    const deleteRecipe = async (id) =>{
      try {
        await fetch(`${BASE_URL}/api/recipes/:id`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ input: recipes})
        })
  
        window.location.reload()
      } catch(error) {
          setError('Oops...something went wrong')
      }
    }
   

  

    

    return (
        <div>

        
        <h2>Recipes</h2>

       

        <div className="recipe-tab">
          {recipes.map(recipe => (
            <div key={recipe.id}>
              <h2 className="recipe-title">{recipe.title}</h2>
               <ul className="recipe-ingredients">
                <li>{recipe.ingredients}</li>
                </ul>
                <button onClick={() => deleteRecipe(recipe.id)}>X</button>
              </div>
            ))}
          </div>
        
      
      </div>
        
    )

    

}
 export default ComRecipes;