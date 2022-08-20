import { DataSource } from "typeorm";
import { Student } from "../entities/student";
import "dotenv/config";

export const TypeOrmDatabase = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: false,
  entities: [Student],
  subscribers: [],
  migrations: [],
});
