import axios from "axios"
import { QUESTION_DETAILS_FAIL, QUESTION_DETAILS_REQUEST, QUESTION_DETAILS_SUCCESS, QUESTION_LIST_FAIL, QUESTION_LIST_REQUEST, QUESTION_LIST_SUCCESS } from "../costants/questionConst"

const listQuestions = ({sort, page}) => async (dispatch) => {
    try {
        dispatch({ type: QUESTION_LIST_REQUEST })
        console.log(sort)
        const { data } = await axios.get(`/api/questions/?page=${page}&sort=${sort}`)
        console.log(data)
        dispatch({ type: QUESTION_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({type: QUESTION_LIST_FAIL, payload: error.message})
    }
}

const detailsQuestion = (questionId) => async (dispatch) => {
    try {
        dispatch({type: QUESTION_DETAILS_REQUEST, payload: questionId})
        const {data} = await axios.get('/api/question/' + questionId)
        dispatch({type: QUESTION_DETAILS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: QUESTION_DETAILS_FAIL, payload: error.message})
    }
}

export {listQuestions, detailsQuestion}