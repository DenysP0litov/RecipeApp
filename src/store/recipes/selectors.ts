import { RootStateType } from "./types";

export const recipesSelectors = {
    recipesList: (state: RootStateType) => state.recipes.recipesList,
};