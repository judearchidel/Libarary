import React, {useState,useEffect } from 'react';
import { SearchCard } from '../../../components/UI/SearchCard';
import classes from './index.module.scss';
import { useSelector, connect } from 'react-redux';
import * as actions from '../../../_store/action/index';
import { BookSearch } from '../searchbook';

const InitailremoveBook= (props)=>{
    const {onRemoveBook,onReduceBookCount}  = {...props}
    const [bookToShow,setbookToShow]        = useState('');
    const booksList                         = useSelector(state=>state.book)
    const book                              = null;
    const [showSearch,setShowSearch]        = useState(false); 
    const title = [];
    const query = new URLSearchParams(props.location.search);
    for(let par of query.entries()){
        title.push(par);
    }    
    useEffect(()=>{
        if(title[0]){
            setShowSearch(true);
            const index= booksList.findIndex(el=>{
                return el.id === title[0][0]
            })
            setbookToShow(booksList[index]) ;
        }
    },[book])
      

    const removeBookhandler=()=>{
        const index= booksList.findIndex(el=>{
            return bookToShow.BookName===el.BookName
        })  
        onRemoveBook(index);
        setShowSearch(false);
        setbookToShow('');
    }

    const removeBookCounthandler=()=>{
        const index= booksList.findIndex(el=>{
            return bookToShow.BookName===el.BookName
        }) 
        onReduceBookCount(index);
    }

    const dispalyBook= ()=>{
        let show= null;
        if(book){
            setbookToShow(book);
        }
        if(bookToShow){ 
                const isBooktoRemoveByCount = bookToShow.Count>1;
                show= <SearchCard>
                <p>Book Name: {bookToShow.BookName}</p>
                <p>Count : {bookToShow.Count}</p>
                { isBooktoRemoveByCount && <button onClick={()=>removeBookCounthandler()}>Remove one Book</button>}
                <button onClick={()=>removeBookhandler()}>Remove Book</button>
                </SearchCard>
        }
        return show;
    }

    const searchBookResult = (result, index)=>{
        setbookToShow(result)
    }

    return (
        <div className={classes.RemoveBook}>
            <h1>Remove book</h1>
            {!showSearch&&<BookSearch bookTodispay={searchBookResult}></BookSearch>}
            <div className={classes.removeBookDisplay}>
                {dispalyBook()}
            </div>
        </div>
    )
}

const mapDispatchToProps=(dispatch) =>{
    return {
        onRemoveBook: (index)=>dispatch(actions.bookRemove(index)),
        onReduceBookCount: (index)=>dispatch(actions.reduceBookCount(index))
    }
}

export const RemoveBook = connect(null,mapDispatchToProps)(InitailremoveBook)