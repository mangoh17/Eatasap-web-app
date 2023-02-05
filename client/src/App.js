
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeSearch from "./RecipeSearch";
import './index.css'
import Nav from './Nav'
import RecipeForm from './RecipeForm'
import Header from './Header'
import ComRecipes from './ComRecipes'






const App = () => {
  
  
  return (
    <div className="App">
      <Header></Header>
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
