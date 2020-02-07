import "reflect-metadata";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import * as db from "./db/conf";

async function serve() {
  db.sequelize.sync({ force: false, alter: true }).catch(console.log);

  const schema = await buildSchema({
    resolvers: [__dirname + "/resolvers/**/*.js"]
  });

  const server = new ApolloServer({ schema, playground: true });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}

serve().catch(console.log);
