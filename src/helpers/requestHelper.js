import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const request = async (config) => {

    const {data, url, method, headers = {}, responseType} = config || {};

    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: `${baseURL}${url}`,
            headers: headers,
            data: data,
            responseType: responseType ? responseType : null
        })
            .then((data) => {
                if(responseType === 'blob'){
                    resolve(data)
                } else {
                    resolve(data.data);
                }
            })
            .catch((error) => {
                reject(error.response)
            })
    })

}

export default request;