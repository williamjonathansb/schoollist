import { gql } from "@apollo/client";

export interface IStudent {
  id?: number;
  cpf?: string;
  name?: string;
  email?: string;
}

export const getStudentsQuery = gql`
  query GetStudents {
    students {
      id
      cpf
      name
      email
    }
  }
`;
