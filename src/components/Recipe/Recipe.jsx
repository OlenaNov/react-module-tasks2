import PropTypes from 'prop-types';

import { RecipeDifficult } from "components/RecipeDifficulty/RecipeDifficulty";
import { Title, Wrapper } from "./Recipe.styled";
import { RecipeInfo } from "../RecipeInfo/RecipeInfo";


export const Recipe = ({ recipe: { name, time, servings, calories, difficulty } }) => {

        return (
            <Wrapper>
                <Title>{name}</Title>
                <RecipeInfo time={time} servings={servings} calories={calories} />
                <RecipeDifficult difficulty={difficulty}/>
            </Wrapper>
        );
};


Recipe.propTypes = {
    recipe: PropTypes.shape({
        name: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        servings: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        difficulty: PropTypes.oneOf(["easy", "medium", "hard"])
    }),
};