import {
  TYPE_LOGIN_USER_SUCCEEDED,
  TYPE_SET_CREDENTIALS
} from '../actions/login';
import { Credentials } from '../models/credentials';

export const loginReducer = (state = new Credentials(), action: any) => {
  switch (action.type) {
    case TYPE_LOGIN_USER_SUCCEEDED:
      return {
        ...state,
        username: action.payload.credentials.username,
        password: action.payload.credentials.password,
        token: action.payload.credentials.token
      };
    case TYPE_SET_CREDENTIALS:
      return action.payload.credentials;

    default:
      return state;
  }
};
