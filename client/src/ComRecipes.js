
import {useState, useEffect} from "react";
import axios from 'axios';

const BASE_URL = 'http://localhost:5050/api'

const ComRecipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState();

    const getRecipes = async () => {
      const response = await axios(`${BASE_URL}/recipes`,{
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        } },
   );
      
      setRecipes(response.data.data);
    }

    useEffect(() => {
      getRecipes();
    }, [])

    const deleteRecipe = async (id) =>{
      try {
        await fetch(`${BASE_URL}/recipes/${id}`, {
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

        
        <h2>.</h2>

       

        <div className="recipe-tab">
          {recipes.map(recipe => (
            <div key={recipe.id}>
              <h2 className="text-center">{recipe.title}</h2>
               <ul className="text-center">
                <li>{recipe.ingredients}</li>
                </ul>
                <button className="text-center" onClick={() => deleteRecipe(recipe.id)}>X</button>
              </div>
            ))}
          </div>
        
      
      </div>
        
    )

    

}
 export default ComRecipes;