import { Query, Resolver } from "type-graphql";
import { Student } from "../entities/student";

@Resolver((of) => Student)
export class StudentResolver {
  @Query((returns) => [Student], { nullable: true })
  async GetStudents() {
    return null;
  }
}
