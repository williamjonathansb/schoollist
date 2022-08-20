import { useState } from "react";
import { useForm } from "react-hook-form";
import { SchoolList } from "../../components/SchoolList";
import {
  SchoolListPageBox,
  SchoolListPageContainer,
  TextFieldStyled,
  SubmitButton,
} from "./styles";

export interface IStudent {
  cpf?: string;
  name?: string;
  email?: string;
}

export const SchoolListPage = () => {
  const { register, handleSubmit } = useForm();
  const [student, setStudent] = useState<IStudent>({});

  const submitHandler = (form: any) => {
    const { cpf, name, email } = form;

    setStudent({ cpf, name, email });
  };

  const format = (variable: string | undefined) => {
    return variable === "" ? undefined : variable;
  };

  return (
    <SchoolListPageContainer>
      <SchoolListPageBox>
        <form onSubmit={handleSubmit((form) => submitHandler(form))}>
          <TextFieldStyled label="CPF" {...register("cpf")} />
          <TextFieldStyled label="Nome" {...register("name")} />
          <TextFieldStyled label="Email" {...register("email")} />
          <SubmitButton type="submit" variant="contained">
            Buscar
          </SubmitButton>
        </form>
        <SchoolList
          cpf={format(student.cpf)}
          name={format(student.name)}
          email={format(student.email)}
        />
      </SchoolListPageBox>
    </SchoolListPageContainer>
  );
};
