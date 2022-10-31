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

export const getSingleChannel=(id, isAdmin)=> async(dispatch)=>{
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
        window.location.replace(isAdmin ? "/channel-list" : "/")
        dispatch({
            type: channelActionTypes.GET_SINGLE_CHANNEL_FAILED,
            payload: err ? err.data : null
        });
    }
}

export const createChannel=(data)=> async(dispatch)=>{
    dispatch({ type: channelActionTypes.CREATE_CHANNEL_REQUEST})

    try {
        const res = await request({
            url: `/channel/create`,
            method: 'POST',
            data: data
        })

        window.location.assign("/channel-list");

    } catch (err) {
        dispatch({
            type: channelActionTypes.CREATE_CHANNEL_FAILED,
            payload: err ? err.data : null
        });
    }
}

export const updateChannel=(id, data)=> async(dispatch)=>{
    dispatch({ type: channelActionTypes.UPDATE_CHANNEL_REQUEST})

    try {
        const res = await request({
            url: `/channel/update/${id}`,
            method: 'PUT',
            data: data
        })

        window.location.assign("/channel-list");

    } catch (err) {
        dispatch({
            type: channelActionTypes.UPDATE_CHANNEL_FAILED,
            payload: err ? err.data : null
        });
    }
}

export const deleteChannel=(id)=> async(dispatch)=>{
    dispatch({ type: channelActionTypes.DELETE_CHANNEL_REQUEST})

    try {
        const res = await request({
            url: `/channel/delete/${id}`,
            method: 'DELETE',
        })

        dispatch({
            type: channelActionTypes.DELETE_CHANNEL_SUCCEED,
            payload: id
        });

    } catch (err) {
        dispatch({
            type: channelActionTypes.DELETE_CHANNEL_FAILED,
            payload: err ? err.data : null
        });
    }
}



export const getAllChannelList=()=> async(dispatch)=>{
    dispatch({ type: channelActionTypes.GET_ALL_CHANNELS_LIST_REQUEST})

    try {
        const res = await request({
            url: `/channel/list`,
            method: 'GET',
        })

        dispatch({
            type: channelActionTypes.GET_ALL_CHANNELS_LIST_SUCCEED,
            payload: res
        })

    } catch (err) {
        dispatch({
            type: channelActionTypes.GET_ALL_CHANNELS_LIST_FAILED,
            payload: err ? err.data : null
        });
    }
}
