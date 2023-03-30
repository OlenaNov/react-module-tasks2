import styled from "styled-components";

export const Wrapper = styled.div`
    border: 1px solid ${(p) => p.theme.colors.black};
    padding: 8px;
    border-radius: 4px;
    padding: 20px;
`;

export const Title = styled.h2`
    margin-bottom: 16px;
`;

export const Image = styled.img`
    border-radius: 4px;
    width: 340px;
    height: 300px;
    margin-bottom: 16px;
`;