import styled from "styled-components";

export const Item = styled.button`
    margin: 16px;
    padding: 16px;
    width: 200px;
    border: 2px solid grey;
    border-radius: 8px;
    font-weight: 800;
    background-color: ${p => p.selected ? "tomato" : "light-grey"};
`;
