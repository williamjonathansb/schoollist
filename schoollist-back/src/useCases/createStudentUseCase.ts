import { TypeOrmDatabase } from "../database";
import { Student } from "../entities/student";
import { GraphQLError } from "graphql";
import { validate } from "class-validator";

interface InputCreateStudent {
  cpf: string | undefined;
  name: string | undefined;
  email: string | undefined;
}

export const createStudentUseCase = async ({
  cpf,
  name,
  email,
}: InputCreateStudent) => {
  const studentsRepository = TypeOrmDatabase.getRepository(Student);

  const studentAlreadyExists = await studentsRepository.find({
    where: {
      cpf,
    },
  });

  if (studentAlreadyExists.length > 0) {
    throw new GraphQLError("Student already exists");
  }

  const student = studentsRepository.create({
    cpf,
    name,
    email,
  });

  const errors = await validate(student);
  if (errors.length > 0) {
    throw new GraphQLError(`${errors[0].property} is in an invalid format`);
  }

  await studentsRepository.save(student);

  return student;
};
