import * as doctorActionTypes from "../actionTypes/doctorActionTypes"


const initialState = {
    doctorList: [],
};

export default function doctorData(state = initialState, action){
    const {type, payload} = action;
    
    switch(type){
        case doctorActionTypes.GET_DOCTORS_LIST_SUCCEED:
            return{
                ...state,
                doctorList: payload
            };

        default:
            return state;
    }
}
