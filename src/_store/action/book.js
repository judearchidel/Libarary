import * as actionTypes from './actionTypes';

export const bookAdd = (booksData)=>{
return {
        type: actionTypes.BOOK_ADD ,
        bookData: booksData
    }
}
export const bookRemove = (index)=>{
    return{
        type:actionTypes.BOOK_REMOVE,
        index: index
    }
}
export const reduceBookCount = (index)=>{
    return{
        type:actionTypes.BOOK_REDUCE,
        index: index
    }
}

export const addIssuecount = (index)=>{
    return{
        type: actionTypes.BOOK_ISSUE,
        index: index
    }
}

export const reduceIssueCount = (index)=>{
   return{
        type:actionTypes.BOOK_RETURN,
        index: index
}    
}    
