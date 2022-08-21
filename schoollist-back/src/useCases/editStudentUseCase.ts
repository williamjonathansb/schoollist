import { isCPF } from "brazilian-values";
import { validate } from "class-validator";
import { GraphQLError } from "graphql";
import { TypeOrmDatabase } from "../database";
import { Student } from "../entities/student";

interface InputEditStudent {
  id: number;
  cpf?: string;
  email?: string;
  name?: string;
}

export const editStudentUseCase = async ({
  id,
  cpf,
  email,
  name,
}: InputEditStudent) => {
  const studentsRepository = TypeOrmDatabase.getRepository(Student);

  if (cpf) {
    if (!isCPF(cpf)) {
      throw new GraphQLError("CPF is invalid");
    }

    const studentAlreadyExists = await studentsRepository.findBy({
      cpf,
    });

    if (studentAlreadyExists.length > 0) {
      throw new GraphQLError("Student already exists");
    }
  }

  await studentsRepository.save({
    id,
    cpf,
    name,
    email,
  });

  return true;
};
