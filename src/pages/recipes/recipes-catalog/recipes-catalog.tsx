import { Recipe } from '../../../types'
import { RecipeCard }  from './recipe-card';

type Props = {
    shownRecipes: Recipe[];
};

export const RecipesCatalog: React.FC<Props> = ({ shownRecipes }) => {
    return (
        <div className="recipes-catalog">
            {shownRecipes.map(recipe => (
                <RecipeCard recipe={recipe} />
            ))}
        </div>
    );
};