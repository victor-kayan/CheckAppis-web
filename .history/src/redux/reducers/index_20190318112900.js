import { loginReducer } from '../reducers/login/loginReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    loginState: loginReducer,
});