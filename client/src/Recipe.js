

const Recipe = ({title, image, ingredients}) => {
    return (
        <div className="recipe-tab">
            <h1 className="recipe-title">{title}</h1>
            <ol>
                {ingredients.map (ingredient => (
                    <li className="recipe-ingredients" key={ingredient.id}>{ingredient.text}</li>
                ))}
                </ol>
                

            <img className={image} src={image} alt="" />
        </div>
    )
}

export default Recipe;