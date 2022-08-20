import { gql } from "@apollo/client";

export interface IStudent {
  id?: number;
  cpf?: string;
  name?: string;
  email?: string;
}

export const getStudentsQuery = gql`
  query GetStudents($cpf: String, $name: String, $email: String) {
    students(cpf: $cpf, name: $name, email: $email) {
      id
      cpf
      name
      email
    }
  }
`;
