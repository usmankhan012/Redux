import { postService } from '../../services/postServices'
import { ERROR, SUCCESS, LOADING } from '../constants/reduxConstant'
import apiName from '../../common/apiName'
import Asyenkstorgee from '../../common/Asyenkstorgee';


const apiLoading = () => ({ type: LOADING });
const apiSucceed = payload => ({ type: SUCCESS, payload });
const apiError = payload => ({ type: ERROR, payload });

export const Actionssign = (Url, method, SendData) => async (dispatchEvent, getState) => {
    console.log('body in login ======>>', SendData)
    try {
        const data = await AllApiCall(Url, method, SendData,)
        return (dispatchEvent({
            type: 'Actionssign',
            data: data
        }))
    } catch (e) {
        dispatchEvent(apiError(e));
    }
};


export const Actionotp = (Url, method, SendData) => async (dispatchEvent, getState) => {
    console.log('body in login ======>>', SendData)
    try {
        const data = await AllApiCall(Url, method, SendData,)
        return (dispatchEvent({
            type: 'Actionotp',
            data: data
        }))
    } catch (e) {
        dispatchEvent(apiError(e));
    }
};




export const ActionsLogin= (Url, method, SendData) => async (dispatchEvent, getState) => {
    console.log('body in login ======>>', SendData)
    try {
        const data = await AllApiCall(Url, method, SendData,)
        return (dispatchEvent({
            type: 'ActionsLogin',
            data: data
        }))
    } catch (e) {
        dispatchEvent(apiError(e));
    }
};




export async function AllApiCall(Url, method, SendData) {
    try {
        let token = await Asyenkstorgee.getData('token')
        let CompleteUrl = apiName.BASEURL+Url
        let headersToken = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
       
        return (
            fetch(CompleteUrl, {
                method: method,
                headers: headersToken,
                body: JSON.stringify(SendData)
            })
        )
            .then(res =>
                res.json())
            .then(json => {
                return json
            })
    } catch (e) {
        console.log('catch error-', e)
        return false;
    }
}