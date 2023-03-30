import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { RecipeDifficult } from "components/RecipeDifficulty/RecipeDifficulty";
import { Image, Title, Wrapper } from "./Recipe.styled";
import { RecipeInfo } from "../RecipeInfo/RecipeInfo";


export class Recipe extends Component {

    state = {
        isOpen: false,
    };

    toggle = () => {
        this.setState(prevState => ({ 
            isOpen: !prevState.isOpen,
        }));
    };

    render() {
        const { isOpen } = this.state;
        const { recipe: { 
                name, 
                image = 'https://e2.edimdoma.ru/data/posts/0002/0242/20242-ed4_wide.jpg?1631194534', 
                time, 
                servings, 
                calories, 
                difficulty 
            } } = this.props;

        return (
            <Wrapper>
                <Image src={image} onClick={this.toggle} />
                <Title>{name}</Title>
                {isOpen && <><RecipeInfo time={time} servings={servings} calories={calories} />
                <RecipeDifficult difficulty={difficulty}/></>}
            </Wrapper>
        );
    }
};


Recipe.propTypes = {
    recipe: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        servings: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        difficulty: PropTypes.oneOf(["easy", "medium", "hard"])
    }),
};

// 