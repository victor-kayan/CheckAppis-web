import { UserReducer } from './login/LoginReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    userState: userReducer,
});