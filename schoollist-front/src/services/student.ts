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

export const createStudentQuery = gql`
  mutation ($name: String!, $cpf: String!, $email: String!) {
    createStudent(name: $name, cpf: $cpf, email: $email) {
      id
      cpf
      name
      email
    }
  }
`;

export const editStudentQuery = gql`
  mutation ($id: Float!, $name: String, $cpf: String, $email: String) {
    editStudent(id: $id, name: $name, cpf: $cpf, email: $email)
  }
`;

export const deleteStudentQuery = gql`
  mutation ($id: Float!) {
    deleteStudent(id: $id)
  }
`;
