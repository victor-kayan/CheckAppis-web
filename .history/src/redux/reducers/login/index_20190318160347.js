import { LoginReducer } from './LoginReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    loginState: LoginReducer,
});