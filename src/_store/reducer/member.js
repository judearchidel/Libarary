import * as actionTypes from '../action/actionTypes';

const initialState = [];

export const memeberReducer= (state= initialState, action)=>{
    let newState = null;
    switch(action.type){
        case actionTypes.MEMBER_ADD:
            newState=[...state];
            newState.push(action.memberData);
            return newState;
        case actionTypes.MEMBER_REMOVE:
            newState=[...state];
            newState.splice(action.index,1)
            return newState;
        case actionTypes.MEMBER_ISSUE:
            newState=[...state];
            newState[action.index].issuedBooks.count +=1;
            newState[action.index].issuedBooks.bookids.push(action.bookid);
            return newState;
        case actionTypes.MEMBER_RETURN:
            newState=[...state];
            newState[action.index].issuedBooks.count -=1;
            newState[action.index].issuedBooks.bookids.splice(action.bookIdIndex,1);
            return newState;
        default:
            return state;
    }
}
