import PropTypes from 'prop-types';

import { BsAlarm } from "react-icons/bs";
import { HiOutlineChartPie } from "react-icons/hi";
import { HiOutlineChartBar } from "react-icons/hi";
import { InfoBlock, Wrapper } from "./RecipeInfo.styled";

export const RecipeInfo = ({ time, servings, calories }) => {
    return (
                <Wrapper>
                    <InfoBlock>
                        <BsAlarm />
                        {time} mins
                    </InfoBlock>
                    <InfoBlock>
                        <HiOutlineChartPie />
                        {servings} servings
                    </InfoBlock>
                    <InfoBlock>
                        <HiOutlineChartBar />
                        {calories} calories
                    </InfoBlock>
                </Wrapper>
    );
};

RecipeInfo.propTypes = {
        time: PropTypes.string.isRequired,
        servings: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
};