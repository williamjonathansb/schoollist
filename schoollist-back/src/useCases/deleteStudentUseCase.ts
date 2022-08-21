import { TypeOrmDatabase } from "../database";
import { Student } from "../entities/student";

interface InputDeleteStudent {
  id: number;
}

export const deleteStudentUseCase = async ({ id }: InputDeleteStudent) => {
  const studentsRepository = TypeOrmDatabase.getRepository(Student);

  const result = await studentsRepository.delete({ id });
  if (!result.affected) {
    return false;
  }

  return true;
};
