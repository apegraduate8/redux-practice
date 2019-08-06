import { combineReducers } from 'redux';
import counterReducer from './counter';
import loggedReducer from './isLogged';
import equationReducer from './equation';
import successReducer from './success';

const allReducers = combineReducers({
    counter: counterReducer,
    auth: loggedReducer,
    equation: equationReducer,
    success: successReducer
});

export default allReducers;
