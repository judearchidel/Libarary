import React, {useState} from 'react';
import classes from './index.module.scss';
import { SearchCard } from '../../../components/UI/SearchCard';
import {MemberSearch} from '../../Member/memberSearch/index';
import { BookSearch } from '../searchbook';
import * as action from '../../../_store/action/index';
import { connect } from 'react-redux';

export const InitialIssueBook= (props)=>{
    const {onIssueBook,onIssueMember}        ={...props}
    const [bookToIssue,setBookToIssue]       = useState('');
    const [membertoIssue,setMembertoIssue]   = useState(null);
    const [selectedBook, setSelectedBook]    = useState(false);
    const [memberIndex,setMemberIndex]       = useState(null);
    const [bookIndex,setBookIndex]           = useState(null);

const displayBook=()=>{
    let show= null;
    if(bookToIssue){
        show =  <SearchCard>
                    <p>Book Name: {bookToIssue.BookName}</p>
                    <p>Count : {bookToIssue.Count}</p>
                    {selectedBook? dispalyMemeberSearch() 
                    :<button onClick={()=>checkBookAvailabilty()}>select Book</button>}
                </SearchCard>
        }
    return show;   
    }

const checkBookAvailabilty = ()=>{
    const isBookAvailable = bookToIssue.Count >= bookToIssue.issueCount;    
    if(isBookAvailable){
            setSelectedBook(true);   
        }else{
            alert("this book is out of stock")
        }
    }

const searchMemberResult = (result,index)=>{
        setMemberIndex(index);
        setMembertoIssue(result)
    }

const searchBookResult = (result,index)=>{
        setBookIndex(index);
        setBookToIssue(result)
    }

const displayMemeber= ()=>{
       let show= [];
        if(membertoIssue){
            show=<div>
                    <p>{membertoIssue.name}</p>
                    <p>{membertoIssue.age}</p>
                    <p>{membertoIssue.id}</p>
                    <p>{membertoIssue.issuedBooks.count}</p>
                    <button onClick={()=>ckeckMemberIsuueLimit()}>Issue Book</button>
                </div>
        }
        return show;
    }
const ckeckMemberIsuueLimit = ()=>{
    const isMemberEligibleToIsuue = (membertoIssue.issuedBooks.count < 2);
    if(isMemberEligibleToIsuue){
        onIssueBook(bookIndex);
        onIssueMember(memberIndex,bookToIssue.id)
    }else{
        alert("you can keep only 2 books")
    }

}
const dispalyMemeberSearch=()=>{  
        return <div>
                    <MemberSearch memberTodispay={searchMemberResult}/>
                    <div>
                        {displayMemeber()}
                    </div>
                </div>
    }

return (<div>
            <h1>Issue books</h1>
            <BookSearch bookTodispay={searchBookResult}/>
            <div>
                {displayBook()}
            </div>
        </div>)
}

const mapDispatchToProps = dispatch =>{
    return {
        onIssueBook: (index)=>dispatch(action.addIssuecount(index)),
        onIssueMember: (index,bookid)=>dispatch(action.memberIssue(index,bookid))
    }
}

export const IssueBook = connect(null,mapDispatchToProps)(InitialIssueBook);