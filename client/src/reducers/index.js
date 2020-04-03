import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form'
import authReducer from './authReducers.js';
import surveyReducer from './surveyReducer'
export default combineReducers({
    auth:authReducer,
    form:reduxForm,
    survey:surveyReducer
})