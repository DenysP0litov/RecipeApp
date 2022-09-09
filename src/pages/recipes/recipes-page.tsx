import { Button } from '@mui/material';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getRandomRecipes } from "../../api";
import { Header } from '../../components/header';
import { RecipesCatalog } from './recipes-catalog';
import { recipesActions, recipesSelectors } from '../../store';

export const RecipesPage: React.FC = () => {
    const shownRecipes = useSelector(recipesSelectors.recipesList);
    const dispatch = useDispatch();

    async function updateRecipes() {
        const data = await getRandomRecipes(20);

        dispatch(recipesActions.setRecipesList(data));
        localStorage.setItem(
            'recipesList',
            JSON.stringify(data),
        );
    };

    useEffect(() => {
        if (shownRecipes.length === 0) {
            updateRecipes();
        };
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <Button 
                    variant="contained"
                    onClick={updateRecipes}
                >
                    Show another recipes
                </Button>
                <RecipesCatalog shownRecipes={shownRecipes}/>
            </div>
        </>
    );
}