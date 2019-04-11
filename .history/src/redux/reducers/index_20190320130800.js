import { UserReducer } from './user/UserReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    userState: UserReducer,
});