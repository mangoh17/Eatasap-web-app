import Recipe from './Recipe'
import { useState, useEffect} from 'react';
import "./App.css";

const Form = () => {

    const APP_ID = '5de39993';
    const APP_KEY = 'e9ea68aa381f308697b567385ff3868e';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    useEffect(() => {
        getRecipes();
      }, [query])
      
    //Fetch request
      const getRecipes = async () => {
        const response = await fetch
        (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data);
      };
    

    const updateSearch = e => {
        setSearch(e.target.value);
      };
    
      const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("")
      }

    return (
        <div className="search">
        
        <form className="search-box" onSubmit={getSearch}>
        <input className="search-bar" 
        type="text" 
        placeholder="Chicken, peppers etc" 
        onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>

      </form>

      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          instructions={recipe.recipe.instructions}
          />
        ))}
      </div>
      </div>
      
    )





   


 

}
export default Form; 