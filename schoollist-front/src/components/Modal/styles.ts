import { Box, Button, styled, TextField } from "@mui/material";

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
    color: ${(props: any) => props.theme["white"]};
  }

  input:focus {
    box-shadow: none !important;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`;

export const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: white;
  border: 2px solid #000;
  box-shadow: 24;
  padding: 4px;

  min-height: 200px;
  min-width: 300px;
  border-radius: 8px;
  border: none;
`;

export const SubmitButton = styled(Button)`
  font-size: 1rem !important;
  font-family: "Inter", sans-serif !important;
  font-weight: bold !important;
  color: #202024;
  background-color: #00e88f;
  padding: 10px;
  border-radius: 12px;

  :hover {
    background-color: #00955b;
  }
`;
