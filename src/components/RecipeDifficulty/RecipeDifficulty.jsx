import PropTypes from 'prop-types';

import { CategoryBlock, CategoryItem, Title, Wrapper } from "./RecipeDifficulty.styled";

export const RecipeDifficult = ({ difficulty }) => {
    return (
        <Wrapper>
            <Title>Difficulty</Title>
            <CategoryBlock>
                <CategoryItem active={difficulty === 'easy'} >Easy</CategoryItem>
                <CategoryItem active={difficulty === 'medium'} >Medium</CategoryItem>
                <CategoryItem active={difficulty === 'hard'} >Hard</CategoryItem>
            </CategoryBlock>
        </Wrapper>
    );
};

RecipeDifficult.prototype = {
    difficulty: PropTypes.oneOf(["easy", "medium", "hard"])
}