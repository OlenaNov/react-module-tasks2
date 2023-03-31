import { Form as FormikForm } from "formik";
import styled from "styled-components";

export const Form = styled(FormikForm)`
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 400px;
    padding: 24px;

    border: 3px solid lightgrey;
    border-radius: 4px;
`;