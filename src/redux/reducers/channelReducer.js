import * as channelActionTypes from "../actionTypes/channelActionTypes"


const initialState = {
    channelList: [],
    singleChannel: null
};

export default function channelData(state = initialState, action){
    const {type, payload} = action;
    
    switch(type){
        case channelActionTypes.GET_CHANNELS_LIST_SUCCEED:
            return{
                ...state,
                channelList: payload
            };
        case channelActionTypes.GET_SINGLE_CHANNEL_SUCCEED:
            return{
                ...state,
                singleChannel: payload
            };

        default:
            return state;
    }
}
