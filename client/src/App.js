
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeSearch from "./RecipeSearch";
import './index.css'
import RecipeForm from './RecipeForm'
import Nav from './Nav'
import ComRecipes from './ComRecipes'







const App = () => {
  
  
  return (
    <div className="App">
      <Nav></Nav>
   <BrowserRouter>   
    <Routes>
      <Route path="/search" element={<RecipeSearch />} />
      <Route path="/addrecipe" element={<RecipeForm />} />
      <Route path="browse" element={<ComRecipes />} />

    </Routes>
    </BrowserRouter> 
    
    
   
 

   

   

   
    

    

   
     

     
     
    
      

      
    

    
    </div>
  );
  }

export default App;
