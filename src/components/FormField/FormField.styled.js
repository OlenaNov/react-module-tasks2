import styled from "styled-components";
import { Field as FormikField, ErrorMessage as FormikErrorMessage } from "formik";


export const Wrapper = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
    color: red;
`;

export const Field = styled(FormikField)`
    padding: 8px;
`;