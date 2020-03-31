import React, { useState } from 'react';
import {MemberSearch} from '../../Member/memberSearch/index';
import * as actions from '../../../_store/action/index';
import { useSelector, connect } from 'react-redux';
import classes from './index.module.scss';
import { Hoc } from '../../../hoc/hoc';


export const InitialReturnBook= (props)=>{
    const initialState= {
        memberToreturn: '',
        memberIndex: '',
        bookId: '',
        bookidIndex: '',
        bookToReturn:'',
        bookIndex: ''
    }
    const [returnState,setReturnState]                      = useState(initialState); 
    const bookList                                          = useSelector(state=>state.book);
    const {onBookReturnBookAction,onBookReturnMemberAction} = {...props}

    const memberSearchResult = (result, index)=>{
        setReturnState({
            ...returnState,
            memberToreturn: result,
            memberIndex: index 
        })
    }

    const displaySearchresult= ()=>{
        let issuedBookIds = null;
        if(returnState.memberToreturn){
            if(returnState.memberToreturn.issuedBooks.count > 0){
                issuedBookIds = returnState.memberToreturn.issuedBooks.bookids.map((el,index) =>{
                    return (
                        <div key={index+el} className={classes.returnMemBook}>
                            <p>{index+1}: Book Id:{el}</p>
                            <button onClick={()=>selectBook(el,index)}>Select Book</button>
                        </div>)
                })
            }
            else {
                issuedBookIds = <p>No Books Issued</p>
            }  
            return <div className={classes.returnMember}>
                        <p>Name: {returnState.memberToreturn.name}</p>
                        <p>Member ID: {returnState.memberToreturn.id}</p>
                        {issuedBookIds}
                        {displaySelectedBook()}  
                    </div>
        }
    }

    const selectBook =(bookid,bookidIndex)=>{
        const bookIndex = bookList.findIndex(el=>{
            return el.id === bookid
        })
        setReturnState({...returnState,
            bookid: bookid,
            bookidIndex: bookidIndex,
            bookToReturn: bookList[bookIndex],
            bookIndex: bookIndex
        })
    }

    const displaySelectedBook=()=>{
        let book= null;
        if(returnState.bookToReturn){
            book = (
                <div className={classes.selectedBook}>
                    <p>Book name: {returnState.bookToReturn.BookName}</p>
                    <p>Author:  {returnState.bookToReturn.Author}</p>
                    <p>Book ID: {returnState.bookToReturn.id}</p>
                    <p>Price: {returnState.bookToReturn.Price}</p>
                    <button onClick={()=>returnBookd()}>confirm Return</button>    
                </div>)
        }
        return book;
    }

    const returnBookd= () =>{
        onBookReturnBookAction(returnState.bookIndex)
        onBookReturnMemberAction(returnState.memberIndex,returnState.bookidIndex);
        setReturnState(initialState);
    }

    return (
            <Hoc>
                <h1>Return books</h1>
                <div className={classes.returnSearch}>    
                    <MemberSearch memberTodispay={memberSearchResult}></MemberSearch>    
                </div>
                {displaySearchresult()}
            </Hoc>
        )
    }

const mapDispatchToProps = (dispatch)=>{
    return{
        onBookReturnMemberAction: (memberIndex,bookidIndex)=>dispatch(actions.memberReturn(memberIndex,bookidIndex)),
        onBookReturnBookAction:(bookIndex)=>dispatch(actions.reduceIssueCount(bookIndex))
    }
}

export const ReturnBook = connect(null,mapDispatchToProps)(InitialReturnBook);