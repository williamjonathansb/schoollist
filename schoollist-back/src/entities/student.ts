import { IsCPF } from "brazilian-class-validator";
import { IsEmail } from "class-validator";
import { Field, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Student {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => String)
  @Column({ type: "text", unique: true })
  @IsCPF()
  cpf: string;

  @Field((type) => String)
  @Column({ type: "text" })
  name: string;

  @Field((type) => String)
  @Column({ type: "text" })
  @IsEmail()
  email: string;
}
