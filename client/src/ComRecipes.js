import RecipeForm from "./RecipeForm";
import {useState, useEffect} from "react";

const BASE_URL = 'http://localhost:5050'

const ComRecipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [recipe, setRecipe] = useState()

    const getRecipes = async () => {
      const response = await fetch
      (`${BASE_URL}/`);
      const data = await response.json();
      setRecipes(data.hits);
    }

    useEffect(() => {
      getRecipes();
    }, [])
   

  

    

    return (
        <div>

        
        <h2>Recipes</h2>

       

        <div className="recipe-tab">
          {recipes.map(recipe => (
            <div key={recipe.id}>
              <h2>{recipe.title}</h2>
               <h4>{recipe.ingredients}</h4>
              </div>
            ))}
          </div>
        
      
      </div>
        
    )

    

}
 export default ComRecipes;