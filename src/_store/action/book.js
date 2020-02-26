import * as actionTypes from './actionTypes';

export const bookAdd = (booksData)=>{
return {
        type: actionTypes.BOOK_ADD ,
        bookData: booksData
    }
}