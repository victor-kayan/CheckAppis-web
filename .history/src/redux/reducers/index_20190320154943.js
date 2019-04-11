import { UserReducer } from './user/UserReducer';
import { combineReducers } from 'redux';
import { ApicultorReducer } from './apicultor/ApicultorReducer';

export const Reducers = combineReducers({
    userState: UserReducer,
    apicultorState: ApicultorReducer,
});