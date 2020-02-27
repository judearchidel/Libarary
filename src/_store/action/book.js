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