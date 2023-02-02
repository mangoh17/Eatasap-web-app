
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeSearch from "./RecipeSearch";
import './index.css'
import Nav from './Nav'
import RecipeForm from './RecipeForm'






const App = () => {
  
  
  return (
    <div className="App">
   {<BrowserRouter>   
    <Routes>
     
      <Route path="/search" element={<RecipeSearch />} />
      <Route path="/community" element={<RecipeForm />} /> 

    </Routes>
    </BrowserRouter>   }

    <Nav></Nav>
     
     
    
      <h1 className="text-green-600">Eat ASAP app</h1>
    

    
    </div>
  );
  }

export default App;
