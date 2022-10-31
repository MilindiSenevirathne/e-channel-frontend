import request from "../../helpers/requestHelper";
import * as channelActionTypes from "../actionTypes/channelActionTypes"

export const getChannelList=(data)=> async(dispatch)=>{
    dispatch({ type: channelActionTypes.GET_CHANNELS_LIST_REQUEST})

    try {
        const res = await request({
            url: `/search-channels`,
            method: 'POST',
            data: data
        })

        dispatch({
            type: channelActionTypes.GET_CHANNELS_LIST_SUCCEED,
            payload: res
        })

    } catch (err) {
        dispatch({
            type: channelActionTypes.GET_CHANNELS_LIST_FAILED,
            payload: err ? err.data : null
        });
    }
}

export const getSingleChannel=(id)=> async(dispatch)=>{
    dispatch({ type: channelActionTypes.GET_SINGLE_CHANNEL_REQUEST})

    try {
        const res = await request({
            url: `/channel/${id}`,
            method: 'GET',
        })

        dispatch({
            type: channelActionTypes.GET_SINGLE_CHANNEL_SUCCEED,
            payload: res
        })

    } catch (err) {
        window.location.replace("/")
        dispatch({
            type: channelActionTypes.GET_SINGLE_CHANNEL_FAILED,
            payload: err ? err.data : null
        });
    }
}