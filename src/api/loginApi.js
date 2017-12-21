import { Credentials } from '../models/credentials';
export const loginApi = {
  // dummy api method which just returns the credentials passed and a dummy token
  loginUser(credentials: Credentials) {
    return new Promise(resolve => {
      resolve({
        result: {
          ...credentials,
          token: 'abcdefghijklmnopqrstuvwxyz'
        }
      });
    });
  }
};
