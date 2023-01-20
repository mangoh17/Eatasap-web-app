import { useEffect, useState } from 'react';
import Recipe from "./Recipe";
import Form from "./Form";
import './App.css';

function App() {
  //API information
  const APP_ID = '5de39993';
  const APP_KEY = 'e9ea68aa381f308697b567385ff3868e';

//Use states
  const [recipes, setRecipes] = useState([]);
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
  
    
    
  
  return (
    <div className="App">
      <h1>Eat ASAP app</h1>
      <Form></Form>
      
    </div>
  );
  }

export default App;
