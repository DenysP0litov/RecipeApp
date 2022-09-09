import { Recipe } from "../../types";

export type SetRecipesListType = {
    type: 'SET_RECIPES_LIST';
    payload: Recipe[];
};

export type RecipesActionType = (
    SetRecipesListType
);

export type RecipesStateType = {
    recipesList: Recipe[];
};