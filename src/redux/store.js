import {applyMiddleware, createStore, combineReducers} from 'redux';
import  thunk from 'redux-thunk';

import doctorData from './reducers/doctorReducer';
import extraData from "./reducers/extraReducer";
import channelData from "./reducers/channelReducer";

const store = createStore(
    combineReducers({
        doctorData,
        channelData,
        extraData,
    }),
    applyMiddleware(thunk)
);

export default store;