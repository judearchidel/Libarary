import React from 'react';
import { useSelector } from 'react-redux';

export const ViewBooks = (props) =>{
    
    const books=useSelector(state=> state.book)
    console.log(books);
    return (
        <div><p>view books</p></div>)
}