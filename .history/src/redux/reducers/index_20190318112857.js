import { loginReducer } from '../reducers/login/loginReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    clickState: clickReducer,
    loginState: loginReducer,
});