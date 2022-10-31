import request from "../../helpers/requestHelper";
import * as extraActionTypes from "../actionTypes/extraActionTypes"

export const getHospitalList= ()=> async(dispatch)=>{
    dispatch({ type: extraActionTypes.GET_HOSPITALS_LIST_REQUEST})

    try {
        const res = await request({
            url: `/hospital/list`,
            method: 'GET',
        })

        dispatch({
            type: extraActionTypes.GET_HOSPITALS_LIST_SUCCEED,
            payload: res
        })

    } catch (err) {
        dispatch({
            type: extraActionTypes.GET_HOSPITALS_LIST_FAILED,
            payload: err ? err.data : null
        });
    }
}


export const getSpecializationList= ()=> async(dispatch)=>{
    dispatch({ type: extraActionTypes.GET_SPECIALIZATION_LIST_REQUEST})

    try {
        const res = await request({
            url: `/specialization/list`,
            method: 'GET',
        })

        dispatch({
            type: extraActionTypes.GET_SPECIALIZATION_LIST_SUCCEED,
            payload: res
        })

    } catch (err) {
        dispatch({
            type: extraActionTypes.GET_SPECIALIZATION_LIST_FAILED,
            payload: err ? err.data : null
        });
    }
}