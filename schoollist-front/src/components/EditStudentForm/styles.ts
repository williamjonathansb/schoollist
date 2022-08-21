import { Box, Button, TextField, Typography } from "@mui/material";
import styled from "styled-components";

export const NewStudentFormContainer = styled.main`
  min-height: 500px;
  min-width: 400px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextFieldStyled = styled(TextField)`
  max-width: 400px;

  & label.Mui-focused {
    color: ${(props: any) => props.theme["grey-900"]};
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${(props: any) => props.theme["green-300"]};
    }
    &:hover fieldset {
      border-color: ${(props: any) => props.theme["grey-900"]};
    }
    &.Mui-focused fieldset {
      border-color: ${(props: any) => props.theme["grey-900"]};
    }
  }

  label,
  input {
    font-weight: bold;
    color: ${(props: any) => props.theme["grey-900"]};
  }

  input:focus {
    box-shadow: none !important;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  min-width: 80%;
  font-family: "Inter", sans-serif !important;
`;

export const SubmitButton = styled(Button)`
  font-size: 1rem !important;
  font-weight: bold !important;
  color: ${(props: any) => props.theme["grey-800"]}!important;
  background-color: ${(props: any) => props.theme["green-300"]}!important;

  padding: 10px;
  border-radius: 12px;
`;

export const ErrorMessage = styled(Typography)`
  font-family: "Inter", sans-serif !important;
  color: red;
  text-align: center;
`;

export const BoxStyled = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  font-weight: bold !important;

  color: ${(props: any) => props.theme["green-500"]}!important;
`;
