import { useEffect, useState } from 'react';
import Recipe from "./Recipe";
import Form from "./Form";
import './App.css';

const App = () => {
  //API information
  const APP_ID = '5de39993';
  const APP_KEY = 'e9ea68aa381f308697b567385ff3868e';

//Use states
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
    <div className="App">
      <h1>Eat ASAP app</h1>
      
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
  );
  }

export default App;
