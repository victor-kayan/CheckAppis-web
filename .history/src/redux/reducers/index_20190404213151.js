import { UserReducer } from './user/UserReducer';
import { combineReducers } from 'redux';
import { ApicultorReducer } from './apicultor/ApicultorReducer';
import { ApiarioReducer } from './apicultor/ApiarioReducer';

export const Reducers = combineReducers({
    userState: UserReducer,
    apicultorState: ApicultorReducer,
    apiarioState: ApiarioReducer,
});