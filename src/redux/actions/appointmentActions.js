import request from "../../helpers/requestHelper";
import * as appointmentActionTypes from "../actionTypes/appointmentActionTypes"

export const createAppointment=(data)=> async(dispatch)=>{
    dispatch({ type: appointmentActionTypes.CREATE_APPOINTMENT_REQUEST})

    try {
        const res = await request({
            url: `/appointment/create`,
            method: 'POST',
            data: data
        })

        window.location.assign("/");

    } catch (err) {
        dispatch({
            type: appointmentActionTypes.CREATE_APPOINTMENT_FAILED,
            payload: err ? err.data : null
        });
    }
}
