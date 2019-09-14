
import {combineReducers} from 'redux';

import reducer from './modules';
const createReducer = (asyncReducers) =>
combineReducers({
    reducer,
    ...asyncReducers
});

export default createReducer;