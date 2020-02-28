import * as actionTypes from '../action/actionTypes';

const intialState = [];

export const bookReducer = (state= intialState, action)=>{
   let newState = null;
    switch(action.type){
        case actionTypes.BOOK_ADD:
            newState = [...state]
            newState.push(action.bookData)
            return newState
        case actionTypes.BOOK_REMOVE:
            newState = [...state]
            newState.splice(action.index,1)
            return newState
        case actionTypes.BOOK_REDUCE:
            newState = [...state]
            newState[action.index].Count -= 1;
            console.log(newState)
            return newState
        case actionTypes.BOOK_ISSUE:
            newState =[...state]
            console.log(action.index);
            newState[action.index].issueCount += 1;
            return newState
        case actionTypes.BOOK_RETURN:
            newState =[...state]
            newState[action.index].issueCount += 1;
            return newState
        default:
            return state
    }
}