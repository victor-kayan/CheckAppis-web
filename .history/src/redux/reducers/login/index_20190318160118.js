import { LoginReducer } from './login/LoginReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    loginState: LoginReducer,
});