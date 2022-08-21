import { useMutation } from "@apollo/client";
import { CircularProgress, Typography } from "@mui/material";
import { isCPF } from "brazilian-values";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createStudentQuery, getStudentsQuery } from "../../services/student";
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

interface InputCreateStudent {
  cpf: string;
  name: string;
  email: string;
}

export const NewStudentForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm();
  const [createUser, { data, loading, error }] =
    useMutation(createStudentQuery);
  const [studentCreated, setStudentCreated] = useState(false);

  const handleCreateStudent = async ({
    cpf,
    name,
    email,
  }: InputCreateStudent) => {
    if (!isCPF(cpf)) {
      setError("cpf", {
        message: "CPF Invalido",
      });

      return;
    }

    await createUser({
      variables: {
        name,
        cpf,
        email,
      },
      refetchQueries: [getStudentsQuery],
    });

    reset();
    client.resetStore();
    setStudentCreated(true);
  };

  return (
    <NewStudentFormContainer>
      {!loading && !studentCreated && (
        <FormStyled
          onSubmit={handleSubmit((form: any) => handleCreateStudent(form))}
        >
          <TextFieldStyled
            error={errors.cpf ? true : false}
            label="CPF"
            {...register("cpf", { required: true })}
            helperText={errors.cpf ? "CPF Inválido" : ""}
          />
          <TextFieldStyled
            label="Nome"
            {...register("name", { required: true })}
          />
          <TextFieldStyled
            label="Email"
            type="email"
            {...register("email", { required: true })}
          />
          <div>
            {error && <ErrorMessage>Erro ao cadastrar o aluno</ErrorMessage>}
            {error?.message === "Student already exists" && (
              <ErrorMessage>Já existe um aluno com esse cpf</ErrorMessage>
            )}
          </div>
          <SubmitButton type="submit" variant="contained">
            Adicionar
          </SubmitButton>
        </FormStyled>
      )}
      {loading && (
        <div>
          <CircularProgress />
        </div>
      )}
      {studentCreated && (
        <BoxStyled>
          <Typography>Aluno Adicionado com Sucesso</Typography>
          <CheckCircleIcon sx={{ color: "#00e88f", fontSize: 72 }} />
        </BoxStyled>
      )}
    </NewStudentFormContainer>
  );
};
