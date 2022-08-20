import { Field, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Student {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: "text" })
  cpf: string;

  @Field((type) => String)
  @Column({ type: "text" })
  name: string;

  @Field()
  @Column({ type: "text" })
  email: string;
}
