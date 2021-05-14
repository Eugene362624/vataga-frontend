import { QUESTION_DETAILS_FAIL, QUESTION_DETAILS_REQUEST, QUESTION_DETAILS_SUCCESS, QUESTION_LIST_FAIL, QUESTION_LIST_REQUEST, QUESTION_LIST_SUCCESS } from "../costants/questionConst"

function questionListReducer(state = {questions: [], count: 0}, action) {
    switch (action.type) {
        case QUESTION_LIST_REQUEST:
            return {loading: true}
        case QUESTION_LIST_SUCCESS: 
            return {loading: false, questions: action.payload.questions, count: action.payload.count, tags: action.payload.tags}
        case QUESTION_LIST_FAIL:
            return {loading: false, error: action.payload}
        default: 
            return state
    }
}

function questionDetailsReducer(state = {question: {}}, action) {
    switch (action.type) {
        case QUESTION_DETAILS_REQUEST:
            return {loading: true}
        case QUESTION_DETAILS_SUCCESS: 
            return {loading: false, question: action.payload}
        case QUESTION_DETAILS_FAIL:
            return {loading: false, error: action.payload}
        default: 
            return state
    }
}

export {questionListReducer, questionDetailsReducer}