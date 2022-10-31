import {applyMiddleware, createStore, combineReducers} from 'redux';
import  thunk from 'redux-thunk';

import doctorData from './reducers/doctorReducer';
import extraData from "./reducers/extraReducer";

const store = createStore(
    combineReducers({
        doctorData,
        extraData,
    }),
    applyMiddleware(thunk)
);

export default store;