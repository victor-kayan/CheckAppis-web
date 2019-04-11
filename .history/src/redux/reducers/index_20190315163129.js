import { clickReducer } from '../reducers/clickReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    clickState: clickReducer,
});