import React,{useState,useRef,useEffect} from 'react';
import classes from './index.module.scss';
import { useSelector } from 'react-redux';
import {SearchCard} from '../../../components/UI/SearchCard';

export const MemberSearch = (props) =>{
    const {memberTodispay}={...props};
    const memberList = useSelector(state=>state.member)
    const [memberSearchValue,setMemberSearchValue] = useState('');
    const inputref = useRef();
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(memberSearchValue === inputref.current.value)
            {
                const index= memberList.findIndex(el=>{
                    return el.Name === memberSearchValue
                })
                memberTodispay(memberList[index],index)
            }
        },500)
        return ()=>{
            clearTimeout(timer);
        }
    },[memberSearchValue,memberList,memberTodispay])

   return(<SearchCard>
                <label>Search by Name : </label>
                <input type='text' className={classes.input} ref={inputref} 
                onChange={(event)=>setMemberSearchValue(event.target.value)}/>
            </SearchCard>)
}