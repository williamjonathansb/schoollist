import { Arg, Query, Resolver } from "type-graphql";
import { TypeOrmDatabase } from "../database";
import { Student } from "../entities/student";

@Resolver((of) => Student)
export class StudentResolver {
  private readonly studentsRepository = TypeOrmDatabase.getRepository(Student);

  @Query((returns) => [Student], { nullable: true })
  async students(
    @Arg("cpf", { nullable: true }) cpf: string,
    @Arg("name", { nullable: true }) name: string,
    @Arg("email", { nullable: true }) email: string
  ) {
    return this.studentsRepository.find({
      where: {
        cpf,
        name,
        email,
      },
    });
  }
}
