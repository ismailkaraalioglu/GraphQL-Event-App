import { createServer, createPubSub } from "@graphql-yoga/node";

import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import db from "./data.json";

const pubsub = createPubSub();

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
  context: { pubsub, db },
});

server.start();
