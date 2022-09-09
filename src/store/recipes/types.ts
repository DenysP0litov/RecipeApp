import { Recipe } from "../../types";
import { AuthStateType } from "../auth/types";

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

export type RootStateType = {
    auth: AuthStateType,
    recipes: RecipesStateType,
};