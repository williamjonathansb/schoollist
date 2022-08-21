import { useMutation } from "@apollo/client";
import { CircularProgress, Typography } from "@mui/material";
import { isCPF } from "brazilian-values";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { editStudentQuery, getStudentsQuery } from "../../services/student";
import {
  BoxStyled,
  ErrorMessage,
  FormStyled,
  NewStudentFormContainer,
  SubmitButton,
  TextFieldStyled,
} from "./styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { client } from "../../ApolloClient/client";
import { normalizeCPFInput } from "../../utils/CPFNormalizer";
import { verifyString } from "../../utils/StringVerifier";

interface InputEditStudent {
  id: string;
  cpf?: string;
  name?: string;
  email?: string;
}

export const EditStudentForm = ({ id }: any) => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
    reset,
  } = useForm();
  const [editStudent, { loading, error }] = useMutation(editStudentQuery);
  const [studentEdited, setStudentEdited] = useState(false);

  const handleEditStudent = async ({ cpf, name, email }: InputEditStudent) => {
    try {
      if (cpf && !isCPF(cpf)) {
        setError("cpf", {
          message: "CPF Invalido",
        });

        return;
      }

      await editStudent({
        variables: {
          id,
          name: verifyString(name),
          cpf: verifyString(cpf),
          email: verifyString(email),
        },
        refetchQueries: [getStudentsQuery],
      });
    } catch (error) {
      return;
    }

    client.resetStore();
    setStudentEdited(true);
  };

  const handleCPFChange = (event: any) => {
    const cpfNormalized = normalizeCPFInput(event);
    setValue("cpf", cpfNormalized);
  };

  return (
    <NewStudentFormContainer>
      {!loading && !studentEdited && (
        <FormStyled
          onSubmit={handleSubmit((form: any) => handleEditStudent(form))}
        >
          <TextFieldStyled
            error={errors.cpf ? true : false}
            label="CPF"
            placeholder="000.000.000-00"
            {...register("cpf", { onChange: handleCPFChange })}
            helperText={errors.cpf ? "CPF Inválido" : ""}
          />
          <TextFieldStyled label="Nome" {...register("name")} />
          <TextFieldStyled label="Email" type="email" {...register("email")} />
          <div>
            {error && <ErrorMessage>Erro ao editar o aluno</ErrorMessage>}
            {error?.message === "Student already exists" && (
              <ErrorMessage>Já existe um aluno com esse cpf</ErrorMessage>
            )}
          </div>
          <SubmitButton type="submit" variant="contained">
            Editar Estudante
          </SubmitButton>
        </FormStyled>
      )}
      {loading && (
        <div>
          <CircularProgress />
        </div>
      )}
      {studentEdited && (
        <BoxStyled>
          <Typography>Aluno Editado com Sucesso</Typography>
          <CheckCircleIcon sx={{ color: "#00e88f", fontSize: 72 }} />
        </BoxStyled>
      )}
    </NewStudentFormContainer>
  );
};
