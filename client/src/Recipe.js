import App from "./App";
import style from "./App.css";


const Recipe = ({title, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map (ingredient => (
                    <li key={ingredient.id}>{ingredient.text}</li>
                ))}
                </ol>
                

            <img className={style.image} src={image} alt="" />
        </div>
    )
}

export default Recipe;