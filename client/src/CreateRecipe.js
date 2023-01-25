import RecipeForm from "./RecipeForm";
import {useState} from "react";


const CreateRecipe = () => {

    const [formValues, setFormValues] = useState( {title: '', ingredients: ''});

    //form submit handler

    return (
        <RecipeForm initialValues={formValues}>
            
        </RecipeForm>
    )

    

}
