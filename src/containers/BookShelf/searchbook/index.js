import React,{useState,useRef,useEffect} from 'react';
import classes from './index.module.scss';
import { useSelector } from 'react-redux';
import {SearchCard} from '../../../components/UI/SearchCard';

export const BookSearch = (props) =>{
    const {bookTodispay}                       =  {...props};
    const bookList                             = useSelector(state=>state.book)
    const [bookSearchValue,setBookSearchValue] = useState('');
    const inputref                             = useRef();
    
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(bookSearchValue === inputref.current.value)
            {
                const index= bookList.findIndex(el=>{
                    return el.BookName === bookSearchValue
                })
                bookTodispay(bookList[index],index)
            }
        },500)
        return ()=>{
            clearTimeout(timer);
        }
    },[bookSearchValue,bookList,bookTodispay])

   return(<SearchCard>
                <label >Search book by Name:  </label>
                <input className={classes.input} type='text' ref={inputref} 
                onChange={(event)=>setBookSearchValue(event.target.value)}/>
            </SearchCard>)
}