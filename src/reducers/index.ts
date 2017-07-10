import { combineReducers } from 'redux';
import { loginReducer } from './login';
import { errorsReducer } from './errors';

const rootReducer = combineReducers({
  loginReducer,
  errorsReducer
});

export default rootReducer;
