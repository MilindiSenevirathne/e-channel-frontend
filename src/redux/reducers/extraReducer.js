import * as extraActionTypes from "../actionTypes/extraActionTypes"


const initialState = {
    hospitalList: [],
    specializationList: []
};

export default function extraData(state = initialState, action){
    const {type, payload} = action;
    
    switch(type){
        case extraActionTypes.GET_HOSPITALS_LIST_SUCCEED:
            return{
                ...state,
                hospitalList: payload
            };
        case extraActionTypes.GET_SPECIALIZATION_LIST_SUCCEED:
            return{
                ...state,
                specializationList: payload
            };


        default:
            return state;
    }
}
