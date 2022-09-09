import { SetRecipesListType } from "./types";
import { Recipe } from "../../types";

export const recipesActions = {
    setRecipesList: (newList: Recipe[]): SetRecipesListType => ({
        type: 'SET_RECIPES_LIST',
        payload: newList,
    }),
};