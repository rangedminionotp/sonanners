import dotenv from 'dotenv';
dotenv.config();

import app from './app';

app.listen(3011, () => {
  console.log(`Server Running on port 3011`);
  console.log('Running a GraphiQL server at http://localhost:3011/graphql');
  console.log(
    'Running a GraphQL Playground at http://localhost:3011/playground'
  );
});