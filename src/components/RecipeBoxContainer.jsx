import RecipeBox from "./RecipeBox";
import RecipeData from "../constants/RecipeData"
import "./../styles/RecipeBoxContainer.css"

const RecipeBoxContainer = ({ filterAuthor=false }) => {

    const limitedArray = RecipeData.slice(0,6);

    const uniqueIds = ([...new Set(RecipeData.map(recipe => recipe.userId))]).sort((a,z) => a > z);
    const recipeDataById = []

    for (const id of uniqueIds) {
        recipeDataById.push({
            idTitle: id,
            recipes: RecipeData.filter((o) => o.userId === id),
        })
    }

    return (
        <div className="RecipeBoxContainer">
            <div>
                {filterAuthor ? 
                    recipeDataById.map(o => (
                        <div>
                            <h3>{ o.idTitle }</h3>
                            <h4>See all recipes from {o.idTitle}!</h4>
                            {o.recipes.map(recipe => (
                                <RecipeBox 
                                    author={ recipe.userId }
                                    title={ recipe.title }
                                    subtitle={ recipe.id }
                                    text={ recipe.body }
                                    showAuthor={ filterAuthor }
                                />
                            ))}
                        </div>
                    ))
                : 
                    limitedArray.map(recipe => (
                        <RecipeBox 
                            author={ recipe.userId }
                            title={ recipe.title }
                            subtitle={ recipe.id }
                            text={ recipe.body }
                            showAuthor={ filterAuthor }
                        />
                    ))
                }
            </div>
        </div>
    );
} 

export default RecipeBoxContainer