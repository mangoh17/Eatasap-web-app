
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
      
   <BrowserRouter>   
    <Routes>
     
      <Route path="/search" element={<RecipeSearch />} />
      <Route path="/community" element={<RecipeForm />} />

    </Routes>
    </BrowserRouter> 
    
    <Header></Header>
   
  <ComRecipes></ComRecipes>

   

   

   
    

    

   
     

     
     
    
      

      
    

    
    </div>
  );
  }

export default App;
