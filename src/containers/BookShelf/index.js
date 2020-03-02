import React from 'react';
import { faBook, faTrashAlt, faPlusSquare, faSearchPlus, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import classes from './index.module.scss';
import { Card } from '../../components/UI/card';
import { Route, Switch, Redirect} from 'react-router-dom';
import { ViewBooks } from './ViewBooks/index';
import { IssueBook } from './issueBook';
import { ReturnBook } from './returnBook';
import { AddBook } from './addBook';
import { RemoveBook } from './removeBook';
import { Hoc } from '../../hoc/hoc';
import { SearchCard } from '../../components/UI/SearchCard';
import { useSelector } from 'react-redux';

export const BookShelf = (props) =>{

const bookLists = useSelector(state=>state.book);

const routes= <Switch>
    <Route path={props.match.url + '/viewbook'}  component={ViewBooks}/>
    <Route path={props.match.url + '/issuebook'}  component={IssueBook}/>
    <Route path={props.match.url + '/returnbook'}  component={ReturnBook}/>
    <Route path={props.match.url + '/addbook'}  component={AddBook}/>
    <Route path={props.match.url + '/removebook'} component={RemoveBook}/>
    <Redirect to='/book'/>
</Switch>

const changeBooksAction=(link)=>{
    props.history.push(props.match.url + link);
}

const displayActions = ()=>{
    const menu =  <div className={classes.BookShelfMenu}>
    <Card iconName={faSearchPlus} link='/viewbook' click={changeBooksAction}>View books</Card>
    <Card iconName={faBook} link='/issueBook' click={changeBooksAction}>issue books</Card>
    <Card iconName={faExchangeAlt} link='/returnbook' click={changeBooksAction}>return books</Card>
    <Card iconName={faPlusSquare} link='/addbook' click={changeBooksAction}>Add books</Card>
    <Card iconName={faTrashAlt} link='/removebook' click={changeBooksAction}>Remove books</Card>  
</div>
return menu
}    

const displayBooksIssued= ()=>{
    let total = 0;
    let issueCount=[];
    if(bookLists.length > 0){
    issueCount = bookLists.map((el)=> {
            return el.issueCount})
    total = issueCount.reduce((sum,el)=>sum+el)
    }
    return <p>books issued count : {total}</p>
}
const displayBookCount = ()=>{
   const bookCount = bookLists.length
    return <p>book Count: {bookCount}</p>
}


    return(<Hoc>
        <div className={classes.BookShelf}>
            {displayActions()}
            <div className={classes.BookShelfActionDispaly}>
               <h2> Book Shelf</h2>
               <div className={classes.Dash}> 
               <SearchCard>
                    {displayBookCount()}
               </SearchCard>
                <SearchCard>
                    {displayBooksIssued()}
                </SearchCard>
                </div>
                <div>
                  {routes}
                </div>
       
            </div>
       </div>
       
        </Hoc>
        )
}