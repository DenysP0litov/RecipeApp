import { useNavigate } from 'react-router-dom';
import { Recipe } from '../../../../types'

type Props = {
    recipe: Recipe;
};

export const RecipeCard: React.FC<Props> = ({ recipe }) => {
    let {id, image, title, dishTypes, readyInMinutes, aggregateLikes} = recipe;

    const navigate = useNavigate();

    if (title.length > 40) {
        title = title.slice(0, 30) + '...';
    };

    return (
        <div 
            key={id} 
            className="recipe-card"
            onClick={() => navigate(`/recipes/${recipe.id}`)}
        >
            <img 
                src={image} 
                alt={title} 
                className="recipe-card__img"
            />
            <div className="recipe-card__info">
                <h2 className="recipe-card__title">
                    {title}
                </h2>
                <div className="recipe-card__add-info">
                    <p>Dish types: {dishTypes.join(', ')}</p>
                    <p>Time to cook: {readyInMinutes} mins</p>
                    <p>Likes: {aggregateLikes}</p>
                </div>
            </div>
        </div>
    );
};