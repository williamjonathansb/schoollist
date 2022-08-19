import { Field, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
@ObjectType()
export class Student {
  @Field()
  @PrimaryColumn({ type: "text", unique: true })
  cpf: string;

  @Field((type) => String)
  @Column({ type: "text" })
  name: string;

  @Field()
  @Column({ type: "text" })
  email: string;
}
