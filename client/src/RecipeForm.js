

const RecipeForm = () => {


    return (
        <div className="Add-recipe">
            <form className="Recipe-form">
                <label>Recipe Title</label>
                <input
                name="title"
                type="text"
                placeholder="Recipe title"
                />
                <label>Ingredients</label>
                <input
                name="ingredients"
                type="text"
                placeholder="Ingredients"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default RecipeForm