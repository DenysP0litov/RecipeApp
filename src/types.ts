export type Recipe = {
    id: number,
    title: string,
    image: string,
    dishTypes: string[],
    aggregateLikes: number,
    readyInMinutes: number,
};

export type RecipeDetailed = Recipe & {
    summary: string,
    extendedIngredients: Ingredient[],
    servings: number,
    instructions: string,
};

export type Ingredient = {
    original: string,
}