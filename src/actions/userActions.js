import axios from "axios"
import cookie from "js-cookie"
import { LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, USER_INFO_FAIL, USER_INFO_REQUEST, USER_INFO_SUCCESS } from "../costants/userConst"

const loginUser = (userEmail, userPassword) => async (dispatch) => {
    dispatch({ type: LOGIN_USER_REQUEST, payload: {userEmail, userPassword} })
    try {
        const { data } = await axios.post('/login', {userEmail, userPassword})
        console.log(data.token)
        dispatch({ type: LOGIN_USER_SUCCESS, payload: data })
        cookie.set('userInfo', JSON.stringify(data) )
    } catch (error) {
        dispatch({type: LOGIN_USER_FAIL, payload: error.message})
    }
}

const fullUserInfo = (userId = 0) => async (dispatch) => {
    try {
        dispatch({type: USER_INFO_REQUEST})
        const {data} = await axios.get('/api/users/'+userId)
        console.log(data)
        dispatch({type: USER_INFO_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: USER_INFO_FAIL, payload: error.message})
    }
}

export {loginUser, fullUserInfo}