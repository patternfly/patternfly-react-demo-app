import { Credentials } from '../models/credentials';
import { Error } from '../models/error';

export const TYPE_LOGIN_USER = 'LOGIN_USER';
export const loginUser = (credentials: Credentials) => ({
  type: TYPE_LOGIN_USER,
  payload: {
    credentials
  }
});

export const TYPE_LOGIN_USER_SUCCEEDED = 'LOGIN_USER_SUCCEEDED';
export const loginUserSucceeded = (credentials: Credentials) => ({
  type: TYPE_LOGIN_USER_SUCCEEDED,
  payload: {
    credentials
  }
});

export const TYPE_LOGIN_USER_FAILED = 'LOGIN_USER_FAILED';
export const loginUserFailed = (error: Error) => ({
  type: TYPE_LOGIN_USER_FAILED,
  payload: {
    error
  }
});

export const TYPE_SET_CREDENTIALS = 'SET_CREDENTIALS';
export const setCredentials = (credentials: Credentials) => ({
  type: TYPE_SET_CREDENTIALS,
  payload: {
    credentials
  }
});

export const TYPE_INIT_CREDENTIALS = 'INIT_CREDENTIALS';
export const initCredentials = () => ({
  type: TYPE_INIT_CREDENTIALS
});
