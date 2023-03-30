import PropTypes from 'prop-types';

import { Recipe } from "../Recipe/Recipe";
import { ListItem, Wrapper } from "./RecipeList.styled";

export const RecipeList = ({ recipes }) => {
    return (
        <Wrapper>
            {recipes.map(recipe => (
                <ListItem key={recipe.id}>
                    <Recipe recipe={recipe}/>
                </ListItem>
            ))}
        </Wrapper>
        );
}; 

RecipeList.propTypes = {
    recipes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
};