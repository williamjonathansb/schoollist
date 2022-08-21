import { TypeOrmDatabase } from "../database";
import { Student } from "../entities/student";

interface InputDeleteStudent {
  cpf: string;
}

export const deleteStudentUseCase = async ({ cpf }: InputDeleteStudent) => {
  const studentsRepository = TypeOrmDatabase.getRepository(Student);

  const result = await studentsRepository.delete({ cpf });
  if (!result.affected) {
    return false;
  }

  return true;
};
