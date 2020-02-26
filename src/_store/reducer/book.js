import * as actionTypes from '../action/actionTypes';

const intialState = [];

export const bookReducer = (state= intialState, action)=>{
    switch(action.type){
        case actionTypes.BOOK_ADD:
            const newState = [...state]
            newState.push(action.bookData)
            return newState
        case actionTypes.BOOK_REMOVE:
            return state
        case actionTypes.BOOK_ISSUE:
            return state
        case actionTypes.BOOK_RETURN:
            return state
        default:
            return state
    }
}