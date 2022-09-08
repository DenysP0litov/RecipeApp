import { Button } from '@mui/material';
import { useState, useEffect } from "react";
import { getRandomRecipes } from "../../api";
import { RecipesList } from '../RecipesList';
import './RecipesApp.css';

export const RecipesApp = () => {
    const [shownRecipes, setShownRecipes] = useState([]);

    async function updateRecipes() {
        const data = await getRandomRecipes(20);

        setShownRecipes(data);
        console.log(shownRecipes);
    };

    useEffect(() => {
        updateRecipes();
    }, []);

    return (
        <>
            <Button 
                variant="contained"
                onClick={updateRecipes}
            >
                Show another recipes
            </Button>
            <RecipesList shownRecipes={shownRecipes}/>
        </>
    );
}