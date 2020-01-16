import {combineReducers} from 'redux';
import authReducer from './authReducers.js';

export default combineReducers({
    auth:authReducer
})