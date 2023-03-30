import styled from "styled-components";

export const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    border: 1px solid ${p => p.theme.colors.black};
    padding: 16px;
    border-radius: 4px;
    background-color: ${p => p.theme.colors.light};
`;

export const ListItem = styled.li`
    background-color: ${p => p.theme.colors.white};
`
