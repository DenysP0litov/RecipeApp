import { Recipe } from '../../types'
import { RecipeCard }  from '../RecipeCard';
import './RecipesList.css';

type Props = {
    shownRecipes: Recipe[];
};

export const RecipesList: React.FC<Props> = ({ shownRecipes }) => {
    return (
        <div className="recipes-list">
            {shownRecipes.map(recipe => (
                <RecipeCard recipe={recipe} />
            ))}
        </div>
    );
};