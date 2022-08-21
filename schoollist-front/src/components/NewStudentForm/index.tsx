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
import { normalizeCPFInput } from "../../utils/CPFNormalizer";

interface InputCreateStudent {
  cpf: string;
  name: string;
  email: string;
}

export const NewStudentForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
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

    try {
      await createUser({
        variables: {
          name,
          cpf,
          email,
        },
        refetchQueries: [getStudentsQuery],
      });
    } catch (error) {
      return;
    }

    reset();
    client.resetStore();
    setStudentCreated(true);
  };

  const handleCPFChange = (event: any) => {
    const cpfNormalized = normalizeCPFInput(event);
    setValue("cpf", cpfNormalized);
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
            placeholder="000.000.000-00"
            {...register("cpf", { required: true, onChange: handleCPFChange })}
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
