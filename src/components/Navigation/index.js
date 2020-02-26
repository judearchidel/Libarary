import React from 'react';
import classes from './index.module.scss';
import {NavigationItem} from './NavigationItem/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';

export const Navigation = (props)=>{
    const userid= useSelector(state=>state.auth.userid)
return <div className={classes.NavBar}>
        <div className={classes.NavBarUser}>
        <FontAwesomeIcon icon={faUserCircle} className={classes.Icon}/>
        <p>{userid}</p>
        </div>
        <ul className={classes.Navigation}>
            <NavigationItem link='/'>Book Shelf</NavigationItem>
            <NavigationItem link='/member'>Member</NavigationItem>
            <NavigationItem link='/logout'>Logout</NavigationItem>
        </ul>
    </div>
}