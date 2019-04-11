import { LoginReducer } from '../reducers/login/loginReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    loginState: LoginReducer,
});