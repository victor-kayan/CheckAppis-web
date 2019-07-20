import { UserReducer } from './user/UserReducer';
import { combineReducers } from 'redux';
import { ApicultorReducer } from './apicultor/ApicultorReducer';
import { ApiarioReducer } from './apiario/ApiarioReducer';
import { HomeReducer} from './home/homeReducer';

export const Reducers = combineReducers({
    userState: UserReducer,
    apicultorState: ApicultorReducer,
    apiarioState: ApiarioReducer,
    homeState: HomeReducer,
});