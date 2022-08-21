import { TypeOrmDatabase } from "../database";
import { Like } from "typeorm";
import { Student } from "../entities/student";

interface InputListStudents {
  cpf: string | undefined;
  name: string | undefined;
  email: string | undefined;
}

export const listStudentsUseCase = ({
  cpf,
  name,
  email,
}: InputListStudents) => {
  const studentsRepository = TypeOrmDatabase.getRepository(Student);

  return studentsRepository.findBy({
    cpf: cpf ? Like(`%${cpf}%`) : cpf,
    name: name ? Like(`%${name}%`) : name,
    email: email ? Like(`%${email}%`) : email,
  });
};
