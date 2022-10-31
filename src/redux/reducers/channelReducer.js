import * as channelActionTypes from "../actionTypes/channelActionTypes"


const initialState = {
    channelList: [],
};

export default function channelData(state = initialState, action){
    const {type, payload} = action;
    
    switch(type){
        case channelActionTypes.GET_CHANNELS_LIST_SUCCEED:
            return{
                ...state,
                channelList: payload
            };

        default:
            return state;
    }
}
