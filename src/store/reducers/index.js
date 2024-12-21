// third-party
import { combineReducers } from 'redux';
import authSlice from './auth';

const reducers = combineReducers(
    { 
        auth:authSlice 
    }
);

export default reducers;
