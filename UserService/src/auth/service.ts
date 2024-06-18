import { GraphQLError } from 'graphql';
import * as jwt from 'jsonwebtoken';

export class AuthService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async check(authHeader?: string, roles?: string[]): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!authHeader) {
        reject(new GraphQLError('Unauthorised'));
      } else {
        const tokens = authHeader.split(' ');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion
        jwt.verify(tokens[1], process.env.JWT!, (err: any, user: any) => {
          if (err) {
            reject(err);
          } else if (roles) {
            for (const role of roles) {
              if (!user.roles || !user.roles.includes(role)) {
                reject(new GraphQLError('Unauthorised'));
              }
            }
          }
          resolve({ id: user.id, email: user.email, name: user.name });
        });
      }
    });
  }
}