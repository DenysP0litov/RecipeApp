import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRecipe } from "../../api";
import { RecipeDetailed, Ingredient } from "../../types";
import './RecipeInfo.css';

export const RecipeInfo = () => {
    const { recipeId = 0 } = useParams();
    const [ recipe, setRecipe ] = useState<RecipeDetailed>(); 

    const navigate = useNavigate();

    async function loadData() {
        const data = await getRecipe(+recipeId);

        setRecipe(data);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        (recipe 
            ? (<div className="recipe-page">
                <div className="recipe-page__image-and-info">
                    <img 
                        src={recipe.image} 
                        alt={recipe.title}
                        className="recipe-page__img"
                    />
                    <div className="recipe-page__main-info">
                        <h2 className="recipe-page__title">
                            {recipe.title}
                        </h2>
                        <p>Dish types: {recipe.dishTypes.join(', ')}</p>
                        <p>Time to cook: {recipe.readyInMinutes} mins</p>
                        <p>Servings: {recipe.servings}</p>
                        <p>Likes: {recipe.aggregateLikes}</p>
                        <h3 className="recipe-page__subtitle">
                            Summary
                        </h3>
                        <p dangerouslySetInnerHTML={{
                            __html: recipe.summary,
                        }}></p>
                    </div>
                </div>
                <div className="recipe-page__section">
                    <h3 className="recipe-page__subtitle">
                        Ingredients
                    </h3>
                    <ul>
                        {recipe.extendedIngredients.map((ingredient: Ingredient) => (
                            <li>{ingredient.original}</li>
                        ))}
                    </ul>
                </div>
                <div className="recipe-page__section">
                    <h3 className="recipe-page__subtitle">
                        Instructions
                    </h3>
                    <div dangerouslySetInnerHTML={{
                        __html: recipe.instructions,
                    }}></div>
                </div>
                <Button 
                    variant="contained"
                    onClick={() => navigate('/recipes')}
                    className="recipe-page__button"
                >
                    Back to recipe list
                </Button>
            </div>)
            : <div>Please wait...</div>
        )
    );
};