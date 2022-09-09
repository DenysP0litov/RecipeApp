import { RecipesStateType, RecipesActionType } from "./types";

const initialState: RecipesStateType = {
    recipesList: JSON.parse(
        localStorage.getItem('recipesList')!,
    ) || [],
};

export const recipesReducer = (state: RecipesStateType = initialState, action: RecipesActionType) => {
    switch(action.type) {
        case ('SET_RECIPES_LIST'):
            return {
                ...state,
                recipesList: action.payload,
            }
        default:
            return state;
    }
};