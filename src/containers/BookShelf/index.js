import React, { useState } from 'react';
import { faBook, faTrashAlt, faPlusSquare, faSearchPlus, faExchangeAlt, faSwatchbook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './index.module.scss';
import { Card } from '../../components/UI/card';
import { Route, Switch} from 'react-router-dom';
import { ViewBooks } from './ViewBooks/index';
import { IssueBook } from './issueBook';
import { ReturnBook } from './returnBook';
import { AddBook } from './addBook';
import { RemoveBook } from './removeBook';
import { Hoc } from '../../hoc/hoc';
import { SearchCard } from '../../components/UI/SearchCard';
import { useSelector } from 'react-redux';

export const BookShelf = (props) =>{
    const bookLists          = useSelector(state=>state.book);
    const [active,setActive] = useState('');

    const routes = <Switch>
        <Route path={'/viewbook'} component={ViewBooks}/>
        <Route path={'/issuebook'}  component={IssueBook}/>
        <Route path={'/returnbook'}  component={ReturnBook}/>
        <Route path={'/addbook'}  component={AddBook}/>
        <Route path={'/removebook'} component={RemoveBook}/>
    </Switch>

    const changeBooksAction=(link)=>{
        props.history.push(link);
        setActive(link);
    }

    const displayActions = ()=>{
        const menu =  <div className={classes.BookShelfMenu}>
            <Card iconName={faSearchPlus} link='/viewbook' 
                act={active==='/viewbook'}
                click={changeBooksAction}>View books</Card>
            <Card iconName={faBook} link='/issuebook' 
                act={active==='/issuebook'}
                click={changeBooksAction}>Issue books</Card>
            <Card iconName={faExchangeAlt} link='/returnbook'
                act={active==='/returnbook'} 
                click={changeBooksAction}>Return books</Card>
            <Card iconName={faPlusSquare} link='/addbook'
                act={active==='/addbook'} 
                click={changeBooksAction}>Add books</Card>
            <Card iconName={faTrashAlt} link='/removebook'
                act={active==='/removebook'} 
                click={changeBooksAction}>Remove books</Card>  
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
        return (
            <div className={classes.BookCount}>
                <div>
                <FontAwesomeIcon icon={faSwatchbook} className={classes.Icon}/>
                </div>
                <div className={classes.BookcountText}>
                <p>Books Issued</p>
                <span>{total}</span>
                </div>
            </div>)
    }

    const displayBookCount = ()=>{
        const bookCount = bookLists.length
            return (
            <div className={classes.BookCount}>
                <div>
                <FontAwesomeIcon icon={faBook} className={classes.Icon}/>
                </div>
                <div className={classes.BookcountText}>
                <p>Book Count</p>
                <span>{bookCount}</span>
                </div>
            </div>)
    }


    return(
        <Hoc>
            <div className={classes.BookShelf}>
                {displayActions()}
                <div className={classes.BookShelfActionDispaly}>
                    <div className={classes.BookShelfHeading}>
                    {active?<h2> Book Shelf <span>Book {active}</span></h2>:
                    <h2> Book Shelf Dashboard <span>{'\u00A0'}</span></h2>
                    }
                    </div>
                    <div className={classes.Dash}> 
                        <SearchCard>
                            {displayBookCount()}
                        </SearchCard>
                        <SearchCard>
                            {displayBooksIssued()}
                        </SearchCard>
                    </div>
                </div>
            </div>
            <div>
                {routes}
            </div>
        </Hoc>
    )
}