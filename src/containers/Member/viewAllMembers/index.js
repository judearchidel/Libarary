import React from 'react'
import classes from './index.module.scss' 
import { useSelector } from 'react-redux'

export const ViewAllMembers = ()=>{
    const memberdata = useSelector(state=>state.member);
    console.log(memberdata);
    return <p>vie members</p>
}