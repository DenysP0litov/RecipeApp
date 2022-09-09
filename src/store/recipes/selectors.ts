import { RecipesStateType } from "./types";

export const recipesSelectors = {
    recipesList: (state: RecipesStateType) => state.recipesList,
};