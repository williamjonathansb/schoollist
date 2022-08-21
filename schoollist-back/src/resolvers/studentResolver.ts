import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { TypeOrmDatabase } from "../database";
import { Student } from "../entities/student";
import { Like } from "typeorm";
import { GraphQLError } from "graphql";
import { validate } from "class-validator";

@Resolver((of) => Student)
export class StudentResolver {
  private readonly studentsRepository = TypeOrmDatabase.getRepository(Student);

  @Query((returns) => [Student], { nullable: true })
  async students(
    @Arg("cpf", { nullable: true }) cpf: string,
    @Arg("name", { nullable: true }) name: string,
    @Arg("email", { nullable: true }) email: string
  ) {
    return this.studentsRepository.findBy({
      cpf: cpf ? Like(`%${cpf}%`) : cpf,
      name: name ? Like(`%${name}%`) : name,
      email: email ? Like(`%${email}%`) : email,
    });
  }

  @Mutation((returns) => Student)
  async createStudent(
    @Arg("cpf") cpf: string,
    @Arg("name") name: string,
    @Arg("email") email: string
  ): Promise<Student> {
    const studentAlreadyExists = await this.studentsRepository.find({
      where: {
        cpf,
      },
    });

    if (studentAlreadyExists.length > 0) {
      throw new GraphQLError("Student already exists");
    }

    const student = this.studentsRepository.create({
      cpf,
      name,
      email,
    });

    const errors = await validate(student);
    if (errors.length > 0) {
      throw new GraphQLError(`${errors[0].property} is in an invalid format`);
    }

    await this.studentsRepository.save(student);

    return student;
  }
}
