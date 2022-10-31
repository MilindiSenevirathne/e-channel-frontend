import * as channelActionTypes from "../actionTypes/channelActionTypes"


const initialState = {
    channelList: [],
    allChannelList: [],
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
        case channelActionTypes.GET_ALL_CHANNELS_LIST_SUCCEED:
            return{
                ...state,
                allChannelList: payload
            };
        case channelActionTypes.DELETE_CHANNEL_SUCCEED:
            return{
                ...state,
                allChannelList: state.allChannelList.filter((el) => el.id !== payload)
            };

        default:
            return state;
    }
}
