import { USER_INFO_REQUEST, USER_INFO_SUCCESS, USER_INFO_FAIL  } from "../costants/userConst"

function userInfoReducer(state = {user: {index:0, userName: ''}}, action ) {
    switch (action.type) {
        case USER_INFO_REQUEST:
            return {loading: true}
            
        case USER_INFO_SUCCESS:
            return {loading: false, user: action.payload, userName: action.payload.userName}
        case USER_INFO_FAIL :
            return {loading: false, error: action.payload}
        default : return state
    }
}

export {userInfoReducer}