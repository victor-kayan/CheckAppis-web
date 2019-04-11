import { UserReducer } from './login/UserReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    userState: UserReducer,
});