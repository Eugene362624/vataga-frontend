import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { questionDetailsReducer, questionListReducer } from './reducers/questionReducers'
import {loginUserReducer} from './reducers/userReducers'
import thunk from 'redux-thunk'
import Cookie from 'js-cookie'

const userInfo = Cookie.getJSON("userInfo") || null
console.log(userInfo)

const initialState = { userLogin : {userInfo}}
const reducer = combineReducers({
    questionList: questionListReducer,
    questionDetails: questionDetailsReducer,
    userLogin: loginUserReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store