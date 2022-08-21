import { useState } from "react";
import { useForm } from "react-hook-form";
import { SchoolList } from "../../components/SchoolList";
import {
  SchoolListPageBox,
  SchoolListPageContainer,
  TextFieldStyled,
  SubmitButton,
} from "./styles";
import image from "../../assets/logo.png";
import { NewStudentForm } from "../../components/NewStudentForm";
import { ModalComponent } from "../../components/Modal";
import { normalizeCPFInput } from "../../utils/CPFNormalizer";
import { verifyString } from "../../utils/StringVerifier";

export interface IStudent {
  cpf?: string;
  name?: string;
  email?: string;
}

export const SchoolListPage = () => {
  const { register, setValue, handleSubmit } = useForm();
  const [student, setStudent] = useState<IStudent>({});

  const submitHandler = (form: IStudent) => {
    const { cpf, name, email } = form;
    console.log(cpf);

    setStudent({ cpf, name, email });
  };

  const handleCPFChange = (event: any) => {
    const cpfNormalized = normalizeCPFInput(event);
    setValue("cpf", cpfNormalized);
  };

  return (
    <SchoolListPageContainer>
      <SchoolListPageBox>
        <img width="200" src={image} />
        <form onSubmit={handleSubmit((form) => submitHandler(form))}>
          <TextFieldStyled
            label="CPF"
            placeholder="000.000.000-00"
            {...(register("cpf"), { onChange: handleCPFChange })}
          />
          <TextFieldStyled label="Nome" {...register("name")} />
          <TextFieldStyled label="Email" {...register("email")} />
          <SubmitButton type="submit" variant="contained">
            Buscar
          </SubmitButton>
        </form>
        <ModalComponent buttonName="Adicionar novo estudante">
          <NewStudentForm />
        </ModalComponent>
        <SchoolList
          cpf={verifyString(student.cpf)}
          name={verifyString(student.name)}
          email={verifyString(student.email)}
        />
      </SchoolListPageBox>
    </SchoolListPageContainer>
  );
};
