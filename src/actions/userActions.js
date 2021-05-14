import axios from "axios"
import cookie from "js-cookie"
import { LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS } from "../costants/userConst"

const loginUser = (userEmail, userPassword) => async (dispatch) => {
    dispatch({ type: LOGIN_USER_REQUEST, payload: {userEmail, userPassword} })
    try {
        const { data } = await axios.post('http://localhost:3001/login', {userEmail, userPassword})
        console.log(data.token)
        dispatch({ type: LOGIN_USER_SUCCESS, payload: data })
        cookie.set('userInfo', JSON.stringify(data) )
    } catch (error) {
        dispatch({type: LOGIN_USER_FAIL, payload: error.message})
    }
}

export {loginUser}