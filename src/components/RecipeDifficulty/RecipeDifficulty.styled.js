import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const Title = styled.h3`
    margin-bottom: 8px;
`;

export const CategoryBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const CategoryItem = styled.span`
    border: 1px solid ${(p) => p.theme.colors.black};
    padding: 8px;
    border-radius: 4px;

    color: ${p => {
        return p.active ? p.theme.colors.white : p.theme.colors.black
    }};

    background-color: ${p => {
        return p.active ? p.theme.colors.accent : p.theme.colors.light
    }};
`;