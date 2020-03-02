import React, { useState } from 'react';
import {MemberSearch} from '../../Member/memberSearch/index';
import * as actions from '../../../_store/action/index';
import { useSelector, connect } from 'react-redux';


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
    setReturnState({...returnState,
                memberToreturn: result,
                memberIndex: index 
            })
}

const displaySearchresult= ()=>{
    let issuedBookIds = null;
    if(returnState.memberToreturn){
        if(returnState.memberToreturn.issuedBooks.count > 0){
            issuedBookIds = returnState.memberToreturn.issuedBooks.bookids.map((el,index) =>{
                return <div key={el+index}>
                <p >{el}</p>
                <button onClick={()=>selectBook(el,index)}>Select Book</button>
                {displaySelectedBook()}
                </div>
            })
        }else {
            issuedBookIds = <p>NO books Issued</p>
        }  
    return <div>
                <p>{returnState.memberToreturn.name}</p>
                <p>{returnState.memberToreturn.id}</p>
                {issuedBookIds}  
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
book = <div>
                <p>{returnState.bookToReturn.BookName}</p>
                <p>{returnState.bookToReturn.Author}</p>
                <p>{returnState.bookToReturn.id}</p>
                <p>{returnState.bookToReturn.Price}</p>
                <button onClick={()=>returnBookd()}>confirm Return</button>    
</div>
}
return book;
}

const returnBookd= () =>{
onBookReturnBookAction(returnState.bookIndex)
onBookReturnMemberAction(returnState.memberIndex,returnState.bookidIndex);
setReturnState(initialState);
}

    return (<div>
        <p>return books</p>
        <MemberSearch memberTodispay={memberSearchResult}></MemberSearch>
        {displaySearchresult()}
        </div>)
}

const mapDispatchToProps = (dispatch)=>{
    return{
        onBookReturnMemberAction: (memberIndex,bookidIndex)=>dispatch(actions.memberReturn(memberIndex,bookidIndex)),
        onBookReturnBookAction:(bookIndex)=>dispatch(actions.reduceIssueCount(bookIndex))
    }
}

export const ReturnBook = connect(null,mapDispatchToProps)(InitialReturnBook);