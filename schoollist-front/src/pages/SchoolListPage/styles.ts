import styled from "styled-components";
import { TextField, Box, Button } from "@mui/material";

export const SchoolListPageContainer = styled.main`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;

  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;

export const SchoolListPageBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  height: 100vh;
  flex-direction: column;

  background-color: #006645;
  border-radius: 10px;
  padding-bottom: 2rem !important;
  padding-top: 2rem !important;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }

  padding: 10px;
`;

export const TextFieldStyled = styled(TextField)`
  max-width: 175px;

  & label.Mui-focused {
    color: white;
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${(props: any) => props.theme["green-300"]};
    }
    &:hover fieldset {
      border-color: ${(props: any) => props.theme["white"]};
    }
    &.Mui-focused fieldset {
      border-color: ${(props: any) => props.theme["white"]};
    }
  }

  label,
  input {
    font-weight: bold;
    color: ${(props) => props.theme["white"]};
  }

  input:focus {
    box-shadow: none !important;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`;

export const SubmitButton = styled(Button)`
  font-size: 1rem !important;
  font-family: "Inter", sans-serif !important;
  font-weight: bold !important;
  color: ${(props: any) => props.theme["grey-800"]}!important;
  background-color: ${(props: any) => props.theme["green-300"]}!important;
  border-radius: 12px;
`;
