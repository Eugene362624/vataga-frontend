const { LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER_REQUEST } = require("../costants/userConst");

function loginUserReducer(state = {}, action ) {
    switch (action.type) {
        case LOGIN_USER_REQUEST:
            return {loading: true}
        case LOGIN_USER_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case LOGIN_USER_FAIL:
            return {loading: false, error: action.payload}
        default : return state
    }
}

export {loginUserReducer}