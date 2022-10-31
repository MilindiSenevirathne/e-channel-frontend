import request from "../../helpers/requestHelper";
import * as doctorActionTypes from "../actionTypes/doctorActionTypes"

export const getDoctorList= ()=> async(dispatch)=>{
    dispatch({ type: doctorActionTypes.GET_DOCTORS_LIST_REQUEST})

    try {
        const res = await request({
            url: `/doctor/list`,
            method: 'GET',
        })

        dispatch({
            type: doctorActionTypes.GET_DOCTORS_LIST_SUCCEED,
            payload: res
        })

    } catch (err) {
        dispatch({
            type: doctorActionTypes.GET_DOCTORS_LIST_FAILED,
            payload: err ? err.data : null
        });
    }
}