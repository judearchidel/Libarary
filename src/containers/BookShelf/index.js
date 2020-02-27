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

export const bookShelf = (props) =>{
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
    
    return(<div className={classes.BookShelf}>
        <div className={classes.BookShelfMenu}>
                <Card iconName={faSearchPlus} link='/viewbook' click={changeBooksAction}>View books</Card>
                <Card iconName={faBook} link='/issueBook' click={changeBooksAction}>issue books</Card>
                <Card iconName={faExchangeAlt} link='/returnbook' click={changeBooksAction}>return books</Card>
                <Card iconName={faPlusSquare} link='/addbook' click={changeBooksAction}>Add books</Card>
                <Card iconName={faTrashAlt} link='/removebook' click={changeBooksAction}>Remove books</Card>  
            </div>
            <div className={classes.BookShelfActionDispaly}>
                {routes}
            </div>
        </div>
        
        )
}