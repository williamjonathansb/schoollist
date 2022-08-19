import { DataSource } from "typeorm";
import { Student } from "../entities/student";

export const TypeOrmDatabase = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "psql",
  database: "opencircle",
  synchronize: true,
  logging: false,
  entities: [Student],
  subscribers: [],
  migrations: [],
});
