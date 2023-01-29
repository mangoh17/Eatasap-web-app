

const Recipe = ({title, image, ingredients}) => {
    return (
        <div className="recipe">
            <h1>{title}</h1>
            <ol>
                {ingredients.map (ingredient => (
                    <li key={ingredient.id}>{ingredient.text}</li>
                ))}
                </ol>
                

            <img className={image} src={image} alt="" />
        </div>
    )
}

export default Recipe;