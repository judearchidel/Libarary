import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './index.module.scss';
import {BookSearch} from '../searchbook/index';
import {Hoc} from '../../../hoc/hoc';
import { SearchCard } from '../../../components/UI/SearchCard';
import { Link } from 'react-router-dom';

export const ViewBooks = (props) =>{
    const books                                     = useSelector(state=> state.book);
    const [bookSearchResult,setBookSearchResult]    = useState('');
    const isBooksAvailable = books.length;

    const RenderBooksTable=()=>{
        const  mapBookRows = books.map(el=>{
            return <tr key={el.id}>
                    <td>{el.id}</td>
                    <td>{el.BookName}</td>
                    <td>{el.Count}</td>
                    <td>{el.Author}</td>
                    <td>{el.Genre}</td>
                    <td>{el.Discription}</td>
                    <td>{el.Price}</td>
                    <td>{el.issueCount}</td>
                    <td><Link to={{
                        pathname: "/removebook",
                        search:"?" + el.id
                        }}>
                            <button><FontAwesomeIcon icon={faTrashAlt} className={classes.Icon}/></button>
                        </Link>
                    </td>
            </tr>
        })
        
        return <div>
            {searchBookAndDisplay()}
            <table className={classes.bookTable}>
                <thead className={classes.bookTableHead}>
                    <tr>
                        <th>id</th>
                        <th>Book Name</th>
                        <th>Count</th>
                        <th>Author</th> 
                        <th>Genre</th>
                        <th>Discription</th>
                        <th>Price</th>
                        <th>issued Count</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className={classes.bookTableBody}>
                    {mapBookRows}
                </tbody>        
            </table>
        </div>

    }

    const searchBookAndDisplay = ()=>{
        const search = <div className={classes.searchBar}>
            <BookSearch bookTodispay={searchResult} /></div>
            let display= null;
            if(bookSearchResult){
            display= <div className={classes.searchResult}>
                <SearchCard>
                    <p>Book Name: {bookSearchResult.BookName}</p>
                    <p>Author: {bookSearchResult.Author}</p>
                    <p>Discription: {bookSearchResult.Discription}</p>
                    <p>No OF books: {bookSearchResult.Count}</p>
                    <p>Genre: {bookSearchResult.Genre}</p>
                    <p>Price: {bookSearchResult.Price}</p>  
                </SearchCard>
            </div>
        }
        return <Hoc>
                {search}
                {display}
            </Hoc>
    }

    const searchResult = (book,index)=>{
        setBookSearchResult(book);
    }

    const nobooksDisplay = ()=>{
        return <div>
                <p>Please add some books</p>
        </div>
    }    
    
    return (
        <div className={classes.viewBooks}>
            <h1>Books</h1>
            <div className={classes.viewBooksTable}>
                {isBooksAvailable?RenderBooksTable():nobooksDisplay()}
            </div>
        </div>)
}