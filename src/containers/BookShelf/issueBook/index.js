import React, {useState} from 'react';
import classes from './index.module.scss';
import { SearchCard } from '../../../components/UI/SearchCard';
import {MemberSearch} from '../../Member/memberSearch/index';
import { BookSearch } from '../searchbook';
import * as action from '../../../_store/action/index';
import { connect } from 'react-redux';

export const InitialIssueBook= (props)=>{
    const initialState = {
        bookToIssue: '',
        bookIndex:'',
        membertoIssue:'',
        memberIndex:'',
        isBookSelected: false
    }

    const [issueBookState,setIssueBookState] = useState(initialState);
    const {onIssueBook,onIssueMember}        = {...props};

    const displayBook=()=>{
        let show= <p>No books found</p>;
        if(issueBookState.bookToIssue){
            show =  <SearchCard>
                        <div className={classes.showBook}>
                            <p>Book Name: {issueBookState.bookToIssue.BookName}</p>
                            <p>Count : {issueBookState.bookToIssue.Count}</p>
                            {issueBookState.isBookSelected? dispalyMemeberSearch() 
                            :<button onClick={()=>checkBookAvailabilty()}>select Book</button>}
                        </div>    
                    </SearchCard>
        }
        return show;   
    }

    const checkBookAvailabilty = ()=>{
        const isBookAvailable = issueBookState.bookToIssue.Count >= issueBookState.bookToIssue.issueCount;    
        if(isBookAvailable){
            setIssueBookState({
                ...issueBookState,
                isBookSelected: true
            })   
        }
        else{
            alert("this book is out of stock")
        }
    }

    const searchMemberResult = (result,index)=>{
        setIssueBookState({
            ...issueBookState,
            membertoIssue: result,
            memberIndex: index
        })   
    }

    const searchBookResult = (result,index)=>{
        setIssueBookState({
            ...issueBookState,
            bookToIssue: result,
            bookIndex: index
        })    
    }

    const displayMemeber= ()=>{
        let show= [];
        if(issueBookState.membertoIssue){
            show = (
                <div className={classes.showMem}>
                    <p>Name: {issueBookState.membertoIssue.Name}</p>
                    <p>Age: {issueBookState.membertoIssue.Age}</p>
                    <p>ID: {issueBookState.membertoIssue.id}</p>
                    <p>Books in Hand: {issueBookState.membertoIssue.issuedBooks.count}</p>
                    <button onClick={()=>ckeckMemberIsuueLimit()}>Issue Book</button>
                </div>
            )
        }
        return show;
    }

    const ckeckMemberIsuueLimit = ()=>{
        const isMemberEligibleToIsuue = (issueBookState.membertoIssue.issuedBooks.count < 2);
        if(isMemberEligibleToIsuue){
            onIssueBook(issueBookState.bookIndex);
            onIssueMember(issueBookState.memberIndex,issueBookState.bookToIssue.id)
            setIssueBookState(initialState);
        }
        else{
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

    return (
        <div className={classes.issueBook}> 
            <h1>Issue books</h1>
            <div className={classes.searchBar}>   
                <BookSearch bookTodispay={searchBookResult}/>
            </div>
            <div className={classes.displayBook}>
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