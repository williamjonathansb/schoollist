import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { TypeOrmDatabase } from "./database";
import { buildSchema } from "type-graphql";
import { StudentResolver } from "./resolvers/studentResolver";

async function main() {
  await TypeOrmDatabase.initialize();

  const schema = await buildSchema({
    resolvers: [StudentResolver],
  });

  const server = new ApolloServer({ schema });
  await server.listen(4000);
  console.log("Server has started!");
}

main();
