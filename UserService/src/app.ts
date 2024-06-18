import express, { Express } from 'express';
import path from 'path';
import { graphqlHTTP } from 'express-graphql';
import expressPlayground from 'graphql-playground-middleware-express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { expressAuthChecker } from './auth/checker';

import { UserResolver } from './user/resolver';

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: {
      path: path.resolve(__dirname, '../build/schema.sql'),
      commentDescriptions: false,
      sortedSchema: false,
    },
    validate: true,
    authChecker: expressAuthChecker,
  });
  app.use(
    '/api/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
  );
  app.get('/playground', expressPlayground({ endpoint: '/api/graphql' }));
}
bootstrap();

export default app;