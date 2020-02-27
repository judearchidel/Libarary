import React, { useRef, useState,useEffect } from 'react';
import { SearchCard } from '../../../components/UI/SearchCard';
import classes from './index.module.scss';
import { useSelector, connect } from 'react-redux';
import * as actions from '../../../_store/action/index';

const InitailremoveBook= (props)=>{
const {onRemoveBook,onReduceBookCount} = {...props}
const inputref = useRef();
const [enteredSearchvalue,setEnteredSearchvalue] = useState('');
const [bookToShow,setbookToShow]=useState('');

const booksList = useSelector(state=>state.book)
useEffect(()=>{
    const timer = setTimeout(()=>
    {
      if(enteredSearchvalue === inputref.current.value)
      {
       const index= booksList.findIndex(el=>{
           return enteredSearchvalue===el.BookName
       })  
      setbookToShow(booksList[index]);
      }
    },500)
    
    return ()=>{
        clearTimeout(timer);
      }
},[enteredSearchvalue,booksList])



const removeBookhandler=()=>{
    const index= booksList.findIndex(el=>{
        return bookToShow.BookName===el.BookName
    })  
onRemoveBook(index);
}
const removeBookCounthandler=()=>{
    const index= booksList.findIndex(el=>{
        return bookToShow.BookName===el.BookName
    }) 
onReduceBookCount(index);
}

const dispalyBook= ()=>{
    let show= null;
if(bookToShow)
{ show= <SearchCard>
<p>Book Name: {bookToShow.BookName}</p>
<p>Count : {bookToShow.Count}</p>
{bookToShow.Count>1 && <button onClick={()=>removeBookCounthandler()}>Remove one Book</button>}
<button onClick={()=>removeBookhandler()}>Remove Book</button>
</SearchCard>}

return show;

}
    return (<div className={classes.RemoveBook}>
        <h1>Remove book</h1>
        <SearchCard>
            <div>
                <label>Search by book Name</label>
                <input 
                ref={inputref}
                type="text" value={enteredSearchvalue} 
                onChange={event=>setEnteredSearchvalue(event.target.value)}/>
            </div>
        </SearchCard>
        <div>
            {dispalyBook()}
        </div>
        </div>)
}

const mapDispatchToProps=(dispatch) =>{
return {
    onRemoveBook: (index)=>dispatch(actions.bookRemove(index)),
    onReduceBookCount: (index)=>dispatch(actions.reduceBookCount(index))
}
}

export const RemoveBook = connect(null,mapDispatchToProps)(InitailremoveBook)