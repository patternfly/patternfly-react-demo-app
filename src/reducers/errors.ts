import { TYPE_CLEAR_ERRORS } from '../actions/errors';
import { TYPE_LOGIN_USER_FAILED } from '../actions/login';

const getErrorMessage = (error: any) =>
  error.message ? error.message : '(no details available)';

export const errorsReducer = (state: string[] = new Array(), action: any) => {
  switch (action.type) {
    case TYPE_CLEAR_ERRORS:
      return [];

    case TYPE_LOGIN_USER_FAILED:
      return [
        ...state,
        `API call failed: ${getErrorMessage(action.payload.error)}`
      ];

    default:
      return state;
  }
};
