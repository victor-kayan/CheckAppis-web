import { UserReducer } from './user/UserReducer';
import { combineReducers } from 'redux';
import { ApicultorReducer } from './apicultor/ApiarioReducer';
import { ApiarioReducer } from './apicultor/';

export const Reducers = combineReducers({
    userState: UserReducer,
    apicultorState: ApicultorReducer,
    apiarioState: ApiarioReducer,
});