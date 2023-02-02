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
        <div className="flex justify-center">
        <div class="mb-3 xl:w-96">
        <form className="form" onSubmit={getSearch}>
        <input className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        type="search" 
        placeholder="Chicken, peppers etc" 
        onChange={updateSearch} />
        <button className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="submit">
          Search
        </button>

      </form>
      </div>

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